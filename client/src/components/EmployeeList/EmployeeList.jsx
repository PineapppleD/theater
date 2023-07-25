import a1 from "./images/1.webp";
import a2 from "./images/2.webp";
import a3 from "./images/3.webp";
import a4 from "./images/4.webp";
import a5 from "./images/5.webp";
import a6 from "./images/6.webp";
import a7 from "./images/7.webp";
import a8 from "./images/8.webp";
import a9 from "./images/9.webp";
import a10 from "./images/10.webp";
import Profile from "../employee_components/profile/Profile";
import styles from "./styles.module.scss"

const images = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

function EmployeeList({names}) {

  return (
    <div className={styles.list}>
      {names.map((name, index) => (
        <Profile name={name} image={images[Math.floor(Math.random() * 10)]} key={index} />
      ))}
    </div>
  );
}

export default EmployeeList;
