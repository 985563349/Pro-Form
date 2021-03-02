import React, { FunctionComponent } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';
import ProFormPassword from './Password';
import ProFormTextArea from './TextArea';

export interface ProFormTextProps
  extends Pick<
      InputProps,
      'allowClear' | 'placeholder' | 'onChange' | 'onPressEnter'
    >,
    ProFormItemProps {
  fieldProps?: InputProps;
}

const ProFormText: FunctionComponent<ProFormTextProps> & {
  Password: typeof ProFormPassword;
  TextArea: typeof ProFormTextArea;
} = (props) => {
  const {
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
