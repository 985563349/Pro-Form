import { FunctionComponent } from 'react';
import { Switch } from 'antd';
import { SwitchProps } from 'antd/lib/switch';

import ProFormItem, { ProFormItemProps } from '../../FormItem';

export interface ProFormSwitchProps extends ProFormItemProps {
  fieldProps?: SwitchProps;
}

const ProFormSwitch: FunctionComponent<ProFormSwitchProps> = (props) => {
  const { fieldProps, ...formProps } = props;

  return (
    <ProFormItem valuePropName="checked" {...formProps}>
      <Switch {...fieldProps} />
    </ProFormItem>
  );
};

export default ProFormSwitch;
