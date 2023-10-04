import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string,
  size?: number,
  strokeWidth?: number
}
