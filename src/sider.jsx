import { Button, Form, Input, Space } from 'antd';
import React from 'react';

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Добавить
    </Button>
  );
};

const Sider = () => {
  
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical">
      <Form.Item
        name="city"
        label="Город"
        rules={[{required: true}]}
      >
        <Input placeholder='Санкт-Петербург'/>
      </Form.Item>
      <Form.Item
        name="view_distance"
        label="Дальность видимости, м"
        rules={[{required: true}]}
      >
        <Input placeholder='300'/>
      </Form.Item>

      <Form.Item label="Точка на карте">
      
        <Form.Item
          name="x_from"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50%)' }}
        >
          <Input placeholder="x" />
        </Form.Item>

        <Form.Item
          name="y_from"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50%)' }}
        >
          <Input placeholder="y" />
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">Отменить</Button>
        </Space>
      </Form.Item>

    </Form>
  );
};
export default Sider;

