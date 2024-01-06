import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props) => {
    return (
        <div>
            {props.todoList.map((item, index) => (
                <TodoItem key={index} item={item} index={index} removeItem={props.removeItem} />
            ))}
        </div>
    );
};

export default TodoBoard;
