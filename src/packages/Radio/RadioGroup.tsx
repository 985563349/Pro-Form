import React from 'react';
import { Radio } from 'antd';
import type { RadioGroupProps } from 'antd/lib/radio';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';

export interface ProFormRadioGroupProps extends ProFormItemProps {
  optionType?: RadioGroupProps['optionType'];
  options?: RadioGroupProps['options'];
}

const ProFormRadioGroup: React.FC<ProFormRadioGroupProps> = (props) => {
  const { options, optionType, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Radio.Group options={options} optionType={optionType} />
    </ProFormItem>
  );
};

export default ProFormRadioGroup;
