import React, { FunctionComponent } from 'react';
import { Col, Row } from 'antd';

export interface ProFormGroupProps {
  gutter?: number;
  span?: number;
}

const ProFormGroup: FunctionComponent<ProFormGroupProps> = (props) => {
  const { gutter, span, children } = props;

  return (
    <div className="pro-form-group">
      <Row gutter={gutter}>
        {React.Children.map(children, (Child) =>
          Child ? <Col span={span}>{Child}</Col> : null
        )}
      </Row>
    </div>
  );
};

export default ProFormGroup;
