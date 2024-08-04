import styles from './TodoItem.module.css';

export default function TodoItem({ todo }) {
    return (
        <>
            <li className={styles.item}>{todo}</li>
        </>
    );
}
