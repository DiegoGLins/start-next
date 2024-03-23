import FooterContainer from "./FooterContainer";
import Navbar from "./NavBar";
import styles from "../styles/MainContainer.module.css";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <FooterContainer />
    </>
  );
}
