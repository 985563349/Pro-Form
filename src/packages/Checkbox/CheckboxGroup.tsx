import React, { FunctionComponent } from 'react';
import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';
import ProFormGroup, { ProFormGroupProps } from '../Form/FormGroup';

export interface ProFormCheckboxGroupProps
  extends Pick<CheckboxGroupProps, 'options' | 'onChange'>,
    ProFormItemProps {
  grid?: Omit<ProFormGroupProps, 'title'>;
  fieldProps?: CheckboxGroupProps;
}

const genCheckboxOptions = (options: ProFormCheckboxGroupProps['options']) =>
  options?.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option
  );

const ProFormCheckboxGroup: FunctionComponent<ProFormCheckboxGroupProps> = (
  props
) => {
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
