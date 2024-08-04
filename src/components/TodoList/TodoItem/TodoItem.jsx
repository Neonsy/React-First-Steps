import styles from './TodoItem.module.css';

export default function TodoItem({ todo }) {
    return (
        <>
            <li className={styles.item}>
                <span className={styles.text}>{todo}</span>
                <button className={styles.deleteButton}>X</button>
            </li>
        </>
    );
}
