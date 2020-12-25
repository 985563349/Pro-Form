import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { PasswordProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';

const { Password } = Input;

export interface ProFormPasswordProps
  extends Pick<
      PasswordProps,
      | 'allowClear'
      | 'visibilityToggle'
      | 'placeholder'
      | 'onChange'
      | 'onPressEnter'
    >,
    ProFormItemProps {
  fieldProps?: PasswordProps;
}

const ProFormPassword: FunctionComponent<ProFormPasswordProps> = (props) => {
  const {
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
