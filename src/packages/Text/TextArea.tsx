import React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import ProFormItem from '../Form/FormItem';
import type { ProFormItemProps } from '../Form/FormItem';

const { TextArea } = Input;

export interface ProFormTextAreaProps
  extends Pick<
      TextAreaProps,
      | 'disabled'
      | 'allowClear'
      | 'rows'
      | 'autoSize'
      | 'showCount'
      | 'placeholder'
      | 'onChange'
      | 'onPressEnter'
    >,
    ProFormItemProps {
  fieldProps?: TextAreaProps;
}

const ProFormTextArea: React.FC<ProFormTextAreaProps> = (props) => {
  const {
    disabled,
    allowClear,
    rows,
    autoSize,
    showCount,
    placeholder,
    fieldProps,
    onChange,
    onPressEnter,
    ...formProps
  } = props;

  return (
    <ProFormItem {...formProps}>
      <TextArea
        {...fieldProps}
        disabled={disabled}
        allowClear={allowClear}
        rows={rows}
        autoSize={autoSize}
        showCount={showCount}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
      />
    </ProFormItem>
  );
};

ProFormTextArea.defaultProps = {
  placeholder: '请输入',
};

export default ProFormTextArea;
