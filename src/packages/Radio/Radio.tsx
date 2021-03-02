import React, { FunctionComponent } from 'react';
import { Radio } from 'antd';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';
import ProFormRadioGroup from './RadioGroup';

export interface ProFormRadioProps extends ProFormItemProps {}

const ProFormRadio: FunctionComponent<ProFormRadioProps> & {
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
