import { FunctionComponent } from 'react';
import { Select } from 'antd';
import { SelectProps, OptionProps } from 'antd/lib/select';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';

export interface ProFormSelectProps
  extends Pick<
      SelectProps<any>,
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

const ProFormSelect: FunctionComponent<ProFormSelectProps> = (props) => {
  const {
    options,
    allowClear,
    showSearch,
    optionFilterProp,
    placeholder,
    fieldProps,
    onChange,
    ...formProps
  } = props;

  return (
    <ProFormItem {...formProps}>
      <Select
        {...fieldProps}
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
