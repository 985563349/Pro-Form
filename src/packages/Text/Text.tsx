import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd/lib/input';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';
import ProFormPassword from './Password';
import ProFormTextArea from './TextArea';

export interface ProFormTextProps
  extends Pick<
      InputProps,
      'disabled' | 'allowClear' | 'placeholder' | 'onChange' | 'onPressEnter'
    >,
    ProFormItemProps {
  fieldProps?: InputProps;
}

const ProFormText: React.FC<ProFormTextProps> & {
  Password: typeof ProFormPassword;
  TextArea: typeof ProFormTextArea;
} = (props) => {
  const {
    disabled,
    allowClear,
    placeholder,
    fieldProps,
    onChange,
    onPressEnter,
    ...formProps
  } = props;

  return (
    <ProFormItem {...formProps}>
      <Input
        {...fieldProps}
        disabled={disabled}
        allowClear={allowClear}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
      />
    </ProFormItem>
  );
};

ProFormText.defaultProps = {
  placeholder: '请输入',
};

ProFormText.Password = ProFormPassword;
ProFormText.TextArea = ProFormTextArea;

export default ProFormText;
