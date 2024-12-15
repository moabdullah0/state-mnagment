import { useContext } from "react";
import { TasksContext } from "../Contexts/TasksContext";

const TasksList = () => {
  const {tasks,dispatch} = useContext(TasksContext);



  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: "ADD", task: { title: "Task", id: Date.now() } })
        }
      >
        Add Task
      </button>
      <ul>
        {tasks.map((ta) => (
          <li key={ta.id}>{ta.title}</li> 
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
