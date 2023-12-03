import React from "react";

export default function Search({inputName, handleKeyDownFromTodo, handleTodoTitleChange}){

    const handleKeyDown = (event) => {
        let { key } = event;
        if (key !== "Enter" || inputName === " ") return 
        event.preventDefault();
        console.log('test');
        handleKeyDownFromTodo(key)
    };
    const handleChangeName = (event) => {
        handleTodoTitleChange(event.target.value);
    };
return(
    <div>
        <input
            type="text"
            value={inputName}
            onChange={handleChangeName}
            onKeyDown={handleKeyDown}
            placeholder="Search for a country..."
        />
    </div>
);
}
