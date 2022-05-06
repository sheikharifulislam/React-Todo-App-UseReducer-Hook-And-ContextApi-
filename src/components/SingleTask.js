import React, { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
import "../global.css";

export default function SingleTask({ task }) {
    const { taskName, id, isCompleted } = task;
    const { dispatch, setUpdateTaskId, setTaskName } = useContext(TaskContext);
    const handleUpdateIcon = () => {
        setTaskName(taskName);
        setUpdateTaskId(id);
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
                        onClick={() =>
                            dispatch({
                                type: "Remove",
                                payload: {
                                    id,
                                },
                            })
                        }
                    ></ion-icon>
                </span>
            </div>
        </div>
    );
}
