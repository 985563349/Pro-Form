import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd/lib/checkbox';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';
import ProFormCheckboxGroup from './CheckboxGroup';

export interface ProFormCheckboxProps
  extends Pick<CheckboxProps, 'disabled' | 'onChange'>,
    ProFormItemProps {
  fieldProps?: CheckboxProps;
}

const ProFormCheckbox: React.FC<ProFormCheckboxProps> & {
  Group: typeof ProFormCheckboxGroup;
} = (props) => {
  const { disabled, children, onChange, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps} valuePropName="checked">
      <Checkbox {...fieldProps} disabled={disabled} onChange={onChange}>
        {children}
      </Checkbox>
    </ProFormItem>
  );
};

ProFormCheckbox.Group = ProFormCheckboxGroup;

export default ProFormCheckbox;
