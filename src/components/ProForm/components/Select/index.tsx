import { FunctionComponent, ReactNode } from 'react';
import { Select } from 'antd';

import ProFormItem from '../../FormItem';

export interface ProFormSelectProps {
  label?: ReactNode;
  name: string;
  placeholder?: string;
  options?: Array<{ label: ReactNode; value: any }>;
  fieldProps?: {
    onChange: () => void;
  };
}

const ProFormSelect: FunctionComponent<ProFormSelectProps> = (props) => {
  const { label, name, placeholder, options, fieldProps } = props;

  return (
    <ProFormItem label={label} name={name}>
      <Select {...fieldProps} placeholder={placeholder}>
        {options?.map(({ label, value }) => (
          <Select.Option key={value} value={value}>
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
