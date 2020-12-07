import { FunctionComponent } from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

import ProFormItem, { ProFormItemProps } from '../FormItem';

export interface ProFormSelectProps extends ProFormItemProps {
  options: any[];
  fieldProps?: SelectProps<any>;
}

const ProFormSelect: FunctionComponent<ProFormSelectProps> = (props) => {
  const { fieldProps, options, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Select {...fieldProps}>
        {options?.map(({ label, value }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
    </ProFormItem>
  );
};

export default ProFormSelect;
