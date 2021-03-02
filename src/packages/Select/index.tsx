import React from 'react';
import { Select } from 'antd';
import type { SelectProps, OptionProps } from 'antd/lib/select';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';

export interface ProFormSelectProps
  extends Pick<
      SelectProps<any>,
      | 'disabled'
      | 'allowClear'
      | 'showSearch'
      | 'optionFilterProp'
      | 'placeholder'
      | 'onChange'
    >,
    ProFormItemProps {
  options?: Omit<OptionProps, 'children'>[];
  fieldProps?: SelectProps<any>;
}

const ProFormSelect: React.FC<ProFormSelectProps> = (props) => {
  const {
    disabled,
    allowClear,
    showSearch,
    optionFilterProp,
    placeholder,
    options,
    fieldProps,
    onChange,
    ...formProps
  } = props;

  return (
    <ProFormItem {...formProps}>
      <Select
        {...fieldProps}
        disabled={disabled}
        allowClear={allowClear}
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
