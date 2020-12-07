import { FunctionComponent } from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

export interface ProFormItemProps extends FormItemProps {}

const ProFormItem: FunctionComponent<ProFormItemProps> = (props) => {
  const { children } = props;

  return <Form.Item {...props}>{children}</Form.Item>;
};

export default ProFormItem;
