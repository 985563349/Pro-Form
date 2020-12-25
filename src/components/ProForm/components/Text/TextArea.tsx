import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

import ProFormItem, { ProFormItemProps } from '../Form/FormItem';

const { TextArea } = Input;

export interface ProFormTextAreaProps
  extends Pick<
      TextAreaProps,
      | 'allowClear'
      | 'autoSize'
      | 'showCount'
      | 'placeholder'
      | 'onChange'
      | 'onPressEnter'
    >,
    ProFormItemProps {
  fieldProps?: TextAreaProps;
}

const ProFormTextArea: FunctionComponent<ProFormTextAreaProps> = (props) => {
  const {
    allowClear,
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
        allowClear={allowClear}
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
