import { useReducer } from "react";
import "./App.css";

import TasksList from "./Components/TasksList";
import { TasksContext } from "./Contexts/TasksContext";
import TaskReducer from "./Reducer/TaskReducer";
import AuthProvidor from "./Providor/AuthProvidor";

function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, []);

  return (
    <>
      <AuthProvidor>
        <TasksContext.Provider value={{ dispatch, tasks }}>
          <TasksList />
        </TasksContext.Provider>
      </AuthProvidor>
    </>
  );
}

export default App;
