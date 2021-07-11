## API

### ProForm

基于 antd Form 组件二次封装理论上支持所有 Form 的配置参数。
| 属性 | 说明 | 类型 | 默认值 |
| -------- | ------------------------- | ------------------------ | ----- |
| onFinish | 提交表单成功后的回调事件 | (values) => Promise<void> | - |
| submitter | 提交按钮相关配置 | boolean \| SubmitterProps | true |
| (...) | 支持 ant Form 组件所有参数 | - | - |

#### submitter

ProForm 操作按钮的配置。
| 属性 | 说明 | 类型 | 默认值 |
| --------- | ----------- | -------------- | ------- |
| submitText | 提交按钮文本 | React.ReactNode | 'submit' |
| resetText | 重置按钮文本 | React.ReactNode | 'reset' |

### ProForm.Group

基于 antd 栅格系统封装，栅格控制时可为栅格数或一个包含其他属性的对象。
| 属性 | 说明 | 类型 | 默认值 |
| ---- | ------------ | --------------- | -------- |
| title | 组标题 | string | - |
| gutter | 栅格间隔 | number | - |
| span | 栅格占位格数，传入数组时可单独控制每一列 | number \| number[] | - |
| xs | `屏幕 < 576px`栅格占位格数，传入数组时可单独控制每一列 | number \| object \| number[] \| object[]| - |
| sm | `屏幕 ≥ 576px`栅格占位格数，传入数组时可单独控制每一列 | number \| object \| number[] \| object[]| - |
| md | `屏幕 ≥ 768px`栅格占位格数，传入数组时可单独控制每一列 | number \| object \| number[] \| object[]| - |
| lg | `屏幕 ≥ 992px`栅格占位格数，传入数组时可单独控制每一列 | number \| object \| number[] \| object[]| - |
| xs | `屏幕 ≥ 1200px`栅格占位格数，传入数组时可单独控制每一列 | number \| object \| number[] \| object[]| - |
| xxl | `屏幕 ≥ 1600px`栅格占位格数，传入数组时可单独控制每一列 | number \| object \| number[] \| object[]| - |
