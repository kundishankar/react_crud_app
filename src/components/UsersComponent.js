import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserDetails from "./UserDetailsComponent";
import ReactPaginate from "react-paginate";
import Pagination from "./PaginationComponent";

const Users = () => {
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState("")

    const navigate = useNavigate();

    const url = "http://localhost:4500/api/";

    const getAllUsers = async () => {
       await axios.get(url + "all-users")
        .then((res) => {
            setUsers(res.data.users)
            //console.log(Math.ceil(res.data.totalUsers/res.data.limit))
        })
    }

    useEffect(() => {
        getAllUsers();
    },[])

    const addUser = () => {
        //console.log("Add user");
        navigate('/users/create');
    }

    const HandleDelete = (id) => {
        alert("Are you sure");
        axios.delete(url+`delete-user/${id}`)
        .then((res) => getAllUsers())
        .catch((err) => navigate('/users'))
    }

    const HandleEdit = (id) => {
        navigate(`/users/edit/${id}`)
    }

    const HandleView = (id) => {
        setUserId(id)
    }

    return(
        <>
            {/* <h1>User List</h1>
            <div className="row">
                <div className="col-lg-3"><button onClick={addUser}>Add User</button></div>
            </div>
            <br/> */}
            <div className="row">
                <div className="col-lg-6">
                    {/* <table border={1}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((data, i) => {
                                //console.log(data)
                                return(
                                    <tr key={data._id}>
                                        <td>{i+1}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.userName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td><button onClick={() => HandleView(data._id)}>View</button><button onClick={() => HandleEdit(data._id)}>Edit</button><button onClick={() => HandleDelete(data._id)}>Delete</button></td>
                                </tr>
                                )
                                
                            })}
                        </tbody>
                    </table> */}
                </div>
                {/* <div className="col-lg-6">
                    <UserDetails id={userId} />
                </div> */}
                <Pagination itemsPerPage={10} />
            </div>
            
        </>
    )
}

export default Users;