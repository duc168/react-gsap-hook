import React, { useEffect, useRef, useState } from "react";
import { useReactGsap } from "react-gsap-hook";
import styles from "./styles.module.scss";
const TEST_ANIMATION_CLASS_NAME = "test-animation";
const Container: React.FC<any> = () => {
  const [show, setShow] = useState(false)
  const containerRef = useRef(null);
  
  useReactGsap(
    show,
    TEST_ANIMATION_CLASS_NAME,
    { opacity: 0, y: 20, duration: 0.38 },
    { opacity: 1, y: 0, duration: 0.38 },
);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShow((prev) => !prev)
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
  return (
    <div className={styles.container} ref={containerRef}>
      <div className={`${styles.test} ${TEST_ANIMATION_CLASS_NAME}`}>test</div>
    </div>
  );
};

export default Container;
