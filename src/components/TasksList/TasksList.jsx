import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import update from 'immutability-helper'; // dnd
import { editColumn } from '../../redux/board/boardOperations'; 
import { Card } from 'components/Card';
import styles from 'styles/index.module.scss';
import { useBoards } from 'hooks';


export const TasksList = ({ tasks, idColumn:_id, columnTitle, getReoderedCardsIds }) => {
  const dispatch = useDispatch();
  const {  filter: priority } = useBoards();

  //-------------------------------------------- dnd ---------------------------------------------------------------

  // 1. Перетягування картки в іншу колонку:
  // 1.1. На місце іншої картки, яку треба опустити (курсор на верхній частині статичної картки) 
  
  const getReoderedCardsIdxs = (reoderedTasks) => reoderedTasks.map((card) => card._id); // після перетягування таски треба змінити taskOrder
  
  const moveToAnotherColumn = useCallback((hoverIndex, item) => { // викликається в Card 
    // hoverIndex - позиція, на яку перетягли картку
      const newItem = {...item, _id: item.idTask}; 
      delete newItem.idTask;
      delete newItem.index;

      const reoderedTasks = update([...tasks], { //  повертає масив перетасованих тасок 
        $splice: [ 
          [hoverIndex, 0, newItem],
        ],
      });  
      getReoderedCardsIds({ _id, taskOrder: getReoderedCardsIdxs(reoderedTasks) });
      // після кидання картки запускається useDrop (в DropWrapper) => onDrop (в MainDashboard) 
  }, [tasks, _id, getReoderedCardsIds]);


  // 1.2. На місце іншої картки, яка має зберегти свою позицію, а нову треба опустити (курсор на нижній частині статичної картки) 
  const moveToAnotherColumnUnder = useCallback((hoverIndex, item) => { 
    const newItem = {...item, _id: item.idTask}; 
    delete newItem.idTask;
    delete newItem.index;

    const reoderedTasks = update([...tasks], { 
      $splice: [ 
        [hoverIndex + 1, 0, newItem],
      ],
    });
    getReoderedCardsIds({ _id, taskOrder: getReoderedCardsIdxs(reoderedTasks) });
    // після кидання картки запускається useDrop (в DropWrapper) => onDrop (в MainDashboard) 
  }, [tasks, _id, getReoderedCardsIds]);


  // 2. Перетягування таски (вертикально) в межах 1 колонки
  const moveInsideColumn = useCallback((dragIndex, hoverIndex) => { 
    // dragIndex - місце, з якого зірвали картку і тягнемо 
    // hoverIndex - позиція, над якою утримуємо картку
      const newTasks = [...tasks]; 
      let reoderedTasks = [];

      if(newTasks.length === 1) { // запобігання помилці (коли повертаємо назад на своє місце єдину картку, яку ховерили по іншій колонці):
        return;                                           // зрідка проскакує dragIndex - 1, hoverIndex - 0
      } else {
        reoderedTasks = update(newTasks, { 
          $splice: [  
            [dragIndex, 1],
            [hoverIndex, 0, newTasks[dragIndex]], 
          ],
        });        
      }
      dispatch(editColumn({ idColumn: _id, title: columnTitle, taskOrder: getReoderedCardsIdxs(reoderedTasks) }))  
  }, [tasks, _id, columnTitle, dispatch]);


  const filteredTasks =
    priority === 'all'
      ? tasks
      : tasks.filter(task => {
          return task?.priority === priority;
        });

  const renderCard = useCallback(({ title, description, priority, deadLine, _id, taskOwner}, index) => {
    return (
      <li key={_id}> 
        <Card
          columnTitle={columnTitle}
          cardTitle={title}
          description={description}
          priority={priority}
          deadline={deadLine}
          id={_id}
          taskOwner={taskOwner}
          index={index} // для dnd 
          moveToAnotherColumn={moveToAnotherColumn} // для dnd
          moveToAnotherColumnUnder={moveToAnotherColumnUnder} // для dnd
          moveInsideColumn={moveInsideColumn}
        />
      </li>
    );
  }, [columnTitle, moveToAnotherColumn, moveToAnotherColumnUnder, moveInsideColumn]);

  return (
    <ul className={styles.KkCards}>
        {filteredTasks.length !== 0 &&
          filteredTasks.map((task, index) => renderCard(task, index))
        }
      </ul>
  );
}