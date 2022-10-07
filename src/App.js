import './App.css';
import Welcome from './components/Welcome.js';
import Product from './components/Product.js';
import AddProductForm from './components/AddProductForm';
import Setting from './components/Setting';
import Home from './components/Home';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

const { Header, Sider, Content } = Layout;

// const { Title } = Typography;


function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Header style={{color:"white",background:"#3265fa",paddingInline:"25px",display:"flex",position:'sticky',top:"0",justifyContent:"space-between"}}>

          <NavLink to = '/' style={{color:"white"}}><h3><b style={{color:"white"}}>Rubick.ai</b></h3></NavLink>
          <div><Avatar  icon={<UserOutlined />} /> Admin</div>
          </Header>
            
          <Layout style={{height:"30px",backgroundColor:"white"}}>
            <Sider style={{backgroundColor:"white",paddingInline:"25px",height:"100vh",position:"fixed"}}>
              <ul>
                <li><NavLink to="/home"  style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Home</NavLink></li>
                <li><NavLink to="/products" style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Products</NavLink></li>
                <li><NavLink to='/settings' style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Settings</NavLink></li>
              </ul>
            </Sider>
            <Content style={{marginLeft:"200px",width:"100%",backgroundColor:"lightgray",paddingInline:"40px",height:"100vh",paddingBlock:"150px",wordWrap:"break-word"}}>
                <Routes>
                  <Route path = '/' element={<Home />} />
                  <Route path = '/home' element={<Welcome />} />
                  <Route path = '/products' element={<Product />} />
                  <Route path = '/addProducts' element={<AddProductForm />} />
                  <Route path = '/settings' element={<Setting />} />
                </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
      
    
    </div>
      
  );
}

export default App;
