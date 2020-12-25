import { FunctionComponent } from 'react';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';

export interface ProFormDateRangePickerProps extends ProFormItemProps {
  fieldProps?: RangePickerProps;
}

const { RangePicker } = DatePicker;

const ProFormDateRangePicker: FunctionComponent<ProFormDateRangePickerProps> = (
  props
) => {
  const { fieldProps, ...formProps } = props;

  return (
    <ProFormItem {...formProps}>
      <RangePicker {...fieldProps} />
    </ProFormItem>
  );
};

export default ProFormDateRangePicker;
