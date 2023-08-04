import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';


const Sider = ({submitHandler}) => {
  const [form] = Form.useForm();
  return (
    <Form 
    onFinish={submitHandler}
    form={form} 
    name="validateOnly" 
    layout="vertical" 
    autoComplete='on'
    style={{ padding: '10px' }}
    >
      <Form.Item
        name="city"
        label="Город"
        rules={[{required: true}]}
        style={{ width: '90%' }}
      >
        <Select options={[
          {label: 'Санкт-Петербург', value: 'saint-petersburg'},
          {label: 'Краснодар', value: 'krasnodar'},
          {label: 'Севастополь', value: 'sevastopol'}
        ]} placeholder='Санкт-Петербург'/>
      </Form.Item>
      <Form.Item
        name="view_distance"
        label="Дальность видимости, м"
        rules={[{required: true}]}
        style={{ width: '90%' }}
      >
        <Input placeholder='300'/>
      </Form.Item>

      <Form.Item label="Точка на карте">
      
        <Form.Item
          name="x_from"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '45%' }}
        >
          <Input placeholder="x" />
        </Form.Item>

        <Form.Item
          name="y_from"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '45%' }}
        >
          <Input placeholder="y" />
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Space>
          <Button onClick={() => form.submit()}>Добавить</Button>
        </Space>
      </Form.Item>

    </Form>
  );
};
export default Sider;

