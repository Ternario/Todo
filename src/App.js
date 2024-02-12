import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoActions from "./components/Todos/TodosActions";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(),
        };

        setTodos([...todos, newTodo]);
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo };
            })
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteCompletedToddosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodoActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosHandler}
                    deletCompletedTodos={deleteCompletedToddosHandler}
                />
            )}
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />

            {!!completedTodosCount && (
                <h2>{`You have completed ${completedTodosCount} ${
                    completedTodosCount > 1 ? "todos" : "todo"
                }`}</h2>
            )}
        </div>
    );
}

export default App;
