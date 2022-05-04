import React, { createContext, useReducer, useState } from "react";

export const TaskContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, { ...action.value }];
        default:
            return state;
    }
};

export default function TaskProvider({ children }) {
    const [task, dispatch] = useReducer(reducer, []);
    const [taskName, setTaskName] = useState("");
    return (
        <TaskContext.Provider value={{ task, dispatch, taskName, setTaskName }}>
            {children}
        </TaskContext.Provider>
    );
}
