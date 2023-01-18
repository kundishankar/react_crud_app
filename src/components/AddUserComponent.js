import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    const [fileName, setFileName] = useState("");

    const navigate = useNavigate();

    const url = "http://localhost:4500/api/add-user";

    const handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();
        // const form_data = {
        //     firstName:firstName,
        //     lastName:lastName,
        //     userName: userName,
        //     email:email,
        //     phone:phone,
        //     status: 1
        // }
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('image', image);
        //formData.append('fileName', fileName);
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        // const headers = {
        //     'Content-Type': 'multipart/form-data',
        //     //'Authorization': `Bearer ${token}`
        //  };
        //   for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
       //console.log(e.target.files)
        axios.post(url, formData, config)
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

export default AddUser;