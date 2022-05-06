import React, { useContext } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../context/TaskProvider";
import Styles from "../utils/toastStyle";

export default function Form() {
    const { dispatch, taskName, setTaskName, updateTaskId, setUpdateTaskId } =
        useContext(TaskContext);
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
            setTaskName("");
            e.target.parentElement.parentElement.firstChild.firstChild.value =
                "";
        } else {
            toast.warn("Please Write Your Task Name", {
                ...Styles,
            });
        }
    };

    const handleCancleButton = () => {
        setTaskName("");
        setUpdateTaskId("");
    };

    const handleEditButton = (e) => {
        if (taskName.length >= 1) {
            dispatch({
                type: "Edit",
                payload: {
                    id: updateTaskId,
                    taskName,
                },
            });
            setUpdateTaskId("");
            setTaskName("");
            e.target.parentElement.parentElement.firstChild.firstChild.value =
                "";
        } else {
            toast.warn("Please Write Your Task Name Or Click Cancle Button", {
                ...Styles,
            });
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
                <input
                    type="hidden"
                    name="updateTask"
                    id="updateTask"
                    defaultValue={updateTaskId}
                />
            </div>
            <div className="newtask__btn">
                <button
                    className="AddTaskBtn"
                    onClick={(e) => handleAddTask(e)}
                    style={{
                        display: updateTaskId ? "none" : "inline-block",
                    }}
                >
                    Add Task
                </button>
                <button
                    className="EditTaskBtn"
                    style={{
                        display: updateTaskId ? "inline-block" : "none",
                    }}
                    onClick={(e) => handleEditButton(e)}
                >
                    Edit Task
                </button>
                <button
                    className="CancelTaskBtn"
                    style={{
                        display: updateTaskId ? "inline-block" : "none",
                    }}
                    onClick={handleCancleButton}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
