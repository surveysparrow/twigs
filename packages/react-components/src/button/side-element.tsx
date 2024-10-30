import { CSS } from '@stitches/react';
import React, {
  ReactElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef
} from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  CircleLoader,
  CircleLoaderProps,
  LineLoader,
  LineLoaderProps
} from '../loader';
import { config, styled } from '../stitches.config';
import { ButtonBaseProps } from './button';
import { BUTTON_CLASSNAMES } from './utils';

const StyledSpan = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  transition:
    'width 300ms cubic-bezier(0.51, 0, 0, 1), margin-right 300ms cubic-bezier(0.51, 0, 0, 1)',

  [`.${BUTTON_CLASSNAMES.iconContainer}`]: {
    display: 'inline-flex',

    [`.${BUTTON_CLASSNAMES.iconBox}`]: {
      display: 'block',
      flexShrink: 0,

      '& > *': {
        width: '100%',
        height: '100%',
        display: 'block'
      }
    }
  },

  [`.${BUTTON_CLASSNAMES.iconContainer},
    .${BUTTON_CLASSNAMES.loader}`]: {
    transition: 'opacity 300ms cubic-bezier(0.51, 0, 0, 1)',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto'
  },

  [`& .${BUTTON_CLASSNAMES.iconContainer}-enter-done,
    & .${BUTTON_CLASSNAMES.loader}-enter-done,
    & .${BUTTON_CLASSNAMES.iconContainer}-exit-active,
    & .${BUTTON_CLASSNAMES.loader}-exit-active`]: {
    opacity: 1
  },

  [`& .${BUTTON_CLASSNAMES.iconContainer}-exit-done,
    & .${BUTTON_CLASSNAMES.loader}-exit-done`]: {
    opacity: 0
  }
});

export const ButtonSideElement = ({
  loading,
  loader = 'line',
  loaderSize,
  loaderCSS,
  loaderColor,
  icon,
  containerStyle
}: {
  loading: boolean;
  loader?: ButtonBaseProps['loader'];
  loaderSize: LineLoaderProps['size'] | CircleLoaderProps['size'];
  loaderCSS?: CSS<typeof config>;
  loaderColor?: LineLoaderProps['color'];
  icon?: ReactElement;
  containerStyle?: CSS<typeof config>;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(loading);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (nodeRef.current) {
        const nodeWidth = loading
          ? loaderContainerRef.current?.clientWidth
          : iconContainerRef.current?.firstElementChild?.clientWidth || 0;

        nodeRef.current.style.width = `${nodeWidth}px`;
      }
    });
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0] && !loadingRef.current) {
        const { width } = entries[0].contentRect;
        if (nodeRef.current) {
          nodeRef.current.style.width = `${width}px`;
        }
      }
    });

    if (iconContainerRef.current?.firstElementChild) {
      resizeObserver.observe(iconContainerRef.current.firstElementChild);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [icon]);

  const loaderComponent = useMemo(() => {
    switch (loader) {
      case 'line': {
        return (
          <LineLoader
            size={loaderSize as LineLoaderProps['size']}
            className={BUTTON_CLASSNAMES.loader}
            css={loaderCSS}
            containerRef={loaderContainerRef}
            color={loaderColor}
          />
        );
      }
      case 'circle': {
        return (
          <CircleLoader
            size={loaderSize}
            className={BUTTON_CLASSNAMES.loader}
            css={loaderCSS}
            containerRef={loaderContainerRef}
            color={loaderColor}
          />
        );
      }
      default: {
        return isValidElement(loader) ? (
          React.cloneElement(loader as ReactElement, {
            ref: loaderContainerRef
          })
        ) : (
          <span ref={loaderContainerRef} />
        );
      }
    }
  }, [loader, loaderSize, loaderCSS, loaderCSS]);

  return (
    <StyledSpan css={containerStyle} ref={nodeRef}>
      {icon && (
        <CSSTransition
          classNames={BUTTON_CLASSNAMES.iconContainer}
          in={!loading}
          nodeRef={iconContainerRef}
          onEnter={() => {
            requestAnimationFrame(() => {
              if (!nodeRef.current) return;
              const iconWidth = iconContainerRef.current?.firstElementChild?.clientWidth
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
            className={BUTTON_CLASSNAMES.iconContainer}
          >
            <span className={BUTTON_CLASSNAMES.iconBox}>
              {React.cloneElement(icon)}
            </span>
          </div>
        </CSSTransition>
      )}
      <CSSTransition
        classNames={BUTTON_CLASSNAMES.loader}
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
        {loaderComponent}
      </CSSTransition>
    </StyledSpan>
  );
};
