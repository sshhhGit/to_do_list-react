import React, { useState } from "react";
import './App.css';
import TodoBoard from "./components/TodoBoard";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setTodoList([...todoList, inputValue]);
            setInputValue(''); // 아이템을 추가하고 나면 inputValue를 초기화
        }
    }

    const removeItem = (index) => {
        const updatedList = [...todoList];
        updatedList.splice(index, 1);
        setTodoList(updatedList);
    }

    return (
        <main>
            <h1>할 일 목록</h1>
            <div className="input-container">
                <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="할 일을 입력하세요" />
                <button onClick={addItem}>추가</button>
            </div>
            <TodoBoard todoList={todoList} removeItem={removeItem} />
        </main>
    );
}

export default App;
