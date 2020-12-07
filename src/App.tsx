import { Button } from 'antd';

import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormSwitch,
  ProFormCheckbox,
  ProFormDateRangePicker,
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
          <ProFormText label="username" name="username" />
          <ProFormText label="password" name="password" type="password" />
          <ProFormText label="textarea" name="area" type="textarea" />
          <ProFormText label="textarea" name="area" />
          <ProFormSelect
            label="gender"
            name="gender"
            options={[
              { label: '男', value: '1' },
              { label: '女', value: '0' },
            ]}
          />
          <ProFormSwitch label="是否启用" name="disable" />
          <ProFormCheckbox label="是否选择" name="checked" />
          <ProFormCheckbox.Group
            label="工作日"
            name="days"
            fieldProps={{
              options: [
                {
                  label: '周一',
                  value: 1,
                },
                {
                  label: '周二',
                  value: 2,
                },
              ],
            }}
          />
          <ProFormDateRangePicker label="时间范围" name="date" />
        </ProForm.Group>

        <Button onClick={submit}>submit</Button>
      </ProForm>
    </div>
  );
};

export default App;
