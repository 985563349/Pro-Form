import { FunctionComponent, ReactNode } from 'react';
import { Input } from 'antd';

import ProFormItem from '../FormItem';

export interface ProFormTextProps {
  label?: ReactNode;
  name: string;
  placeholder?: string;
  fieldProps?: {};
}

const ProFormText: FunctionComponent<ProFormTextProps> = (props) => {
  const { label, name, placeholder, fieldProps } = props;

  return (
    <ProFormItem label={label} name={name}>
      <Input {...fieldProps} placeholder={placeholder} />
    </ProFormItem>
  );
};

ProFormText.defaultProps = {
  placeholder: '请输入',
};

export default ProFormText;
