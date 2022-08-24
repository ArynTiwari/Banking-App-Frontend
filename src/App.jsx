import React from "react";
import styles from "./style";
const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <h1>Hello</h1>
      <div className={`$(styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>
      {/* Navbar section ends*/}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>hero</div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
    </div>
  );
};

export default App;
