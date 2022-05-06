import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../context/TaskProvider";

export default function Form() {
    const { dispatch, taskName, setTaskName } = useContext(TaskContext);

    const handleAddTask = (e) => {
        if (taskName.length > 0) {
            dispatch({
                type: "Add",
                payload: {
                    id: uuidv4(),
                    taskName: taskName,
                    isCompleted: false,
                },
            });
            e.target.parentElement.parentElement.firstChild.firstChild.value =
                "";
        }
    };

    return (
        <div className="newtask">
            <div className="newtask__input">
                <input
                    type="text"
                    id="newtaskID"
                    placeholder="Add new task here..."
                    defaultValue={taskName}
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
