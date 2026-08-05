import styles from "./Errorpage.module.css";

function Errorpage() {
  return (
    <>
      <main>
        <div className={styles.errorMsg}>
          Route Error: Couldn't route to page
        </div>
      </main>
    </>
  );
}

export default Errorpage;
