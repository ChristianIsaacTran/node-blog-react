import styles from "./Errorpage.module.css";

function Errorpage() {
  return (
    <>
      <div className={styles.errorMsg}>Route Error: Couldn't route to page</div>
    </>
  );
}

export default Errorpage;
