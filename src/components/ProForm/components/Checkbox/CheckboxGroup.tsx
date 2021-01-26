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

const ProFormCheckboxGroup: FunctionComponent<ProFormCheckboxGroupProps> = (
  props
) => {
  const { options, grid, fieldProps, ...formProps } = props;
  const checkboxOptions = grid ? undefined : options;

  const getOptions = () =>
    options?.map((option) => {
      if (typeof option === 'string') {
        return { label: option, value: option };
      }
      return option;
    });

  const GridCheckbox = grid ? (
    <ProFormGroup {...grid}>
      {getOptions()?.map(({ label, value, ...rest }) => (
        <Checkbox key={value.toString()} value={value} {...rest}>
          {label}
        </Checkbox>
      ))}
    </ProFormGroup>
  ) : null;

  return (
    <ProFormItem {...formProps}>
      <Checkbox.Group {...fieldProps} options={checkboxOptions}>
        {GridCheckbox}
      </Checkbox.Group>
    </ProFormItem>
  );
};

export default React.memo(ProFormCheckboxGroup);
