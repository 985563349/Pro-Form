import { FunctionComponent } from 'react';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';

import ProFormGroup from '../layouts/Group';

export interface ProFormProps extends FormProps {}

const ProForm: FunctionComponent<ProFormProps> & {
  Group: typeof ProFormGroup;
  useForm: typeof Form.useForm;
} = (props) => {
  const { children } = props;

  return (
    <div className="pro-form">
      <Form {...props}>{children}</Form>
    </div>
  );
};

ProForm.Group = ProFormGroup;
ProForm.useForm = Form.useForm;

export default ProForm;
