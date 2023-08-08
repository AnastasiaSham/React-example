import React, { useState } from 'react';
import { Layout, Form } from 'antd';
import Sider from './sider';
import Content from './content';
import Title from './title';
import axios from 'axios';


function App() {
  const [data, setData] =  useState(null);
  const formSubmitHandler = (params) => axios.get(`http://10.32.1.65:5000/api/v2/visibility_analysis/visibility_analysis`,{params: params}).then(({data}) => setData(data))
  const [form] = Form.useForm();
  const mapClickHandler = (event) => {
    form.setFieldsValue({
      x_from: event.lngLat.lat, 
      y_from: event.lngLat.lng
    })
  };
  
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider theme='light' color='#000' width={400}>
        <Title />
        <Sider form={form} submitHandler={formSubmitHandler}/>
      </Layout.Sider>
      <Layout.Content>
        <Content data={data} onClick={mapClickHandler}/>
      </Layout.Content>
    </Layout>
  );
}

export default App;