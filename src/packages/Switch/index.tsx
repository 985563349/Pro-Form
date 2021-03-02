import React from 'react';
import { Switch } from 'antd';
import type { SwitchProps } from 'antd/lib/switch';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';

export interface ProFormSwitchProps extends ProFormItemProps {
  fieldProps?: SwitchProps;
}

const ProFormSwitch: React.FC<ProFormSwitchProps> = (props) => {
  const { fieldProps, ...formProps } = props;

  return (
    <ProFormItem valuePropName="checked" {...formProps}>
      <Switch {...fieldProps} />
    </ProFormItem>
  );
};

export default ProFormSwitch;
