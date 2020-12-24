import React, { FunctionComponent } from 'react';
import { Col, Row } from 'antd';
import { ColProps } from 'antd/lib/col';

import './index.css';

type Map<T> = {
  [P in keyof T]: T[P] | T[P][];
};

type ProFormGroupColProps = Map<
  Pick<ColProps, 'span' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>
>;

export interface ProFormGroupProps extends ProFormGroupColProps {
  title?: string;
  gutter?: number;
}

const ProFormGroup: FunctionComponent<ProFormGroupProps> = (props) => {
  const { gutter, span, xs, sm, md, lg, xl, xxl, title, children } = props;

  const isArray = Array.isArray;
  const length = React.Children.count(children);

  // FIXME: 我也不知道这是什么鬼，等后续优化吧。
  const [colSpan, colXs, colSm, colMd, colLg, colXl, colXxl] = [
    span,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  ].map((value) => (isArray(value) ? value : new Array(length).fill(value)));

  return (
    <div className="pro-form-group">
      {title && <div className="pro-form-group__title">{title}</div>}

      <Row gutter={gutter}>
        {React.Children.map(children, (Child, index) =>
          Child ? (
            <Col
              span={colSpan[index]}
              xs={colXs[index]}
              sm={colSm[index]}
              md={colMd[index]}
              lg={colLg[index]}
              xl={colXl[index]}
              xxl={colXxl[index]}
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
