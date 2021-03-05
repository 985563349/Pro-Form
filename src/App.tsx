import React from 'react';
import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormCheckbox,
  ProFormRadio,
  ProFormSwitch,
  ProFormDateRangePicker,
} from './packages';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <section className="module">
        <h1 className="module__title">Basic Form</h1>

        <ProForm style={{ width: '50%' }}>
          <ProFormText label="email" name="email" disabled />
          <ProFormText.Password label="password" name="password" disabled />
          <ProFormCheckbox name="remember" disabled>
            remember me
          </ProFormCheckbox>
        </ProForm>
      </section>

      <section className="module">
        <h1 className="module__title">Grid From</h1>

        <ProForm labelCol={{ span: 4 }}>
          <ProForm.Group span={8} gutter={20} title="group title">
            <ProFormText label="username" name="username" disabled />
            <ProFormText label="password" name="password" disabled />
            <ProFormText label="email" name="email" disabled />
            <ProFormSelect
              label="gender"
              name="gender"
              allowClear
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
          initialValues={{ input: 'input' }}
          onFinish={async (values) => {
            console.log(values);
          }}
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
          <ProFormCheckbox.Group
            label="checkboxGroup"
            name="checkboxGroup"
            options={[
              { label: 'checkbox0', value: 0 },
              { label: 'checkbox1', value: 1 },
              { label: 'checkbox2', value: 2 },
              { label: 'checkbox3', value: 3 },
              { label: 'checkbox4', value: 4 },
            ]}
            rules={[{ required: true }]}
          />
          <ProFormCheckbox.Group
            label="checkboxGroupText"
            name="checkboxGroup"
            options={[
              'checkbox0',
              'checkbox1',
              'checkbox2',
              'checkbox3',
              'checkbox4',
            ]}
            rules={[{ required: true }]}
          />
          <ProFormCheckbox.Group
            label="checkboxGridGroup"
            name="checkboxGridGroup"
            grid={{ span: 6 }}
            options={[
              { label: 'checkbox0', value: 0 },
              { label: 'checkbox1', value: 1 },
              { label: 'checkbox2', value: 2 },
              { label: 'checkbox3', value: 3 },
              { label: 'checkbox4', value: 4 },
            ]}
            rules={[{ required: true }]}
          />
          <ProFormSwitch
            label="switch"
            name="switch"
            rules={[{ required: true }]}
          />
          <ProFormDateRangePicker
            label="date"
            name="date"
            rules={[{ required: true }]}
          />
          <ProFormDateRangePicker
            label="dateTime"
            name="dateTime"
            fieldProps={{ showTime: true }}
            rules={[{ required: true }]}
          />
          <ProFormText.TextArea
            label="textarea"
            name="textarea"
            rows={3}
            autoSize={{ minRows: 3, maxRows: 6 }}
            rules={[{ required: true }]}
          />
        </ProForm>
      </section>
    </div>
  );
};

export default App;
