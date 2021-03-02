import React, { FunctionComponent } from 'react';
import { Radio } from 'antd';
import { RadioGroupProps } from 'antd/lib/radio';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';

export interface ProFormRadioGroupProps extends ProFormItemProps {
  optionType?: RadioGroupProps['optionType'];
  options?: RadioGroupProps['options'];
}

const ProFormRadioGroup: FunctionComponent<ProFormRadioGroupProps> = (
  props
) => {
  const { options, optionType, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Radio.Group options={options} optionType={optionType} />
    </ProFormItem>
  );
};

export default ProFormRadioGroup;
