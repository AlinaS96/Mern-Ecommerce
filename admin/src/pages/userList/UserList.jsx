import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user", headerName: "User", width: 240, 
  renderCell:(params)=>{
    return(
      <div style={{display:'flex',alignItems:'center'}}>
        <img src={params.row.avatar} style={{width:'32px', height:'32px', marginRight:'5px'}}/>
        {params.row.user}
      </div>
    )
  } },
  { field: "email", headerName: "Email", width: 240 },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 160, renderCell:(params)=>{
      return(
        <div style={{display:'flex',alignItems:'center'}}>
          <h1 style={{margin:'0px 10px 10px 0px',color:params.row.status==='active'?'green':'red'}}>.</h1>
          {params.row.status}
        </div>
      )
    }
  },
  {
    field: "transaction",
    type: "number",
    headerName: "Transaction",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160
  },
  {
    field: "action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    renderCell:(params)=>{
      return(
        <div style={{display:'flex',alignItems:'center'}}>
          <Button variant="contained" sx={{backgroundColor:'green', height:'25px', margin:'5px 35px 5px 5px' }}>Edit</Button>
          <DeleteOutlineOutlinedIcon sx={{size:'20px', color:'red'}}/>
        </div>
      )
    } 
  }
];

const rows = [
  {
    id: 1,
    user: "Snow",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Snow@gmail.com",
    status: "active",
    transaction: 403
  },
  {
    id: 2,
    user: "Lannister",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Cersei@gmail.com",
    status: "active",
    transaction: 40
  },
  {
    id: 3,
    user: "Lannister",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Jaime@gmail.com",
    status: "active",
    transaction: 203
  },
  {
    id: 4,
    user: "Stark",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Arya@gmail.com",
    status: "active",
    transaction: 323
  },
  {
    id: 5,
    user: "Targaryen",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Daenerys@gmail.com",
    status: "active",
    transaction: 103
  },
  {
    id: 6,
    user: "Melisandre",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "meli@gmail.com",
    status: "active",
    transaction: 403
  },
  {
    id: 7,
    user: "Clifford",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Ferrara@gmail.com",
    status: "active",
    transaction: 403
  },
  {
    id: 8,
    user: "Frances",
    avatar:
      "https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Rossini@gmail.com",
    status: "active",
    transaction: 403
  },
  {
    id: 9,
    user: "Roxie",
    avatar:
      "https://images.pexels.com/photos/3175975/pexels-photo-3175975.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Harvey@gmail.com",
    status: "passive",
    transaction: 403
  }
];

const UserList = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    const getUsers=async()=>{
      const users = await axios.get('http://localhost:8800/user/',{
        headers: {"Content-Type": "application/json"},
        withCredentials: true
      }
)
      setUsers(users.data);
    };getUsers()
  },[])
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User", width: 240, 
    renderCell:(params)=>{
      return(
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={params.row.avatar} style={{width:'32px', height:'32px', marginRight:'5px'}}/>
          {params.row.user}
        </div>
      )
    } },
    { field: "email", headerName: "Email", width: 240 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 160, renderCell:(params)=>{
        return(
          <div style={{display:'flex',alignItems:'center'}}>
            <h1 style={{margin:'0px 10px 10px 0px',color:params.row.status==='active'?'green':'red'}}>.</h1>
            {params.row.status}
          </div>
        )
      }
    },
    {
      field: "transaction",
      type: "number",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160
    },
    {
      field: "action",
      headerName: "Action",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
      renderCell:(params)=>{
        return(
          <div style={{display:'flex',alignItems:'center'}}>
            <Link to={`/user/${params.row.id}`}>
            <Button variant="contained" sx={{backgroundColor:'green', height:'25px', margin:'5px 35px 5px 5px' }}>Edit</Button>
            </Link>
            <DeleteOutlineOutlinedIcon onClick={()=>{handleUserDelete(params.row.id)}} sx={{size:'20px', color:'red'}}/>
          </div>
        )
      } 
    }
  ];
  

  const rows=users.map((user)=>{
    return {id:user._id,
      user:user.username,
      avatar:user.img,
      email:user.email,
      status:'active',
      transaction:0}
  })
  
  const handleUserDelete=(id)=>{
    console.log(id)
  }

  return (
    <div style={{ height: 600, width:1200, marginLeft:'240px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
