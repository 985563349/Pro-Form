import { FunctionComponent } from 'react';
import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';

import ProFormItem, { ProFormItemProps } from '../FormItem';

export interface ProFormCheckboxGroupProps extends ProFormItemProps {
  fieldProps?: CheckboxGroupProps;
}

const ProFormCheckboxGroup: FunctionComponent<ProFormCheckboxGroupProps> = (
  props
) => {
  const { fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Checkbox.Group {...fieldProps} />
    </ProFormItem>
  );
};

export default ProFormCheckboxGroup;
