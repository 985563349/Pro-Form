import { Button, Space } from 'antd';

import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormCheckbox,
  ProFormRadio,
  ProFormSwitch,
  ProFormDateRangePicker,
} from './components/ProForm';

import './App.css';

const App = () => {
  const [form] = ProForm.useForm();

  const handleSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <div className="app">
      <section className="module">
        <h1 className="module__title">Basic Form</h1>

        <ProForm style={{ width: '50%' }}>
          <ProFormText label="email" name="email" />
          <ProFormText.Password label="password" name="password" />
          <ProFormCheckbox name="remember">remember me</ProFormCheckbox>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </ProForm>
      </section>

      <section className="module">
        <h1 className="module__title">Grid From</h1>

        <ProForm labelCol={{ span: 4 }}>
          <ProForm.Group span={8} gutter={20} title="group title">
            <ProFormText label="username" name="username" />
            <ProFormText label="password" name="password" />
            <ProFormText label="email" name="email" />
            <ProFormSelect
              label="gender"
              name="gender"
              showSearch
              options={[
                {
                  label: 'male',
                  value: 1,
                },
                {
                  label: 'female',
                  value: 0,
                },
              ]}
            />
          </ProForm.Group>
        </ProForm>
      </section>

      <section className="module">
        <h1 className="module__title">Verify Form</h1>

        <ProForm
          style={{ width: '50%' }}
          form={form}
          initialValues={{ input: 'input' }}
        >
          <ProFormText
            label="input"
            name="input"
            rules={[{ required: true }]}
          />
          <ProFormSelect
            label="select"
            name="select"
            options={[
              { label: 'select0', value: 0 },
              { label: 'select1', value: 1 },
            ]}
            rules={[{ required: true }]}
          />
          {/* TODO: 添加校验 */}
          <ProFormCheckbox
            label="checkbox"
            name="checkbox"
            rules={[{ required: true }]}
          >
            checkbox
          </ProFormCheckbox>
          <ProFormRadio label="radio" name="radio" rules={[{ required: true }]}>
            radio
          </ProFormRadio>
          <ProFormRadio.Group
            label="radioGroup"
            name="radioGroup"
            options={[
              {
                label: 'radio0',
                value: 0,
              },
              {
                label: 'radio1',
                value: 1,
              },
              {
                label: 'radio2',
                value: 2,
              },
            ]}
            rules={[{ required: true }]}
          />
          <ProFormRadio.Group
            label="radioGroupButton"
            name="radioGroupButton"
            options={[
              {
                label: 'radioButton0',
                value: 0,
              },
              {
                label: 'radioButton1',
                value: 1,
              },
              {
                label: 'radioButton2',
                value: 2,
              },
            ]}
            optionType="button"
            rules={[{ required: true }]}
          />
          {/*
            TODO: 添加grid布局配置
          */}
          <ProFormCheckbox.Group
            label="checkboxGroup"
            name="checkboxGroup"
            options={[
              { label: 'checkbox0', value: 0 },
              { label: 'checkbox1', value: 1 },
              { label: 'checkbox1', value: 2 },
              { label: 'checkbox1', value: 3 },
              { label: 'checkbox1', value: 4 },
            ]}
            rules={[{ required: true }]}
          />
          <ProFormSwitch
            label="switch"
            name="switch"
            rules={[{ required: true }]}
          />
          <ProFormDateRangePicker
            label="time"
            name="time"
            rules={[{ required: true }]}
          />

          <ProFormText.TextArea
            label="textarea"
            name="textarea"
            rules={[{ required: true }]}
          />

          <Space>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              submit
            </Button>
            <Button onClick={handleReset}>reset</Button>
          </Space>
        </ProForm>
      </section>
    </div>
  );
};

export default App;
