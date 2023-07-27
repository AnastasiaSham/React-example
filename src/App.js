import React, { useState } from 'react';
import { Layout } from 'antd';
import Sider from './sider';
import Content from './content';
import Title from './title';
import axios from 'axios';


function App() {
  const [data, setData] =  useState(null);
  const formSubmitHandler = (params) => axios.get(`http://10.32.1.65:5000/api/v2/visibility_analysis/visibility_analysis`,{params: params}).then(({data}) => setData(data))
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider theme='light' color='#000' width={400}>
        <Title />
        <Sider submitHandler={formSubmitHandler} />
      </Layout.Sider>
      <Layout.Content>
        <Content data={data}/>
      </Layout.Content>
    </Layout>
  );
}

export default App;