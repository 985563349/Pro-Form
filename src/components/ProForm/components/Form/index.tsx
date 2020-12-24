import { FunctionComponent } from 'react';
import { Form } from 'antd';
import { FormProps, FormInstance } from 'antd/lib/form';

import Submitter, { SubmitterProps } from '../Submitter';
import ProFormGroup from '../Group';

export interface ProFormProps extends FormProps {
  form?: FormInstance<any>;
  submitter?: SubmitterProps | false;
}

const ProForm: FunctionComponent<ProFormProps> & {
  Group: typeof ProFormGroup;
  useForm: typeof Form.useForm;
} = (props) => {
  const { form: useForm, submitter, children, onFinish, ...formProps } = props;

  const [form] = Form.useForm();

  const submitterProps: SubmitterProps =
    typeof submitter === 'boolean' || !submitter ? {} : submitter;

  const submitNode =
    submitter === false ? undefined : (
      <Submitter {...submitterProps} form={useForm || form} />
    );

  return (
    <div className="pro-form">
      <Form
        form={useForm || form}
        {...formProps}
        onFinish={(values) => {
          onFinish?.(values);
        }}
      >
        {children}
        {submitNode}
      </Form>
    </div>
  );
};

ProForm.Group = ProFormGroup;
ProForm.useForm = Form.useForm;

export default ProForm;
