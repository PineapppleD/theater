import styles from './styles.module.scss'

function Performances({ image, name }) {
  return (
    <>
      <div className={styles.performances_section}>
        <div className={styles.performance_info}>
          <p>{name}</p>
          <button>see more</button>
        </div>
        <div className={styles.performance_image}>
          <img src={image} alt={name + 'image'} width='900px' height='600px'/>
        </div>
      </div>
    </>
  );
}

export default Performances;
