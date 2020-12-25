import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';
import ProFormPassword from './Password';
import ProFormTextArea from './TextArea';

export interface ProFormTextProps extends ProFormItemProps {
  placeholder?: string;
  fieldProps?: InputProps;
}

const ProFormText: FunctionComponent<ProFormTextProps> & {
  Password: typeof ProFormPassword;
  TextArea: typeof ProFormTextArea;
} = (props) => {
  const { placeholder, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Input {...fieldProps} placeholder={placeholder} />
    </ProFormItem>
  );
};

ProFormText.defaultProps = {
  placeholder: '请输入',
};

ProFormText.Password = ProFormPassword;
ProFormText.TextArea = ProFormTextArea;

export default ProFormText;
