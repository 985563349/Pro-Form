import { FunctionComponent } from 'react';
import { Radio } from 'antd';

import ProFormItem, { ProFormItemProps } from '../FormItem';
import ProFormRadioGroup from '../RadioGroup';

export interface ProFormRadioProps extends ProFormItemProps {}

const ProFormRadio: FunctionComponent<ProFormRadioProps> & {
  Group: typeof ProFormRadioGroup;
} = (props) => {
  const { children, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <Radio>{children}</Radio>
    </ProFormItem>
  );
};

ProFormRadio.Group = ProFormRadioGroup;

export default ProFormRadio;
