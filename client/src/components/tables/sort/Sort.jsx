import styles from './styles.module.scss';

function Sort({handleSortByName, handleSortByID}) {
    return ( 
        <div className={styles.sort}>
            <span className={styles.sort_element} onClick={() => handleSortByID()}>by ID</span>
            <span className={styles.sort_element} onClick={() => handleSortByName()}>by Name</span>
        </div>
     );
}

export default Sort;