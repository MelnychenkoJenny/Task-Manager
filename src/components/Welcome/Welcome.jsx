import { NavLink } from 'react-router-dom';
import personDesc from 'images/WelcomePage/welcome-desctop.png';
import personDesc2 from 'images/WelcomePage/welcome-desctop-2x.png';
import personTab from 'images/WelcomePage/welcome-tablet.png';
import personTab2 from 'images/WelcomePage/welcome-tablet-2x.png';
import personMob from 'images/WelcomePage/welcome-mobile.png';
import personMob2 from 'images/WelcomePage/welcome-mobile-2x.png';
import spriteSvg from 'images/sprite.svg';

import styles from 'styles/index.module.scss';
const Welcome = () => {
  return (
    <section className={styles.AfWelcom}>
      <div className={styles.AfWelcomWrapper}>
        <div className={styles.AfWelcomWrapperCard}>
          <picture>
            <source
              srcSet={`${personDesc} 1x,${personDesc2} 2x`}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`${personTab} 1x,${personTab2} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${personMob} 1x,${personMob2} 2x`}
              media=" (max-width: 767px)"
            />
            <img src={personMob} width="200px" height="200px" alt="" />
          </picture>

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
