import { NavLink } from 'react-router-dom';
import person1 from 'images/person/person@1x.png';
import person2 from 'images/person/person@2x.png';
import person3 from 'images/person/person@3x.png';
import spriteSvg from 'images/sprite.svg';

import styles from 'styles/index.module.scss';
const Welcome = () => {
  return (
    <section className={styles.AfWelcom}>
      <div className={styles.AfWelcomWrapper}>
        <div className={styles.AfWelcomWrapperCard}>
          <img
            src={person1}
            srcSet={`${person1} 1x, ${person2} 2x, ${person3} 3x,`}
            width="200px"
            height="200px"
            alt=""
          />

          <div className={styles.AfWelcomWrapperCardLogo}>
            <svg className={styles.AfWelcomWrapperCardLogoImg}>
              <use href={spriteSvg + '#icon-logo'} />
            </svg>
            <h1 className={styles.AfWelcomWrapperCardLogoText}>Task Pro</h1>
          </div>
          <p className={styles.AfWelcomWrapperCardText}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </p>
          <NavLink
            to="auth/register"
            className={styles.AfWelcomWrapperCardBtnReg}
          >
            Registration
          </NavLink>
          <NavLink
            to="auth/login"
            className={styles.AfWelcomWrapperCardBtnLogin}
          >
            Sign in
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
