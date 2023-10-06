import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios'; 
const socket = io('http://localhost:4444'); 

const App = (props) => {
    const [realTimeData, setRealTimeData] = useState([])
    const [databaseData, setDatabaseData] = useState([])
    const [timestamp, setTimestamp] = useState('')

    useEffect(() => {
        // Listen for the 'dataSaved' event from the server (real-time data)
        socket.on('dataSaved', (receivedData) => {
        setTimestamp(receivedData.timestamp)
        setRealTimeData(receivedData.data)
        })

        // Fetch database data from your API endpoint
        fetchDataFromDatabase()

        // Clean up the event listener when the component unmounts
        return () => {
        socket.off('dataSaved')
        }
    }, [])

    const fetchDataFromDatabase = async () => {
        try {
        const response = await axios.get('http://localhost:5000/api/data')
        console.log(response.data)
        setDatabaseData(response.data);
        } catch (error) {
        console.error('Error fetching database data:', error);
        }
    }

    return (
        <div>
        <h1>Socket.IO Real-Time Data</h1>
        <p><strong>Timestamp:</strong> {timestamp}</p>
        <ul>
            {realTimeData.map((item, index) => (
            <li key={index}>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Origin:</strong> {item.origin}</p>
                <p><strong>Destination:</strong> {item.destination}</p>
            </li>
            ))}
        </ul>
            <h1>Database Data</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {databaseData.map((entry, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.data.map((item) => item.name).join(', ')}</td>
                            <td>{entry.data.map((item) => item.origin).join(', ')}</td>
                            <td>{entry.data.map((item) => item.destination).join(', ')}</td>
                            <td>{entry.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App;
