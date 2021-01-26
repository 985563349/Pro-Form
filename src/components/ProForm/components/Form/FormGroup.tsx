import React, { FunctionComponent } from 'react';
import { Col, Row } from 'antd';
import { ColProps } from 'antd/lib/col';

import './style/index.css';

type ProFormGroupLayoutMap<T> = {
  [P in keyof T]: T[P] | T[P][];
};

type ColPropsPick = Pick<
  ColProps,
  'span' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
>;

type ProFormGroupLayoutProps = ProFormGroupLayoutMap<ColPropsPick>;

export interface ProFormGroupProps extends ProFormGroupLayoutProps {
  title?: string;
  gutter?: number;
}

const genLayoutProps = (props: ProFormGroupLayoutProps, length: number) => {
  const layoutProps: ProFormGroupLayoutProps = {};
  const keys: Array<keyof ProFormGroupLayoutProps> = [
    'span',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ];

  keys.forEach((key) => {
    const current = props[key];
    layoutProps[key] = Array.isArray(current)
      ? current
      : new Array(length).fill(current);
  });

  return (index: number) => {
    const colProps: ColPropsPick = {};
    keys.forEach((key) => {
      colProps[key] = (layoutProps[key] as any[])[index];
    });
    return colProps;
  };
};

const ProFormGroup: FunctionComponent<ProFormGroupProps> = (props) => {
  const { gutter, title, children } = props;
  const length = React.Children.count(children);
  const getLayoutProps = genLayoutProps(props, length);

  return (
    <div className="pro-form-group">
      {title && <div className="pro-form-group__title">{title}</div>}

      <Row gutter={gutter}>
        {React.Children.map(children, (Child, index) =>
          Child ? <Col {...getLayoutProps(index)}>{Child}</Col> : null
        )}
      </Row>
    </div>
  );
};

export default ProFormGroup;
