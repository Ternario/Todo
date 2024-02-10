import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
    const todo = !todos.length ? (
        <h2>Todo list is empty</h2>
    ) : (
        todos.map((todo, index) => (
            <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
        ))
    );

    return <div className={styles.todoListContainer}>{todo}</div>;
}

export default TodoList;
