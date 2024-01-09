# React GSAP Hook

## Usage
##### _One line of code worths thousands lines of explanations._

```typescript
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

```

## Development
1. Git clone the project ``https://github.com/duc168/react-gsap-hook.git``
2. Install lerna globally if you have not installed lerna yet, run ``yarn global add lerna``
3. Run ``npm install`` to install the first packages
4. ``npm start`` to start developing
5. ``npm run stop`` to stop developing
6. ``npm run build`` to build a new version

##### _Happy coding!_
