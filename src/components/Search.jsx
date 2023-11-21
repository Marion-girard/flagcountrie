import React from "react";

export default function Search(inputName, handleKeyDownFromTodo, handleTodoTitleChange) {
    const handleKeyDown = (e) => {
        let { key } = e;
        if (key !== "Enter" || inputName === "") return;
    
        handleKeyDownFromTodo(key);
      };
    const handleChangeName = (e) => {
        handleTodoTitleChange(e.target.value);
      };


return (
    <form action="">
    <label>
        <input
            type="text"
            value={inputName}
            onChange={handleChangeName}
            onKeyDown={handleKeyDown}
            placeholder="Search for a country..."
        />
    </label>
</form>)
}
