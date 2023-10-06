# FRONT END
# Real-Time Data Display with React and Socket.IO

This is a simple React application that demonstrates real-time data display using Socket.IO for live updates and Axios for fetching data from an API. The application consists of two main sections:

1. **Socket.IO Real-Time Data**: In this section, the application connects to a Socket.IO server running on 'http://localhost:4444' and listens for the 'dataSaved' event. When new data is received in real-time, it is displayed on the webpage under this section. The real-time data includes information about names, origins, and destinations.

2. **Database Data**: The application also fetches data from a RESTful API endpoint on 'http://localhost:5000/api/data'. This data represents historical records stored in a database. The fetched data is displayed in a table under this section. The table is periodically updated without the need for a page reload, thanks to Axios and a set timer.

# Setup and Run
1 .**Navigate to the frontend directory**:
cd frontend
cd encrypted-timeseries
2 . **Install the required dependencies:**
npm install
3. **Start the React application:**
npm start

4.**Access the Application**: Open a web browser and navigate to 'http://localhost:3000'. You should see the real-time data and database data displayed on the webpage.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Socket.IO](https://socket.io/): A library for real-time, bidirectional communication.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making HTTP requests.

## BACKEND
**Real-Time Data Display with React, Socket.IO, and MongoDB**
This project demonstrates real-time data display using React for the frontend, Socket.IO for real-time communication, and MongoDB for data storage. The project consists of two main components:

1.Emitter: The emitter generates random data, encrypts it, and sends it to a Socket.IO server for real-time distribution to connected clients. The data includes names, origins, and destinations, and each message is encrypted before transmission.

2. Listener: The listener connects to the Socket.IO server and receives real-time data. It decrypts the data and saves it to a MongoDB database, categorizing it by minute timestamps. The listener also provides an API endpoint to fetch historical data from the database.
**Emitter**
# Requirements
Node.js and npm installed on your machine.
Setup and Run
1.**Navigate to the emitter directory:**

cd emitter

2.**Install the required dependencies:**

npm install

3.**Start the emitter to generate and send data:**

node emitter.js

The emitter will send random data to the Socket.IO server every 10 seconds.

**Listener**
# Requirements
Node.js and npm installed on your machine.
A running MongoDB server with a database where data will be stored.
1. **Navigate to the listener directory:**
cd listener
2.**Install the required dependencies:**
npm install
Set up your MongoDB server and database. Make sure to adjust the MongoDB connection details in listener/config/db.js.

3.**Start the listener:**
node listener.js
The listener will connect to the Socket.IO server, receive data, decrypt it, and store it in the MongoDB database.
