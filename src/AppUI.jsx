import React, {useState} from 'react';
import {App} from './pages/App';
import {DndContext} from '@dnd-kit/core';
import {DraggableStory} from  './components/UI/DraggableStory';
import { Layout } from './layout'



function AppUI() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <DraggableStory id="draggable">
      Go ahead, drag me.
    </DraggableStory>
  );
  return (
    <>

      <Layout>
         <App/>
             {/* <DndContext onDragEnd={handleDragEnd}>
             {!parent ? draggable : null}
      </DndContext> */}

      </Layout>

    </>
  );
  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
  }
}

// function Example() {
//   const [parent, setParent] = useState(null);
//   const draggable = (
//     <Draggable id="draggable">
//       Go ahead, drag me.
//     </Draggable>
//   );

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {!parent ? draggable : null}
//       <Droppable id="droppable">
//         {parent === "droppable" ? draggable : 'Drop here'}
//         <AppUI/>
//       </Droppable>
//     </DndContext>
//   );

//   function handleDragEnd({over}) {
//     setParent(over ? over.id : null);
//   }
// }

export  {AppUI};