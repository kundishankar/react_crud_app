import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

//const SERVER = "http://127.0.0.1:4500";
const Chat = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        //const socket = socketIOClient(SERVER);
        // socket.on('chatMessage', data => {
        //     console.log(data);
        //     setResponse(data);
        // })
    },[]);

    return(
        <>
            <h1>This is Chat Component</h1>
        </>
    )
}

export default Chat;