import { todoType } from "../appType";

type ProbsType = {
  task: todoType;
  deleteTask(toDelete: string): void;
};

export default function TodoItem({ task, deleteTask }: ProbsType) {
  return (
    <>
      <div className="todoTaskArea">
        <div>{task.task}</div>
        <div>{task.day}</div>
        <button onClick={() => deleteTask(task.task)}>Delete</button>
      </div>
    </>
  );
}
