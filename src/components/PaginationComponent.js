import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserDetails from "./UserDetailsComponent";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//     <h1>User List</h1>
//             <div className="row">
//                 <div className="col-lg-3"></div>
//             </div>
//             <br/>
//       {currentItems &&
//         currentItems.map((data, i) => {
//             //console.log(data)
//             return(
//                 <tr key={data._id}>
//                     <td>{i+1}</td>
//                     <td>{data.firstName}</td>
//                     <td>{data.lastName}</td>
//                     <td>{data.userName}</td>
//                     <td>{data.email}</td>
//                     <td>{data.phone}</td>
//                     <td></td>
//             </tr>
//             )
            
//         })}
//     </>
//   );
// }


const Pagination = ({ itemsPerPage=10 }) => {

    const [itemOffset, setItemOffset] = useState(0);
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

    const mystyle = {
        color: "black",
        //backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
    
      };

    // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

    return(
        <>
            <h1>User List</h1>
            <div className="row">
                <div className="col-lg-3"><button onClick={addUser}>Add User</button></div>
            </div>
            <br/>
            <div className="row">
                <div className="col-lg-6">
                    <table border={1}>
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
                            {currentItems &&
        currentItems.map((data, i) => {
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
                    </table>
                </div>
                <div style={mystyle}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
                <div className="col-lg-6">
                    <UserDetails id={userId} />
                </div>
            </div>
           
        </>
    )
}

export default Pagination;