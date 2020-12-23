import { Button } from 'antd';

import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormSwitch,
  ProFormCheckbox,
  ProFormDateRangePicker,
} from './components/ProForm';

const App = () => {
  return (
    <div className="App" style={{ padding: '22px' }}>
      <section style={{ marginBottom: '22px' }}>
        <h1>Basic Form</h1>

        <ProForm style={{ width: '400px' }}>
          <ProFormText label="email" name="email" />
          <ProFormText label="password" name="password" type="password" />
          <ProFormCheckbox name="remember">remember me</ProFormCheckbox>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </ProForm>
      </section>

      <section>
        <h1>Grid From</h1>

        <ProForm labelCol={{ span: 4 }}>
          <ProForm.Group span={8} gutter={20}>
            <ProFormText label="username" name="username" />
            <ProFormText label="password" name="password" />
            <ProFormText label="email" name="email" />
            <ProFormSelect
              label="gender"
              name="gender"
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
              onChange={(...res) => console.log(res)}
            />
          </ProForm.Group>
        </ProForm>
      </section>
    </div>
  );
};

export default App;
