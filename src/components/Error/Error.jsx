import styles from 'styles/index.module.scss';
import spriteSvg from 'images/sprite.svg';

const Error = () => {
  return (
    <section className={styles.AfErrorS}>
      <div className={styles.AfErrorSWr}>
        <svg className={styles.AfErrorSWrSvg}>
          <use href={spriteSvg + '#icon-error'} />
        </svg>

        <h2 className={styles.AfErrorSWrTitle}>
          <span>404</span>
          <span>Page not found</span>
        </h2>
      </div>
    </section>
  );
};
export default Error;
