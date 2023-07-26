import React from 'react';
import { Layout } from 'antd';
import Sider from './sider';
import Content from './content';
import Title from './title';


function App() {
  return (
    <Layout>
      <Layout.Sider theme='light' color='#000' width={350}>
        <Title />
        <Sider />
      </Layout.Sider>
      <Layout.Content>
        <Content/>
      </Layout.Content>
    </Layout>
  );
}

export default App;