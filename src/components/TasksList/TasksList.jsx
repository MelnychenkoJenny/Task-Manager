import { Card } from 'components/Card';
import styles from 'styles/index.module.scss';
import { useBoards } from 'hooks';

export const TasksList = ({allTasks: tasks, idColumn:_id}) => {
const {  filter: priority } = useBoards();

  const filteredTasks =
  priority === 'all'
    ? tasks
    : tasks.filter(task => {
        return task?.priority === priority;
      });

    return (<ul className={styles.KkCards}>
        {filteredTasks.map(
          ({
            title: titleCard,
            description,
            priority,
            deadLine,
            _id: idCard,
          }) => {
            return (
              <li key={idCard}>
                <Card
                  cardTitle={titleCard}
                  id={idCard}
                  description={description}
                  priority={priority}
                  deadline={deadLine}
                  idColumn={_id}
                />
              </li>
            );
          }
        )}
      </ul>
    )
}