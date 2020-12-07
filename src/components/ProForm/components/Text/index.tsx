import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { InputProps, PasswordProps, TextAreaProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../FormItem';

export interface ProFormTextProps extends ProFormItemProps {
  type?: 'text' | 'password' | 'textarea';
  placeholder?: string;
  fieldProps?: InputProps & PasswordProps & TextAreaProps;
}

const { Password, TextArea } = Input;

const InputConfig = {
  text: (props: InputProps) => <Input {...props} />,
  password: (props: PasswordProps) => <Password {...props} />,
  textarea: (props: TextAreaProps) => <TextArea {...props} />,
};

const ProFormText: FunctionComponent<ProFormTextProps> = (props) => {
  const { type, placeholder, fieldProps, ...formProps } = props;

  if (!type) return null;

  const InputControl = InputConfig[type];

  return (
    <ProFormItem {...formProps}>
      <InputControl {...fieldProps} placeholder={placeholder} />
    </ProFormItem>
  );
};

ProFormText.defaultProps = {
  placeholder: '请输入',
  type: 'text',
};

export default ProFormText;
