import React, { createContext, useEffect, useReducer, useState } from "react";

export const TaskContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, { ...action.payload }];
        case "Remove":
            const index = state.findIndex(
                (task) => task.id === action.payload.id
            );
            return state.splice(index, 1);
        default:
            return state;
    }
};

export default function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(reducer, []);
    const [taskName, setTaskName] = useState("");
    useEffect(() => {
        console.log(tasks);
    }, [tasks]);
    return (
        <TaskContext.Provider
            value={{ tasks, dispatch, taskName, setTaskName }}
        >
            {children}
        </TaskContext.Provider>
    );
}
