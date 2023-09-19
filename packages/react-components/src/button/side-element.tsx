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
import { prefixClassName } from '../utils';

const StyledSpan = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  transition:
    'width 300ms cubic-bezier(0.51, 0, 0, 1), margin-right 300ms cubic-bezier(0.51, 0, 0, 1)',

  [`.${prefixClassName('button__icon-container')}`]: {
    display: 'inline-flex',

    svg: {
      flexShrink: 0
    }
  },

  [`.${prefixClassName('button__icon-container')},
    .${prefixClassName('button__loader')}`]: {
    transition: 'opacity 300ms cubic-bezier(0.51, 0, 0, 1)',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto'
  },

  [`& .${prefixClassName('button__icon-container-enter-done')},
    & .${prefixClassName('button__loader-enter-done')},
    & .${prefixClassName('button__icon-container-exit-active')},
    & .${prefixClassName('button__loader-exit-active')}`]: {
    opacity: 1
  },

  [`& .${prefixClassName('button__icon-container-exit-done')},
    & .${prefixClassName('button__loader-exit-done')}`]: {
    opacity: 0
  }
});

export const ButtonSideElement = ({
  loading,
  loaderType = 'line',
  loaderSize,
  loaderCSS,
  loaderColor,
  icon,
  containerStyle
}: {
  loading: boolean;
  loaderType?: ButtonBaseProps['loaderType'];
  loaderSize: LineLoaderProps['size'] | CircleLoaderProps['size'];
  loaderCSS?: CSS<typeof config>;
  loaderColor?: LineLoaderProps['color']
  icon?: ReactElement;
  containerStyle?: CSS<typeof config>;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nodeRef.current) {
      console.log(loaderContainerRef.current, loading);
      const nodeWidth = loading
        ? loaderContainerRef.current?.clientWidth
        : iconContainerRef.current?.querySelector('svg')?.clientWidth || 0;
      nodeRef.current.style.width = `${nodeWidth}px`;
    }
  }, []);

  return (
    <StyledSpan css={containerStyle} ref={nodeRef}>
      {icon && (
        <CSSTransition
          classNames={`${prefixClassName('button__icon-container')}`}
          in={!loading}
          nodeRef={iconContainerRef}
          onEnter={() => {
            requestAnimationFrame(() => {
              if (!nodeRef.current) return;
              const iconWidth = iconContainerRef.current?.querySelector('svg')?.clientWidth
                || 0;
              nodeRef.current.style.width = `${iconWidth}px`;
            });
          }}
          onExit={() => {
            if (!nodeRef.current) return;
            nodeRef.current.style.width = '0px';
          }}
          timeout={100}
          mountOnEnter
        >
          <div
            ref={iconContainerRef}
            className={`${prefixClassName('button__icon-container')}`}
          >
            {React.cloneElement(icon)}
          </div>
        </CSSTransition>
      )}
      <CSSTransition
        classNames={`${prefixClassName('button__loader')}`}
        in={loading}
        nodeRef={loaderContainerRef}
        onEnter={() => {
          requestAnimationFrame(() => {
            if (!nodeRef.current) return;

            const loaderWidth = loaderContainerRef.current?.clientWidth;
            nodeRef.current.style.width = `${loaderWidth}px`;
          });
        }}
        onExit={() => {
          if (!nodeRef.current) return;
          nodeRef.current.style.width = '0px';
        }}
        timeout={100}
        mountOnEnter
      >
        {loaderType === 'line' ? (
          <LineLoader
            size={loaderSize as LineLoaderProps['size']}
            className={`${prefixClassName('button__loader')}`}
            css={loaderCSS}
            containerRef={loaderContainerRef}
            color={loaderColor}
          />
        ) : (
          <CircleLoader
            size={loaderSize}
            className={`${prefixClassName('button__loader')}`}
            css={loaderCSS}
            containerRef={loaderContainerRef}
            color={loaderColor}
          />
        )}
      </CSSTransition>
    </StyledSpan>
  );
};
