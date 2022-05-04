import React from "react";

export default function SingleTask({ taskName }) {
    return (
        <div className="task" data-createdat="12/12/2022, 6:59:55 PM">
            <div className="task__details">
                <input type="checkbox" className="task-check" />
                <label className="task-title">{taskName}</label>
            </div>

            <div className="task__op">
                <ion-icon
                    className="task__op_edit"
                    name="create-outline"
                ></ion-icon>
                <ion-icon
                    className="task__op_delete"
                    name="trash-outline"
                ></ion-icon>
            </div>
        </div>
    );
}
