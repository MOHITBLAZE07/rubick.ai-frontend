import React from 'react'
import { Table } from 'antd';
const columns = [
  {
    title: <b style={{color:"#89898b"}}>Code</b>,
    dataIndex: 'code',
    key: '_id',
    render:(text)=> <span style={{color:"#89898b",fontWeight:"bold"}}>#{text}</span>
  },
  {
    title: <b style={{color:"#89898b"}}>Name</b>,
    dataIndex: 'name',
    key: '_id',
    render:(text)=> <span style={{color:"#89898b",fontWeight:"bold"}}>{text}</span>
  },
  {
    title: <b style={{color:"#89898b"}}>Qty</b>,
    dataIndex: 'quantity',
    key: '_id',
    render:(text)=> <span style={{color:"#95a5a6"}}>{text}</span>
  },
  {
    title: <b style={{color:"#89898b"}}>Price</b>,
    dataIndex: 'price',
    key: '_id',
    render:(text)=> <span style={{color:"#95a5a6"}}>{text}</span>
  },
  {
    title: <b style={{color:"#89898b"}}>Status</b>,
    dataIndex: 'status',
    key: '_id',
    render:(text)=> <span style={{color:text==="true"?"#2ecc71":"#f39c12",fontWeight:"bold",textTransform:"capitalize"}}>{text==="false"?"Inactive":"Active"}</span>
  },
  {
    title: <b style={{color:"#89898b"}}>Date added</b>,
    dataIndex: 'date_added',
    key: '_id',
    render: (text) => <a href ='/products' style={{color:"#95a5a6"}}>{new Date(text).toDateString()}</a>,
  }
];

const TableComponent = ({datasource}) => <Table columns={columns} pagination={{position:['none','none']}}  dataSource={datasource} />;

export default TableComponent;

