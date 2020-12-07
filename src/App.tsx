import { Button } from 'antd';

import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormSwitch,
  ProFormCheckbox,
} from './components/ProForm';

const App = () => {
  const [form] = ProForm.useForm<{ username: string; password: string }>();

  const submit = async () => {
    const data = await form.getFieldsValue();
    console.log(data);
  };

  return (
    <div className="App">
      <ProForm form={form}>
        <ProForm.Group gutter={24} span={8}>
          <ProFormText name="username" label="username" />
          <ProFormText name="password" label="password" />
          <ProFormSelect
            name="gender"
            label="gender"
            options={[
              { label: '男', value: '1' },
              { label: '女', value: '0' },
            ]}
          />
          <ProFormSwitch name="disable" label="是否启用" />
          <ProFormCheckbox name="checked" label="是否选择" />
        </ProForm.Group>

        <Button onClick={submit}>submit</Button>
      </ProForm>
    </div>
  );
};

export default App;
