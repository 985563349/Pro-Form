import { Radio } from 'antd';
import { FunctionComponent } from 'react';
import { RadioGroupProps } from 'antd/lib/radio';

import ProFormItem, { ProFormItemProps } from '../FormItem';

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
