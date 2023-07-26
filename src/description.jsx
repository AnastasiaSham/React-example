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
    <Button type="primary" htmlType="submit" disabled={!submittable} style={{ margin: '0 -3px 10px 30px' }}>
      Добавить
    </Button>
  );
};

const Description = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="on">
      <Form.Item
        name="city"
        label="Город"
        rules={[{required: true}]}
        style={{ width: 'calc(20% - 8px)' }}
      >
        <Input placeholder='Санкт-Петербург'/>
      </Form.Item>
      <Form.Item
        name="view_distance"
        label="Дальность видимости, м"
        rules={[{required: true}]}
        style={{ width: 'calc(20% - 8px)' }}
      >
        <Input placeholder='300'/>
      </Form.Item>

      <Form.Item label="Точка на карте" style={{ marginBottom: 0 }}>
      
        <Form.Item
          name="x_from"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(10% - 8px)', margin: '0 5px 10px 0' }}
        >
          <Input placeholder="x" />
        </Form.Item>

        <Form.Item
          name="y_from"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(10% - 8px)', margin: '0 5px 10px 0'  }}
        >
          <Input placeholder="y" />
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset" style={{ margin: '0 0 10px 0' }}>Отменить</Button>
        </Space>
      </Form.Item>

    </Form>
  );
};
export default Description;

