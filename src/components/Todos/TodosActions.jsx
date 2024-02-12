import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodoActions.module.css";

function TodoActions({ resetTodos, deletCompletedTodos, completedTodosExist }) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={deletCompletedTodos}
                disabled={!completedTodosExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodoActions;
