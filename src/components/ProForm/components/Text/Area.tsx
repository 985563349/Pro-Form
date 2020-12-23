import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../FormItem';

const { TextArea } = Input;

export interface ProFormTextAreaProps extends ProFormItemProps {
  placeholder?: string;
  fieldProps?: TextAreaProps;
}

const ProFormTextArea: FunctionComponent<ProFormTextAreaProps> = (props) => {
  const { placeholder, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <TextArea {...fieldProps} placeholder={placeholder} />
    </ProFormItem>
  );
};

export default ProFormTextArea;
