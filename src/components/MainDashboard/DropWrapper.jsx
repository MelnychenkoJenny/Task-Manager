import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./items";


export const DropWrapper = ({ onDrop, board, taskOwner, columnTitle, tasks, taskOrder, columns, columnIndex, children }) => { 
    
//------------------- dnd (перетягування картки між колонками) -------------------------
    const [, drop] = useDrop({ // const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.CARD,
        // canDrop: (item, monitor) => {
        //     // знаходимо індекс колонки, з якої тягнемо
        //     const columnIndexWithItem = columns.findIndex(column => column._id === item.taskOwner); // індекс або "-1"
        //     return [columnIndexWithItem + 1, columnIndexWithItem - 1, columnIndexWithItem].includes(columnIndex); 
        // },

        // тут без hover, інакше виконуватиметься на кожному міліметрі будь-якої колонки, тому що ref на колонці, а не на тасці
        drop: (item, monitor) => {
            onDrop(item, monitor, board, taskOwner, columnTitle, tasks, taskOrder, columnIndex); // ф-ція onDrop знаходиться в MainDashboard 
            // в tasks потрапляють таски тільки тієї колонки, на яку ми кидаємо картку 
            // в columnId потрапляє id тільки тієї колонки, на яку ми кидаємо картку 
        },  
        collect: monitor => ({
            isOver: monitor.isOver(),
            // canDrop: !!monitor.canDrop()
        })
    });
    
    return (
        <div ref={drop}>
            <div 
                style={{ 
                    // backgroundColor: isOver && canDrop ? 'rgba(43, 255, 0, 0.075)' : isOver && !canDrop ? 'rgba(233, 14, 14, 0.178)' : 'initial', 
                    borderRadius: '8px', 
                    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1) 0s'
                }}>
                {children} 
            </div>
        </div>
    )
};