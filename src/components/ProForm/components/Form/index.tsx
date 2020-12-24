import { FunctionComponent, useState } from 'react';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';
import { ButtonProps } from 'antd/lib/button';

import Submitter, { SubmitterProps } from '../Submitter';
import ProFormGroup from '../Group';

export interface ProFormProps extends FormProps {
  onFinish?: (formData: Record<string, any>) => Promise<boolean | void>;
  submitter?: SubmitterProps | false;
}

const ProForm: FunctionComponent<ProFormProps> & {
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
