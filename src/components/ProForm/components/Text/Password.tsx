import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { PasswordProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../FormItem';

const { Password } = Input;

export interface ProFormPasswordProps extends ProFormItemProps {
  placeholder?: string;
  fieldProps?: PasswordProps;
}

const ProFormPassword: FunctionComponent<ProFormPasswordProps> = (props) => {
  const { placeholder, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Password {...fieldProps} placeholder={placeholder} />
    </ProFormItem>
  );
};

ProFormPassword.defaultProps = {
  placeholder: '请输入',
};

export default ProFormPassword;
