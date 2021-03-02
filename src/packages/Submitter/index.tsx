import React from 'react';
import { Space, Button } from 'antd';
import type { FormInstance } from 'antd/lib/form';
import type { ButtonProps } from 'antd/lib/button';

export interface SubmitterProps {
  submitText?: React.ReactNode;
  resetText?: React.ReactNode;
}

const Submitter: React.FC<
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
