import { Card } from 'components/Card';
import styles from 'styles/index.module.scss';

export const TasksList = ({allTasks: tasks, idColumn:_id}) => {
    return (<ul className={styles.KkCards}>
        {tasks.map(
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