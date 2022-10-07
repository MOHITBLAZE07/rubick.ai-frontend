import React, { useState } from 'react'
import { Input, Switch} from 'antd';
import Swal from 'sweetalert2';
import axios from 'axios'

export default function AddProductForm() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const errorMessage = (message) => {
    setError(message);
    const t = setTimeout(()=> {
        setError("");
        clearTimeout(t);
    },3000)
  }
  const submit = async(e) => {
    e.preventDefault();
    if(isNaN(code)){
        errorMessage("Only numbers allowed in product code.");
        return;
    }
    if( code.length !== 4 ) {
        errorMessage("Length of product code should be exactly 4.")
        return;
    }
    if(name.length>20){
        let temp = name;
        temp = temp.slice(0,20) + "...";
        setName(temp);
        return;
    }
    if(isNaN(quantity)){
        errorMessage("Only numbers allowed in quantity.")
        return;
    }
    if(isNaN(price)){
        errorMessage("Only numbers allowed in price.")
        return;
    }
  
    const result = await axios.post('https://rubickai-backend.herokuapp.com/products',{
        "code":code, "status":status, "name":name, "price":price, "quantity":quantity

    })
    
    console.log(result);
    if(result.data.message==="ok"){
        Swal.fire({
            title:"Product added successfully",
            icon:"success"
        })
    }else if(result.data.message==="present"){
        Swal.fire({
            title:"OOPS!!!",
            text:"Product code already exist in the database.",
            icon:"warning"
        })
    }
    else{
        Swal.fire({
            title:"Something went wrong",
            icon:"error"
        })
    }
  }
  return (
    <div>
        <h1 style={{color:'black', fontSize:'1.8rem', fontWeight:'bold'}}> New Products</h1>
        <br/>
        <form onSubmit={submit}>
        <p style={{color: '#89898b', fontWeight: 'bold'}}>Product code</p>
        <Input style = {{ width: '30%'}} size="large" value={code} onChange={(e)=>setCode(e.target.value)} required/>
        <Switch style={{fontWeight: 'bold', marginLeft:'40px'}} checkedChildren= "Active" unCheckedChildren="Inactive" required onChange={(checked)=>setStatus(checked)}/> <br /><br />
        <p style={{color: '#89898b', fontWeight: 'bold'}}>Name</p>
        <Input style = {{ width: '30%'}} size="large" value={name} onChange={(e)=>setName(e.target.value)} required/> <br /><br />
        <p style={{color: '#89898b', fontWeight: 'bold'}}>Quantity</p>
        <Input style = {{ width: '30%'}} size="large" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required/> <br /><br />
        <p style={{color: '#89898b', fontWeight: 'bold'}}>Price</p>
        <Input style = {{ width: '30%'}} size="large" value={price} onChange={(e)=>setPrice(e.target.value)} required/> <br /><br />
        <div style={{display:error===""?"none":"block",background:"red",color:"white",padding:"5px 10px",marginBottom:"10px"}}>{error}</div>
        <button onSubmit={submit} style={{padding:"7px 10px",cursor:"pointer", color: '#ffff', backgroundColor: '#3265fa', border: 'none', borderRadius: '10px', width:'100px', fontWeight:'bold'}}>Submit</button>
        </form>
    </div>
  )
}
