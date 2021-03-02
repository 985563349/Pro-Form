import React, { FunctionComponent } from 'react';
import { Space, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { ButtonProps } from 'antd/lib/button';

export interface SubmitterProps {
  submitText?: React.ReactNode;
  resetText?: React.ReactNode;
}

const Submitter: FunctionComponent<
  SubmitterProps & { form: FormInstance; loading?: ButtonProps['loading'] }
> = (props) => {
  const { form, loading, submitText = 'submit', resetText = 'reset' } = props;

  return (
    <Space>
      <Button
        key="submit"
        type="primary"
        loading={loading}
        onClick={() => {
          form.submit();
        }}
      >
        {submitText}
      </Button>
      <Button
        key="reset"
        onClick={() => {
          form.resetFields();
        }}
      >
        {resetText}
      </Button>
    </Space>
  );
};

export default Submitter;
