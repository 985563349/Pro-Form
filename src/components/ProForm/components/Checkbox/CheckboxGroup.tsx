import { FunctionComponent } from 'react';
import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';

export interface ProFormCheckboxGroupProps
  extends Pick<CheckboxGroupProps, 'options' | 'onChange'>,
    ProFormItemProps {
  fieldProps?: CheckboxGroupProps;
}

const ProFormCheckboxGroup: FunctionComponent<ProFormCheckboxGroupProps> = (
  props
) => {
  const { options, fieldProps, onChange, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Checkbox.Group {...fieldProps} options={options} onChange={onChange} />
    </ProFormItem>
  );
};

export default ProFormCheckboxGroup;
