import React, { createContext, useReducer, useState } from "react";

export const TaskContext = createContext();
const reducer = (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    switch (action.type) {
        case "Add":
            state = [...state, { ...action.payload }];
            localStorage.setItem("AllTask", JSON.stringify(state));
            return state;
        case "Remove":
            const tasks = [...state];
            tasks.splice(index, 1);
            localStorage.setItem("AllTask", JSON.stringify(tasks));
            return tasks;
        case "Edit":
            state[index] = {
                ...state[index],
                taskName: action.payload.taskName,
            };
            localStorage.setItem("AllTask", JSON.stringify(state));
            return state;
        case "Complete":
            state[index] = {
                ...state[index],
                isCompleted: action.payload.isCompleted,
            };
            console.log(state);
            localStorage.setItem("AllTask", JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

export default function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        reducer,
        (() => {
            const allTask = localStorage.getItem("AllTask");
            if (allTask) {
                return JSON.parse(allTask);
            }
            return [];
        })()
    );
    const [taskName, setTaskName] = useState("");
    const [updateTaskId, setUpdateTaskId] = useState("");
    return (
        <TaskContext.Provider
            value={{
                tasks,
                dispatch,
                taskName,
                setTaskName,
                updateTaskId,
                setUpdateTaskId,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
