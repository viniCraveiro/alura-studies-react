import { ITask } from '../../types/task';
import Item from './item';
import style from './List.module.scss';

function List({ tasks }: { tasks: Array<ITask> }) {
  return (
    <aside className={style.tasksList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
