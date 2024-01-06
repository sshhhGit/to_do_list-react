import React from "react";

const TodoItem = (props) => {
    const removeItem = () => {
        props.removeItem(props.index);
    }

    return (
        <div className="todo-item">
            {props.item}
            <button onClick={removeItem}>삭제</button>
        </div>
    );
};

export default TodoItem;
