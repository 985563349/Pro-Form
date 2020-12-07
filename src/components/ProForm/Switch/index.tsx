import { FunctionComponent } from 'react';
import { Switch } from 'antd';

import ProFormItem from '../FormItem';

export interface ProFormSwitchProps {
  label: string;
  name: string;
}

const ProFormSwitch: FunctionComponent<ProFormSwitchProps> = (props) => {
  const { label, name } = props;

  return (
    <ProFormItem label={label} name={name} valuePropName="checked">
      <Switch />
    </ProFormItem>
  );
};

export default ProFormSwitch;
