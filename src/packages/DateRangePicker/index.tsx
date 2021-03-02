import React from 'react';
import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';
import ProFormItem, { ProFormItemProps } from '../Form/FormItem';

export interface ProFormDateRangePickerProps
  extends Pick<RangePickerProps, 'disabled' | 'picker' | 'onChange'>,
    ProFormItemProps {
  fieldProps?: RangePickerProps;
}

const { RangePicker } = DatePicker;

const ProFormDateRangePicker: React.FC<ProFormDateRangePickerProps> = (
  props
) => {
  const { disabled, fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <RangePicker {...fieldProps} disabled={disabled} />
    </ProFormItem>
  );
};

export default ProFormDateRangePicker;
