import { createContext, ReactNode, useState } from "react";

type TaskContextType = {
  createdTasksAmount: number;
  setCreatedTasksAmount: React.Dispatch<React.SetStateAction<number>>;
  completedTasksAmount: number;
  setCompletedTasksAmount: React.Dispatch<React.SetStateAction<number>>;
  handleUpdateCreatedTaskAmount: () => void;
  handleUpdateDeleteTaskAmount: () => void;
};

type TaskContextProviderProps = {
  children: ReactNode;
};

export const TaskContext = createContext({});

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [createdTasksAmount, setCreatedTasksAmount] = useState(0);
  const [completedTasksAmount, setCompletedTasksAmount] = useState(0);

  function handleUpdateCreatedTaskAmount() {
    setCreatedTasksAmount((prev) => prev + 1);
  }

  function handleUpdateDeleteTaskAmount() {
    setCreatedTasksAmount((prev) => prev - 1);
  }

  return (
    <TaskContext.Provider
      value={{
        createdTasksAmount,
        setCreatedTasksAmount,
        completedTasksAmount,
        setCompletedTasksAmount,
        handleUpdateCreatedTaskAmount,
        handleUpdateDeleteTaskAmount,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}