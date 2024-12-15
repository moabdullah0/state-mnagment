import React from "react";
import { Task, TaskAction } from "../Reducer/TaskReducer";

interface TaskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

export const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);
