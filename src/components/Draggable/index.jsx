import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Draggable.module.css';
// import { draggable, draggableVertical, draggableHorizontal } from './icons'; // O de donde importes los iconos
// import { Handle } from './Handle'; // Asumiendo que Handle es un componente

export const Draggable = forwardRef(function Draggable(
  {
    axis,
    dragOverlay,
    dragging,
    handle,
    label,
    listeners,
    transform,
    style,
    buttonStyle,
    isPendingDelay = false,
    ...props
  },
  ref
) {
  return (
    <div
      className={classNames(
        styles.Draggable,
        dragOverlay && styles.dragOverlay,
        dragging && styles.dragging,
        handle && styles.handle,
        isPendingDelay && styles.pendingDelay
      )}
      style={{
        ...style,
        '--translate-x': `${transform?.x ?? 0}px`,
        '--translate-y': `${transform?.y ?? 0}px`,
      }}
    >
      <button
        {...props}
        aria-label="Draggable"
        data-cypress="draggable-item"
        {...(handle ? {} : listeners)}
        tabIndex={handle ? -1 : undefined}
        ref={ref}
        style={buttonStyle}
      >
        {props.children}
      </button>
      {label ? <label>{label}</label> : null}
    </div>
  );
});
