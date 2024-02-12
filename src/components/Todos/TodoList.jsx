import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo, toggleTodo }) {
    const todo = !todos.length ? (
        <h2>Todo list is empty</h2>
    ) : (
        todos.map((todo) => (
            <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        ))
    );

    return <div className={styles.todoListContainer}>{todo}</div>;
}

export default TodoList;
