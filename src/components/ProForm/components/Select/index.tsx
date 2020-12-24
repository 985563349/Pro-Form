import { FunctionComponent } from 'react';
import { Select } from 'antd';
import { SelectProps, OptionProps } from 'antd/lib/select';

import ProFormItem, { ProFormItemProps } from '../FormItem';

type ProFormSelectEventProps = Pick<SelectProps<any>, 'onChange'>;

export interface ProFormSelectProps
  extends ProFormItemProps,
    ProFormSelectEventProps {
  options: Omit<OptionProps, 'children'>[];
  showSearch?: boolean;
  optionFilterProp?: string;
  placeholder?: string;
  fieldProps?: SelectProps<any>;
}

const ProFormSelect: FunctionComponent<ProFormSelectProps> = (props) => {
  const {
    options,
    placeholder,
    showSearch,
    optionFilterProp,
    fieldProps,
    onChange,
    ...formProps
  } = props;

  return (
    <ProFormItem {...formProps}>
      <Select
        {...fieldProps}
        showSearch={showSearch}
        optionFilterProp={optionFilterProp}
        placeholder={placeholder}
        onChange={onChange}
      >
        {options?.map(({ label, value, ...props }) => (
          <Select.Option {...props} key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
    </ProFormItem>
  );
};

ProFormSelect.defaultProps = {
  placeholder: '请选择',
  optionFilterProp: 'children',
};

export default ProFormSelect;
