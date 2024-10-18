import { useState } from "react";


const Customhook = () => {
    const useArray = (initialArray = []) => {
        const [array, setArray] = useState(initialArray);

        const add = (item) => {
            setArray((prevArray) => [...prevArray, item]);
        };

        const removeById = (id) => {
            setArray((prevArray) => prevArray.filter((item) => item.id !== id));
        };

        const clear = () => {
            setArray([]);
        };

        return [array, { add, removeById, clear }];
    };

    const [todos, todoActions] = useArray([]);
    const [todoTitle, setTodoTitle] = useState("");

    const handleAddTodo = () => {
        const newTodo = {
            id: todos.length,
            title: todoTitle,
        };
        todoActions.add(newTodo);
        setTodoTitle("");
    };

    const handleRemoveTodo = (id) => {
        todoActions.removeById(id);
    };

    const handleClearTodos = () => {
        todoActions.clear();
    };

    return <>
        <div className="container">
            <h3>Hook Custom useArray</h3>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Agregar tarea"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    className="input"
                />
                <button onClick={handleAddTodo} className="add-button">
                    Agregar
                </button>
                <button onClick={handleClearTodos} className="clear-button">
                    Borrar todo
                </button>
            </div>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.title}
                        <button
                            onClick={() => handleRemoveTodo(todo.id)}
                            className="delete-button"
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </>
}

export default Customhook