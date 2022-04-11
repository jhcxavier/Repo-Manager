// import React, { useState, useContext, useEffect } from "react";
// // import "./styles.css";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Issues from "../Issue";
// import { Context } from "../../store/appContext";

// const DragNDrop = ({ list }) => {
//     const defaultList = ["A", "B", "C", "D", "E"];
//   // React state to track order of items
//   const [itemList, setItemList] = useState(defaultList);
// const {store} = useContext(Context)
//   // Function to update list on drop
//   const handleDrop = (droppedItem) => {
//     // Ignore drop outside droppable container
//     if (!droppedItem.destination) return;
//     var updatedList = [...itemList];
//     // Remove dragged item
//     const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
//     // Add dropped item
//     updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
//     // Update State
//     setItemList(updatedList);
//   };

//   return (
//     <div className="App">
//       <DragDropContext onDragEnd={handleDrop}>
//         <Droppable droppableId="list-container">
//           {(provided) => (
//             <div
//               className="list-container"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {itemList.map((item, index) => (
//                 <Draggable key={item} draggableId={item} index={index}>
//                   {(provided) => (
//                     <div
//                       className="item-container"
//                       ref={provided.innerRef}
//                       {...provided.dragHandleProps}
//                       {...provided.draggableProps}
//                     >
//                       {item}
//                       <Issues  />
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// }
// export default DragNDrop;