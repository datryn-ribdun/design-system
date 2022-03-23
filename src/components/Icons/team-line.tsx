import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';
import { uuid } from './uuid';
export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;
const SvgComponent = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & {
    title?: any;
  }
>(({ title, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentcolor"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M12 11C13.3261 11 14.5979 11.5268 15.5355 12.4645C16.4732 13.4021 17 14.6739 17 16V22H15V16C15 15.2348 14.7077 14.4985 14.1827 13.9417C13.6578 13.385 12.9399 13.0499 12.176 13.005L12 13C11.2348 13 10.4985 13.2923 9.94174 13.8173C9.38499 14.3422 9.04989 15.0601 9.005 15.824L9 16V22H7V16C7 14.6739 7.52678 13.4021 8.46447 12.4645C9.40215 11.5268 10.6739 11 12 11ZM5.5 14C5.779 14 6.05 14.033 6.31 14.094C6.13902 14.603 6.03777 15.1328 6.009 15.669L6 16V16.086C5.88505 16.0449 5.76549 16.018 5.644 16.006L5.5 16C5.12712 16 4.76761 16.1389 4.49158 16.3896C4.21555 16.6403 4.0428 16.9848 4.007 17.356L4 17.5V22H2V17.5C2 16.5717 2.36875 15.6815 3.02513 15.0251C3.6815 14.3687 4.57174 14 5.5 14V14ZM18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22H20V17.5C20 17.1271 19.8611 16.7676 19.6104 16.4916C19.3597 16.2156 19.0152 16.0428 18.644 16.007L18.5 16C18.325 16 18.157 16.03 18 16.085V16C18 15.334 17.892 14.694 17.691 14.096C17.95 14.033 18.221 14 18.5 14ZM5.5 8C6.16304 8 6.79893 8.26339 7.26777 8.73223C7.73661 9.20107 8 9.83696 8 10.5C8 11.163 7.73661 11.7989 7.26777 12.2678C6.79893 12.7366 6.16304 13 5.5 13C4.83696 13 4.20107 12.7366 3.73223 12.2678C3.26339 11.7989 3 11.163 3 10.5C3 9.83696 3.26339 9.20107 3.73223 8.73223C4.20107 8.26339 4.83696 8 5.5 8V8ZM18.5 8C19.163 8 19.7989 8.26339 20.2678 8.73223C20.7366 9.20107 21 9.83696 21 10.5C21 11.163 20.7366 11.7989 20.2678 12.2678C19.7989 12.7366 19.163 13 18.5 13C17.837 13 17.2011 12.7366 16.7322 12.2678C16.2634 11.7989 16 11.163 16 10.5C16 9.83696 16.2634 9.20107 16.7322 8.73223C17.2011 8.26339 17.837 8 18.5 8V8ZM5.5 10C5.36739 10 5.24021 10.0527 5.14645 10.1464C5.05268 10.2402 5 10.3674 5 10.5C5 10.6326 5.05268 10.7598 5.14645 10.8536C5.24021 10.9473 5.36739 11 5.5 11C5.63261 11 5.75979 10.9473 5.85355 10.8536C5.94732 10.7598 6 10.6326 6 10.5C6 10.3674 5.94732 10.2402 5.85355 10.1464C5.75979 10.0527 5.63261 10 5.5 10ZM18.5 10C18.3674 10 18.2402 10.0527 18.1464 10.1464C18.0527 10.2402 18 10.3674 18 10.5C18 10.6326 18.0527 10.7598 18.1464 10.8536C18.2402 10.9473 18.3674 11 18.5 11C18.6326 11 18.7598 10.9473 18.8536 10.8536C18.9473 10.7598 19 10.6326 19 10.5C19 10.3674 18.9473 10.2402 18.8536 10.1464C18.7598 10.0527 18.6326 10 18.5 10ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2V2ZM12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4V4Z" />
    </svg>
  );
});
const SvgVisibilityOff = styled(SvgComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, layout, typography)
);
export default SvgVisibilityOff;
