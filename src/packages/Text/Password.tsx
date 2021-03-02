import React from 'react';
import { Input } from 'antd';
import type { PasswordProps } from 'antd/lib/input';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';

const { Password } = Input;

export interface ProFormPasswordProps
  extends Pick<
      PasswordProps,
      | 'disabled'
      | 'allowClear'
      | 'visibilityToggle'
      | 'placeholder'
      | 'onChange'
      | 'onPressEnter'
    >,
    ProFormItemProps {
  fieldProps?: PasswordProps;
}

const ProFormPassword: React.FC<ProFormPasswordProps> = (props) => {
  const {
    disabled,
    allowClear,
    visibilityToggle,
    placeholder,
    fieldProps,
    onChange,
    onPressEnter,
    ...formProps
  } = props;

  return (
    <ProFormItem {...formProps}>
      <Password
        {...fieldProps}
        disabled={disabled}
        allowClear={allowClear}
        visibilityToggle={visibilityToggle}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
      />
    </ProFormItem>
  );
};

ProFormPassword.defaultProps = {
  placeholder: '请输入',
};

export default ProFormPassword;
