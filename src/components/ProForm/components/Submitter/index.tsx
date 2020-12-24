import { Space, Button } from 'antd';
import { FunctionComponent } from 'react';
import { FormInstance } from 'antd/lib/form';
import { ButtonProps } from 'antd/lib/button';

export interface SubmitterProps {
  loading?: ButtonProps['loading'];
  submitText?: React.ReactNode;
  resetText?: React.ReactNode;
}

const Submitter: FunctionComponent<SubmitterProps & { form: FormInstance }> = (
  props
) => {
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
