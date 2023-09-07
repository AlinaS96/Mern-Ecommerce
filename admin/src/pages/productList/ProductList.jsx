import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect, useState } from "react";
import axios from 'axios'
import {Link} from "react-router-dom"


// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "product", headerName: "Product", width: 240,
//     renderCell: (params) => {
//       return (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img src={params.row.image} style={{ width: '32px', height: '32px', marginRight: '5px' }} />
//           {params.row.product}
//         </div>
//       )
//     }
//   },
//   { field: "stock", headerName: "Stock", width: 240 },
//   {
//     field: "status",
//     headerName: "Status",
//     type: "string",
//     width: 160, renderCell: (params) => {
//       return (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h1 style={{ margin: '0px 10px 10px 0px', color: params.row.status === 'active' ? 'green' : 'red' }}>.</h1>
//           {params.row.status}
//         </div>
//       )
//     }
//   },
//   {
//     field: "price",
//     headerName: "Price",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 180,
//     renderCell: (params) => {
//       return (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <Link to={`/product/${params.row.id}`}>
//             <Button variant="contained" sx={{ backgroundColor: 'green', height: '25px', margin: '5px 35px 5px 5px' }}>Edit</Button>
//           </Link>
//           <DeleteOutlineOutlinedIcon onClick={()=>handleDeleteClick(params.row.id)} sx={{ size: '20px', color: 'red' }} />
//         </div>
//       )
//     }
//   }
// ];

const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const prods = await axios.get('http://localhost:8800/product/')
      setProducts(prods.data)
    }; getProducts()
  }, [])
  const handleDeleteClick=(id)=>{
    axios.delete(`http://localhost:8800/product/${id}`).then(res=>{
      console.log(res)
    }).catch(err=>{console.log(err)})
  }
  const rows = products.map(product => {
    return {
      id: product._id,
      product: product.title,
      image: product.img,
      stock: product.inStock,
      status: 'active',
      price: product.price
    }
  });
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product", headerName: "Product", width: 240,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={params.row.image} style={{ width: '32px', height: '32px', marginRight: '5px' }} />
            {params.row.product}
          </div>
        )
      }
    },
    { field: "stock", headerName: "Stock", width: 240 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 160, renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ margin: '0px 10px 10px 0px', color: params.row.status === 'active' ? 'green' : 'red' }}>.</h1>
            {params.row.status}
          </div>
        )
      }
    },
    {
      field: "price",
      headerName: "Price",
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
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={`/product/${params.row.id}`}>
              <Button variant="contained" sx={{ backgroundColor: 'green', height: '25px', margin: '5px 35px 5px 5px' }}>Edit</Button>
            </Link>
            <DeleteOutlineOutlinedIcon onClick={()=>handleDeleteClick(params.row.id)} sx={{ size: '20px', color: 'red' }} />
          </div>
        )
      }
    }
  ];
  return (
    <div style={{ height: 600, width: 1200, marginLeft: '240px' }}>
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

export default ProductList
