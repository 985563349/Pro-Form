import { FunctionComponent } from 'react';
import { Checkbox } from 'antd';

import ProFormItem from '../../FormItem';
import ProFormCheckboxGroup from '../CheckboxGroup';

export interface ProFormCheckboxProps {
  label: string;
  name: string;
}

const ProFormCheckbox: FunctionComponent<ProFormCheckboxProps> & {
  Group: typeof ProFormCheckboxGroup;
} = (props) => {
  const { label, name } = props;

  return (
    <ProFormItem label={label} name={name} valuePropName="checked">
      <Checkbox />
    </ProFormItem>
  );
};

ProFormCheckbox.Group = ProFormCheckboxGroup;

export default ProFormCheckbox;
