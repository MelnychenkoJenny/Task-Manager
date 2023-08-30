import { createPortal } from 'react-dom';
import { ThreeCircles } from 'react-loader-spinner';
import styles from 'styles/index.module.scss';
const loader = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <div className={styles.AfLoader}>
      <div className={styles.AfLoaderWr}>
        <div className={styles.AfLoaderWrCon}>
          <h1 className={styles.AfLoaderWrConTit}>Загружается</h1>
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="red"
            innerCircleColor="green"
            middleCircleColor="blue"
          />
        </div>
      </div>
    </div>,
    loader
  );
};
export default Loader;
