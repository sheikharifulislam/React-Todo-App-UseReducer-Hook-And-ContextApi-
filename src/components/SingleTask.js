import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context/TaskProvider";
import Styles from "../utils/toastStyle";

export default function SingleTask({ task }) {
    const { taskName, id, isCompleted } = task;
    const { dispatch, setUpdateTaskId, setTaskName, updateTaskId } =
        useContext(TaskContext);
    const [complete, SetComplete] = useState(false);

    const handleUpdateIcon = () => {
        setTaskName(taskName);
        setUpdateTaskId(id);
    };
    const handleDeleteIcon = () => {
        if (updateTaskId !== id) {
            dispatch({
                type: "Remove",
                payload: {
                    id,
                },
            });
        } else {
            toast.warn("Please Complete Task Edit Or Click Cancle Button", {
                ...Styles,
            });
        }
    };

    const handleCompleteTask = (e) => {
        SetComplete(!complete);
    };

    useEffect(() => {
        dispatch({
            type: "Complete",
            payload: {
                id,
                isCompleted: complete,
            },
        });
    }, [dispatch, complete, id]);

    return (
        <div className={`task ${complete ? "completed" : ""}`}>
            <div className="task__details">
                <input
                    type="checkbox"
                    checked={isCompleted ? true : false}
                    onChange={(e) => handleCompleteTask(e)}
                    className="task-check"
                />
                <label className="task-title">{taskName}</label>
            </div>

            <div className="task__op">
                <span className="task__op_edit">
                    <ion-icon
                        name="create-outline"
                        onClick={handleUpdateIcon}
                    ></ion-icon>
                </span>

                <span className="task__op_delete">
                    <ion-icon
                        name="trash-outline"
                        onClick={handleDeleteIcon}
                    ></ion-icon>
                </span>
            </div>
        </div>
    );
}
