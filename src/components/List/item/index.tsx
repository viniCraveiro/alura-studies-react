import { ITask } from '../../../types/task';
import itemStyle from './Item.module.scss';

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${itemStyle.item} ${selected ? itemStyle.itemSelected : ""} ${
        completed ? itemStyle.itemCompleted : ""
      }`}
      onClick={() => !completed && selectTask({ task, time, selected, completed, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={itemStyle.done} aria-label="Tarefa Completada"></span>}
    </li>
  );
}
