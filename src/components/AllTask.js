import React, { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
import SingleTask from "./SingleTask";

export default function AllTask() {
    const { tasks } = useContext(TaskContext);
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <SingleTask key={task.id} taskName={task.taskName} />
            ))}
        </div>
    );
}
