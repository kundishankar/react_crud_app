import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    let [image, setImage] = useState('')
    let [status, setStatus] = useState(1)

    const navigate = useNavigate();
    const params = useParams();
    //console.log(params.id)

    const url = "http://localhost:4500/api/";

    const getUser = () => {
        axios.get(url + "get-user/" + params.id)
        .then((res) => {
            setFirstName(res.data[0].firstName);
            setLastName(res.data[0].lastName);
            setUserName(res.data[0].userName);
            setEmail(res.data[0].email);
            setPhone(res.data[0].phone);
            setImage(res.data[0].image);
            setStatus(res.data[0].status);
        })
    }

    useEffect(() => {
        getUser();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = {
        //     firstName:firstName,
        //     lastName:lastName,
        //     userName: userName,
        //     email:email,
        //     phone:phone,
        //     status: 1
        // }
        //console.log(image)
        var formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('status', status);
        formData.append('image', image)
        // if(image.file){
            
        // }
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };

        axios.put(url+"edit-user/"+params.id, formData, config)
        .then((res) => navigate('/users'))
        .catch((err) => console.log(err))
        //e.preventDefault();
    }

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        // const img = {
        //   preview: URL.createObjectURL(e.target.files[0]),
        //   data: e.target.files[0],
        // }
        setImage(e.target.files[0])
        //setFileName(e.target.files[0].name)
      }

    return(
        <>
            <h1>User form</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
                    {image ? <img src={image} width="150" height="150"/>: ''}
                    
                </div>
                <div>
                    <label>FirstName</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>LastName</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>UserName</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Status</label>
                    <input type="number" value={status} onChange={(e) => setStatus(e.target.value)} />
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}

export default EditUser;