import { useAuth } from 'hooks';
import { createPortal } from 'react-dom';
import { ThreeCircles } from 'react-loader-spinner';
import styles from 'styles/index.module.scss';
const loader = document.querySelector('#loader-root');

const Loader = () => {
  const { user: {theme} } = useAuth();
  const colorLoader = theme==='light'||theme==='dark' ? "#78a860" : '#5255bc'

  return createPortal(
    // <div className={styles.AfLoader}>
      <div className={styles.AfLoaderWr}>
        <div className={styles.AfLoaderWrCon}>
          {/* <h1 className={styles.AfLoaderWrConTit}>Загружается</h1> */}
          <ThreeCircles
            height="100"
            width="100"
            color={colorLoader}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      {/* </div> */}
    </div>,
    loader
  );
};
export default Loader;
