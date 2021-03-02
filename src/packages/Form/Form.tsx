import React, { useState } from 'react';
import { Form } from 'antd';
import type { FormProps } from 'antd/lib/form';
import type { ButtonProps } from 'antd/lib/button';
import Submitter from '../Submitter';
import type { SubmitterProps } from '../Submitter';
import ProFormGroup from './FormGroup';

export interface ProFormProps extends FormProps {
  onFinish?: (formData: Record<string, any>) => Promise<boolean | void>;
  submitter?: SubmitterProps | false;
}

const ProForm: React.FC<ProFormProps> & {
  Group: typeof ProFormGroup;
  useForm: typeof Form.useForm;
} = (props) => {
  const { form: useForm, submitter, children, onFinish, ...formProps } = props;

  const [form] = Form.useForm();
  const [loading, setLoading] = useState<ButtonProps['loading']>(false);

  const submitterProps: SubmitterProps =
    typeof submitter === 'boolean' || !submitter ? {} : submitter;

  const submitNode =
    submitter === false ? undefined : (
      <Submitter {...submitterProps} loading={loading} form={useForm || form} />
    );

  return (
    <div className="pro-form">
      <Form
        form={useForm || form}
        {...formProps}
        onFinish={async (values) => {
          if (!onFinish) return;

          setLoading({
            delay: 100,
          });
          await onFinish(values);
          setLoading(false);
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
