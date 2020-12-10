import React, { FunctionComponent } from 'react';
import { Col, Row } from 'antd';
import { ColProps } from 'antd/lib/col';

type ColPropsPick = Pick<
  ColProps,
  'span' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
>;

type Map<T> = {
  [P in keyof T]: T[P] | T[P][];
};

type ColPropsMap = Map<ColPropsPick>;

export interface ProFormGroupProps extends ColPropsMap {
  gutter?: number;
}

const ProFormGroup: FunctionComponent<ProFormGroupProps> = (props) => {
  const { gutter, span, xs, sm, md, lg, xl, xxl, children } = props;

  const isArray = Array.isArray;

  return (
    <div className="pro-form-group">
      <Row gutter={gutter}>
        {React.Children.map(children, (Child, index) =>
          Child ? (
            <Col
              span={isArray(span) ? span[index] : span}
              xs={isArray(xs) ? xs[index] : xs}
              sm={isArray(sm) ? sm[index] : sm}
              md={isArray(md) ? md[index] : md}
              lg={isArray(lg) ? lg[index] : lg}
              xl={isArray(xl) ? xl[index] : xl}
              xxl={isArray(xxl) ? xxl[index] : xxl}
            >
              {Child}
            </Col>
          ) : null
        )}
      </Row>
    </div>
  );
};

export default ProFormGroup;
