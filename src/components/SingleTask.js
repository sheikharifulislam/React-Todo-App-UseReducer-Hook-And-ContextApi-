import React, { useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context/TaskProvider";
import Styles from "../utils/toastStyle";

export default function SingleTask({ task }) {
    const { taskName, id, isCompleted } = task;
    const { dispatch, setUpdateTaskId, setTaskName, updateTaskId } =
        useContext(TaskContext);
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
    return (
        <div className="task" data-createdat="12/12/2022, 6:59:55 PM">
            <div className="task__details">
                <input type="checkbox" className="task-check" />
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
