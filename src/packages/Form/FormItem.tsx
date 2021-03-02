import React, { FunctionComponent } from 'react';
import { Form } from 'antd';
import type { FormItemProps } from 'antd/lib/form';

export type ProFormItemProps = FormItemProps;

const ProFormItem: FunctionComponent<ProFormItemProps> = (props) => {
  const { children } = props;

  return <Form.Item {...props}>{children}</Form.Item>;
};

export default ProFormItem;
