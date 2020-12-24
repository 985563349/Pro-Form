import { Space, Button } from 'antd';
import { FunctionComponent } from 'react';
import { FormInstance } from 'antd/lib/form';

export interface SubmitterProps {
  submitText?: React.ReactNode;
  resetText?: React.ReactNode;
}

const Submitter: FunctionComponent<SubmitterProps & { form: FormInstance }> = (
  props
) => {
  const { form, submitText = 'submit', resetText = 'reset' } = props;

  return (
    <Space>
      <Button
        key="submit"
        type="primary"
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
