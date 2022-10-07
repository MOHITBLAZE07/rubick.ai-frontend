import React, { useEffect, useState } from 'react'
import TableComponent from './TableComponent';
import { Button } from 'antd';

import {
    NavLink
  } from 'react-router-dom';

export default function Product() {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [datasource, setDatasourse] = useState([]);
    useEffect(()=>{
        try{

        const fetchApi = async() => {
            const response = await fetch(`https://rubickai-backend.herokuapp.com/products?page=${page}`);
            const result = await response.json();
            console.log(result);
            setDatasourse(result.data);
            setTotalPage(result.totalPages);
        }
        fetchApi();
        }catch(err){
            console.log(err);
        }

    },[page])

    const pagination = (value) => {
        // prev button
        if(value<0&&page===1)
            return;
        // next button
        if(value>0){
            if(datasource.length===0) return;
        }

        setPage(prev=>prev + value);
    }

    return (
        <div>
            
            <div style={{wordWrap:"break-word",width:"100%"}}>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div style={{display:"flex",alignItems:"flex-start",position:"relative"}}>
                    <p style={{color:'black', fontSize:'1.8rem', fontWeight:'bold'}}>Products</p>
                    <NavLink to='/addProducts'>
                        <Button style={{color: '#345aee', fontWeight:'bold',position:"absolute",right:'-40px',top:"5px"  }} type="default" shape="circle">
                            <span>+</span>
                        </Button>
                    </NavLink>
                </div> 

                <select style={{width:"120px",height:"30px",outline:"none", cursor:"pointer"}}>
                    <option value = "This day">This day</option>
                    <option value ="This Month">This Month</option>
                    <option value = "This year">This year</option>
                </select>
            </div>
            <TableComponent datasource={datasource}/>
            <div style={{display:'flex', justifyContent: 'flex-end',gap:"10px",marginTop:"10px"}}>
                <button style={{padding:"3px 10px",cursor:"pointer"}} onClick={()=>pagination(-1)} disabled={page===1}>prev</button>
                <button style={{padding:"3px 10px",cursor:"pointer"}} onClick={()=>pagination(1)} disabled={totalPage===page}>next</button>
            </div>
            
        </div>
        </div>
    )
}
