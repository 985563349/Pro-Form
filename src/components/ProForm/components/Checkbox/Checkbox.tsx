import { FunctionComponent } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps } from 'antd/lib/checkbox';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';
import ProFormCheckboxGroup from './CheckboxGroup';

export interface ProFormCheckboxProps
  extends Pick<CheckboxProps, 'onChange'>,
    ProFormItemProps {
  fieldProps?: CheckboxProps;
}

const ProFormCheckbox: FunctionComponent<ProFormCheckboxProps> & {
  Group: typeof ProFormCheckboxGroup;
} = (props) => {
  const { fieldProps, children, onChange, ...formProps } = props;

  return (
    <ProFormItem {...formProps} valuePropName="checked">
      <Checkbox {...fieldProps} children={children} onChange={onChange} />
    </ProFormItem>
  );
};

ProFormCheckbox.Group = ProFormCheckboxGroup;

export default ProFormCheckbox;
