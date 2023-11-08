import { createContext, useContext } from 'react';
import { useBoards } from '../../hooks/index';
import { useState, useEffect } from 'react';

const ToggleContext = createContext();
export const useCustomContext = () => useContext(ToggleContext);



const Context = ({ children }) => {
    const { columns } = useBoards();
    const [updatedColumns, setUpdatedColumns] = useState();

    useEffect(() => {     
        const newColumns = columns.length > 0 && 
            columns.map(column => {
                const newColumn = { ...column };
                
                if(column.taskOrder.length === column.tasks.length) {                    
                    newColumn.tasks = column.taskOrder.map(taskId => {                   
                        return column.tasks.find(task => task._id === taskId); 
                    });    
                }
                return newColumn;
            });
            setUpdatedColumns(newColumns);
    }, [columns])

    return (
        <ToggleContext.Provider
            value = {{
                columns: updatedColumns,
            }}
        >
            {children}
        </ToggleContext.Provider>
    )
};

export default Context;