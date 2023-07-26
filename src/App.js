import React from 'react';
import { Layout } from 'antd';
import Sider from './sider';
import Content from './content';

function App() {
  return (
    <Layout>
      <Layout.Sider theme='light' color='#000'>
          <Sider />
      </Layout.Sider>
      <Layout.Content>
        <Content />
      </Layout.Content>
    </Layout>
  );
}

export default App;