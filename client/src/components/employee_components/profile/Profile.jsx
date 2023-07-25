import styles from "./styles.module.scss";

function Profile({ name, image }) {
  return (
    <div className={styles.profile}>
      <img src={image} alt={name + " profile"} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default Profile;
