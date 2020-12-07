import { FunctionComponent } from 'react';
import { Checkbox } from 'antd';

import ProFormItem from '../../FormItem';

export interface ProFormCheckboxProps {
  label: string;
  name: string;
}

const ProFormCheckbox: FunctionComponent<ProFormCheckboxProps> = (props) => {
  const { label, name } = props;

  return (
    <ProFormItem label={label} name={name} valuePropName="checked">
      <Checkbox />
    </ProFormItem>
  );
};

export default ProFormCheckbox;
