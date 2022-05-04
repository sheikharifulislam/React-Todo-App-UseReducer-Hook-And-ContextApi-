import React from "react";

export default function Form() {
    return (
        <div class="newtask">
            <div class="newtask__input">
                <input
                    type="text"
                    id="newtaskID"
                    placeholder="Add new task here..."
                />
                <input type="hidden" name="updateTask" id="updateTask" />
            </div>
            <div class="newtask__btn">
                <button class="AddTaskBtn">Add Task</button>
                <button
                    class="EditTaskBtn"
                    style={{
                        display: "none",
                    }}
                >
                    Edit Task
                </button>
                <button
                    class="CancelTaskBtn"
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
