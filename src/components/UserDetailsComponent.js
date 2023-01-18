import React,{ useEffect, useState } from "react";
import axios from "axios";

const UserDetails = (props) => {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [userName, setUserName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [status, setStatus] = useState('')
    let [image, setImage] = useState('')

    const url = "http://localhost:4500/api/";
    
    const getUser = () => {
        axios.get(url + "get-user/" + props.id)
        .then((res) => {
            //console.log(res.data)
            setFirstName(res.data[0].firstName);
            setLastName(res.data[0].lastName);
            setUserName(res.data[0].userName);
            setEmail(res.data[0].email);
            setPhone(res.data[0].phone);
            setStatus(res.data[0].status);
            setImage(res.data[0].image);
        })
    }

    useEffect(() => {
        getUser();
    },[props?.id])

    return(
        <>
            <h1>This is UserDetails of</h1>
            {props?.id ?
            <>
                <div>
                    {image ? <img src={image} width="150" height="150"/>: ''}
                    
                </div>
                <div>
                    
                    <label>FirstName : </label>
                    {firstName}
                </div><div>
                        <label>LastName : </label>
                        {lastName}
                    </div><div>
                        <label>UserName : </label>
                        {userName}
                    </div><div>
                        <label>Email : </label>
                        {email}
                    </div><div>
                        <label>Phone : </label>
                        {phone}
                    </div><div>
                        <label>Status : </label>
                        {status}
                    </div></>
            : "Click to see User"}
        </>
    )
}

export default UserDetails;