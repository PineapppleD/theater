import Ticket from './Ticket';
import styles from './tickets.module.scss'

function Tickets() {
    return ( 
        <>
            <h2 className={styles.tickets_title}>Tickets</h2>
            <div className={styles.tickets}>
            <Ticket title={'Standard'} price={'50$'} description={'This ticket gives you access to the show.'}/>
            <Ticket title={'VIP'} price={'100$'} description={'Includes front-row seating and a meet-and-greet with the cast.'}/>
            <Ticket title={'Premium'} price={'200$'} description={'Includes front-row seating, a meet-and-greet with the cast, and a backstage tour.'}/>
            </div>
        </>
     );
}

export default Tickets;