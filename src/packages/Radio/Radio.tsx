import React from 'react';
import { Radio } from 'antd';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';
import ProFormRadioGroup from './RadioGroup';

export type ProFormRadioProps = ProFormItemProps;

const ProFormRadio: React.FC<ProFormRadioProps> & {
  Group: typeof ProFormRadioGroup;
} = (props) => {
  const { children, ...formProps } = props;

  return (
    <ProFormItem {...formProps} valuePropName="checked">
      <Radio>{children}</Radio>
    </ProFormItem>
  );
};

ProFormRadio.Group = ProFormRadioGroup;

export default ProFormRadio;
