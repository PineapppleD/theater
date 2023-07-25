import styles from './tickets.module.scss'

function Ticket({title, price, description}) {
    return ( 
    <>
        <div className={styles.ticket}>
            <p className={styles.ticket_title}>{title}</p>
            <div className={styles.line}></div>
            <p className={styles.ticket_price}>{price}</p>
            <p className={styles.ticket_desc}>{description}</p>
        </div>
    </> );
}

export default Ticket;