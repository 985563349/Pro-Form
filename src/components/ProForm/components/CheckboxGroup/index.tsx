import { FunctionComponent } from 'react';
import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';

import ProFormItem, { ProFormItemProps } from '../FormItem';

export interface ProFormCheckboxGroupProps extends ProFormItemProps {
  options?: CheckboxGroupProps['options'];
  fieldProps?: CheckboxGroupProps;
}

const ProFormCheckboxGroup: FunctionComponent<ProFormCheckboxGroupProps> = (
  props
) => {
  const { options, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Checkbox.Group options={options} {...fieldProps} />
    </ProFormItem>
  );
};

export default ProFormCheckboxGroup;
