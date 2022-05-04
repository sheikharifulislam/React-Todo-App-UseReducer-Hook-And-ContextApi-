import React, { useContext, useId } from "react";
import { TaskContext } from "../context/TaskProvider";

export default function Form() {
    const { dispatch, taskName, setTaskName } = useContext(TaskContext);
    const id = useId();

    const handleAddTask = (e) => {
        dispatch({
            type: "Add",
            payload: {
                id,
                taskName: taskName,
                isCompleted: false,
            },
        });
        e.target.parentElement.parentElement.firstChild.firstChild.value = "";
    };

    return (
        <div className="newtask">
            <div className="newtask__input">
                <input
                    type="text"
                    id="newtaskID"
                    placeholder="Add new task here..."
                    onInput={(e) => setTaskName(e.target.value)}
                />
                <input type="hidden" name="updateTask" id="updateTask" />
            </div>
            <div className="newtask__btn">
                <button
                    className="AddTaskBtn"
                    onClick={(e) => handleAddTask(e)}
                >
                    Add Task
                </button>
                <button
                    className="EditTaskBtn"
                    style={{
                        display: "none",
                    }}
                >
                    Edit Task
                </button>
                <button
                    className="CancelTaskBtn"
                    style={{
                        display: "none",
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
