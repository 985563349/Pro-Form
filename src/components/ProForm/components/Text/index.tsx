import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../../FormItem';

export interface ProFormTextProps extends ProFormItemProps {
  fieldProps?: InputProps;
}

const ProFormText: FunctionComponent<ProFormTextProps> = (props) => {
  const { fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Input {...fieldProps} />
    </ProFormItem>
  );
};

export default ProFormText;
