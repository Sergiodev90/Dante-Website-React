import React, {useState} from 'react';
import {App} from './pages/App';
import {DndContext} from '@dnd-kit/core';
import {DraggableStory} from  './components/UI/DraggableStory';
import {GlobalProvider} from './context/GlobalContext'
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { SearchButton } from './components/UI/SearchButton';
import { Layout } from './layout'
import { NavBar } from './components/UI/Navbar';



function AppUI() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <DraggableStory id="draggable" modifiers={[restrictToWindowEdges]}  label="Drag with the handle" >
      Go ahead, drag me.
    </DraggableStory>
  );
  return (

    <GlobalProvider>
      <Layout>
         <App/>
        <SearchButton/>
      </Layout>
    </GlobalProvider>

  
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