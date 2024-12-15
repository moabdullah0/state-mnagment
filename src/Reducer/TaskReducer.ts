export interface Task {
  title: string;
  id: number;
}
interface AddTask {
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  id: number;
  type: "DELETE";
}
export type TaskAction = AddTask | DeleteTask;
const TaskReducer = (task: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...task];
    case "DELETE":
      return task.filter((ta) => ta.id !== action.id);
    default:
      task;
  }
};
export default TaskReducer;