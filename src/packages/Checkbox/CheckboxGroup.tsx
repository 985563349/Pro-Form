import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';
import ProFormGroup from '../Form/FormGroup';
import type { ProFormGroupProps } from '../Form/FormGroup';

export interface ProFormCheckboxGroupProps
  extends Pick<CheckboxGroupProps, 'options' | 'onChange'>,
    ProFormItemProps {
  grid?: Omit<ProFormGroupProps, 'title'>;
  fieldProps?: CheckboxGroupProps;
}

type ProFormCheckboxGroupOptions = ProFormCheckboxGroupProps['options'];

const genCheckboxOptions = (options: ProFormCheckboxGroupOptions) =>
  options?.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option
  );

const ProFormCheckboxGroup: React.FC<ProFormCheckboxGroupProps> = (props) => {
  const { options, grid, fieldProps, ...formProps } = props;
  const checkboxGroupOptions = grid ? undefined : options;

  const GridCheckbox = grid ? (
    <ProFormGroup {...grid}>
      {genCheckboxOptions(options)?.map(({ label, value, ...rest }) => (
        <Checkbox key={value.toString()} value={value} {...rest}>
          {label}
        </Checkbox>
      ))}
    </ProFormGroup>
  ) : null;

  return (
    <ProFormItem {...formProps}>
      <Checkbox.Group {...fieldProps} options={checkboxGroupOptions}>
        {GridCheckbox}
      </Checkbox.Group>
    </ProFormItem>
  );
};

export default React.memo(ProFormCheckboxGroup);
