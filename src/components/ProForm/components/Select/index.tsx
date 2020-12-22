import { FunctionComponent } from 'react';
import { Select } from 'antd';
import { SelectProps, OptionProps } from 'antd/lib/select';

import ProFormItem, { ProFormItemProps } from '../FormItem';

export interface ProFormSelectProps extends ProFormItemProps {
  options: Omit<OptionProps, 'children'>[];
  placeholder?: string;
  fieldProps?: SelectProps<any>;
}

const ProFormSelect: FunctionComponent<ProFormSelectProps> = (props) => {
  const { options, placeholder, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Select {...fieldProps} placeholder={placeholder}>
        {options?.map(({ label, value, ...props }) => (
          <Select.Option {...props} key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
    </ProFormItem>
  );
};

ProFormSelect.defaultProps = {
  placeholder: '请选择',
};

export default ProFormSelect;
