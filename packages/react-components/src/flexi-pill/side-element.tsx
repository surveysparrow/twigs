import { CSS } from '@stitches/react';
import clsx from 'clsx';
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
import { FLEXI_PILL_CLASSNAMES } from './utils';
import { FlexiPillBaseProps } from './flexi-pill';

const StyledSpan = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  transition:
    'width 300ms cubic-bezier(0.51, 0, 0, 1), margin-right 300ms cubic-bezier(0.51, 0, 0, 1)',

  [`&.${FLEXI_PILL_CLASSNAMES.sideElementLoaderHidden} .${FLEXI_PILL_CLASSNAMES.loader}`]:
    {
      opacity: 0
    },

  [`.${FLEXI_PILL_CLASSNAMES.iconContainer}`]: {
    display: 'inline-flex',

    [`.${FLEXI_PILL_CLASSNAMES.iconBox}`]: {
      display: 'block',
      flexShrink: 0,

      '& > *': {
        width: '100%',
        height: '100%',
        display: 'block'
      }
    }
  },

  [`.${FLEXI_PILL_CLASSNAMES.iconContainer},
    .${FLEXI_PILL_CLASSNAMES.loader}`]: {
    transition: 'opacity 300ms cubic-bezier(0.51, 0, 0, 1)',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto'
  },

  [`& .${FLEXI_PILL_CLASSNAMES.iconContainer}-enter-done,
    & .${FLEXI_PILL_CLASSNAMES.loader}-enter-done,
    & .${FLEXI_PILL_CLASSNAMES.iconContainer}-exit-active,
    & .${FLEXI_PILL_CLASSNAMES.loader}-exit-active`]: {
    opacity: 1
  },

  [`& .${FLEXI_PILL_CLASSNAMES.iconContainer}-exit-done,
    & .${FLEXI_PILL_CLASSNAMES.loader}-exit-done`]: {
    opacity: 0
  }
});

export const FlexiPillSideElement = ({
  loading,
  loader = 'line',
  loaderSize,
  loaderCSS,
  loaderColor,
  icon,
  containerStyle
}: {
  loading: boolean;
  loader?: FlexiPillBaseProps['loader'];
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
          : iconContainerRef.current?.firstElementChild?.clientWidth ?? 0;

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
            className={FLEXI_PILL_CLASSNAMES.loader}
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
            className={FLEXI_PILL_CLASSNAMES.loader}
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
    <StyledSpan
      css={containerStyle}
      ref={nodeRef}
      className={clsx(FLEXI_PILL_CLASSNAMES.sideElement, {
        [`${FLEXI_PILL_CLASSNAMES.sideElementIconHidden}`]:
          !icon || (icon && loading),
        [`${FLEXI_PILL_CLASSNAMES.sideElementLoaderHidden}`]: !loading
      })}
    >
      {icon && (
        <CSSTransition
          classNames={FLEXI_PILL_CLASSNAMES.iconContainer}
          in={!loading}
          nodeRef={iconContainerRef}
          onEnter={() => {
            requestAnimationFrame(() => {
              if (!nodeRef.current) return;
              const iconWidth = iconContainerRef.current?.firstElementChild?.clientWidth ?? 0;
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
            className={FLEXI_PILL_CLASSNAMES.iconContainer}
          >
            <span className={FLEXI_PILL_CLASSNAMES.iconBox}>
              {React.cloneElement(icon)}
            </span>
          </div>
        </CSSTransition>
      )}
      <CSSTransition
        classNames={FLEXI_PILL_CLASSNAMES.loader}
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
