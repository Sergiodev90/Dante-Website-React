import React,{useState} from 'react';
import {CSS} from '@dnd-kit/utilities';
import { Draggable } from '../Draggable';
import {
    DndContext,
    useDraggable,
    useSensor,
    MouseSensor,
    TouchSensor,
    KeyboardSensor,
    useSensors,
  } from '@dnd-kit/core';


  function DraggableItem({
    axis,
    label,
    style,
    top,
    left,
    handle,
    buttonStyle,
  }) {
    const {attributes, isDragging, listeners, setNodeRef, transform} =
      useDraggable({
        id: 'draggable',
      });
  
    return (
      <Draggable
        ref={setNodeRef}
        dragging={isDragging}
        handle={handle}
        label={label}
        listeners={listeners}
        style={{...style, top, left}}
        buttonStyle={buttonStyle}
        transform={transform}
        axis={axis}
        {...attributes}
      />
    );
  }

function DraggableStory({
    activationConstraint,
    axis,
    handle,
    label = 'Go ahead, drag me.',
    modifiers,
    style,
    buttonStyle,
  }) {
    const defaultCoordinates = {
        x: 0,
        y: 0,
      };
    const [{x, y}, setCoordinates] = useState(defaultCoordinates);
    const mouseSensor = useSensor(MouseSensor, {
      activationConstraint,
    });
    const touchSensor = useSensor(TouchSensor, {
      activationConstraint,
    });
    const keyboardSensor = useSensor(KeyboardSensor, {});
    const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  
    return (
      <DndContext
        sensors={sensors}
        onDragEnd={({delta}) => {
          setCoordinates(({x, y}) => {
            return {
              x: x + delta.x,
              y: y + delta.y,
            };
          });
        }}
        modifiers={modifiers}
      >
          <DraggableItem
            axis={axis}
            label={label}
            handle={handle}
            top={y}
            left={x}
            style={style}
            buttonStyle={buttonStyle}
          />
      </DndContext>
    );
  }

 
  
  export { DraggableStory };