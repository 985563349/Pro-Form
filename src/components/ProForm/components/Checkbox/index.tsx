import { FunctionComponent } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps } from 'antd/lib/checkbox';

import ProFormItem, { ProFormItemProps } from '../FormItem';
import ProFormCheckboxGroup from '../CheckboxGroup';

export interface ProFormCheckboxProps extends ProFormItemProps {
  fieldProps?: CheckboxProps;
}

const ProFormCheckbox: FunctionComponent<ProFormCheckboxProps> & {
  Group: typeof ProFormCheckboxGroup;
} = (props) => {
  const { children, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps} valuePropName="checked">
      <Checkbox {...fieldProps} children={children} />
    </ProFormItem>
  );
};

ProFormCheckbox.Group = ProFormCheckboxGroup;

export default ProFormCheckbox;
