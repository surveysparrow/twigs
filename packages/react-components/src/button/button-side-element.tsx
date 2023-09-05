import React, { ReactElement, useEffect, useRef } from 'react';
import { CSS } from '@stitches/react';
import { CSSTransition } from 'react-transition-group';
import { config, styled } from '../../stitches.config';
import {
  CircleLoader,
  CircleLoaderProps,
  LineLoader,
  LineLoaderProps
} from '../loader';
import { ButtonBaseProps } from './button';

const StyledSpan = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  transition: 'width 300ms cubic-bezier(0.51, 0, 0, 1)',

  '.button-icon-container': {
    display: 'inline-flex',

    svg: {
      flexShrink: 0
    }
  },

  '.button-icon-container, .button-loader': {
    transition: 'opacity 300ms cubic-bezier(0.51, 0, 0, 1)',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto'
  },

  '& .button-loader': {
    opacity: 0
  },

  '&.button-side-element-enter-done': {
    '.button-icon-container': {
      opacity: 0
    },
    '.button-loader': {
      opacity: 1
    }
  },

  '&.loader-only.button-side-element-enter-done': {
    marginRight: '$4'
  },

  '&.button-side-element-enter-active, &.button-side-element-exit-done': {
    '.button-icon-container': {
      opacity: 1
    },
    '.button-loader': {
      opacity: 0
    }
  },

  '&.button-side-element-exit-active': {
    '.button-icon-container': {
      opacity: 0
    },
    '.button-loader': {
      opacity: 1
    }
  }
});

export const ButtonSideElement = ({
  loading,
  loaderType = 'line',
  loaderSize,
  loaderCSS,
  icon,
  containerStyle,
  containerClass
}: {
  loading: boolean;
  loaderType?: ButtonBaseProps['loaderType'];
  loaderSize: LineLoaderProps['size'] | CircleLoaderProps['size'];
  loaderCSS?: CSS<typeof config>;
  icon?: ReactElement;
  containerStyle?: CSS<typeof config>;
  containerClass?: string;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nodeRef.current) {
      const nodeWidth = loading
        ? loaderContainerRef.current?.clientWidth
        : iconContainerRef.current?.querySelector('svg')?.clientWidth || 0;
      nodeRef.current.style.width = `${nodeWidth}px`;
    }
  }, []);

  return (
    <CSSTransition
      classNames="button-side-element"
      in={loading}
      nodeRef={nodeRef}
      onEnter={() => {
        if (!nodeRef.current) return;

        const loaderWidth = loaderContainerRef.current?.clientWidth;
        nodeRef.current.style.width = `${loaderWidth}px`;
      }}
      onExit={() => {
        if (!nodeRef.current) return;

        const iconWidth = iconContainerRef.current?.querySelector('svg')?.clientWidth || 0;
        nodeRef.current.style.width = `${iconWidth}px`;
      }}
      timeout={100}
    >
      <StyledSpan css={containerStyle} ref={nodeRef} className={containerClass}>
        {icon
        && (
        <div ref={iconContainerRef} className="button-icon-container">
          {React.cloneElement(icon)}
        </div>
        )}
        {loaderType === 'line' ? (
          <LineLoader
            size={loaderSize as LineLoaderProps['size']}
            className="button-loader"
            containerCSS={loaderCSS}
            containerRef={loaderContainerRef}
          />
        ) : (
          <CircleLoader
            size={loaderSize}
            className="button-loader"
            containerCSS={loaderCSS}
            containerRef={loaderContainerRef}
          />
        )}
      </StyledSpan>
    </CSSTransition>
  );
};
