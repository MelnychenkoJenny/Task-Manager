// import { Container, MainTitle,MainText, MainImg,IconImg,RegistrationButton,LoginLink, ContainerTitle } from './Main.styled';
import Person from '../../images/person.png';
import Icon from '../../images/icon.png';
import scss from './Welcome.module.scss';
import { NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <header className={scss.mainContainer}>
      <img src={Person} className={scss.mainImg} alt="person with notebook"/>
      <div className={scss.titleContainer}>
        <img className={scss.iconImg} src={Icon} alt="cube with lightning"/>
        <h1 className={scss.mainTitle}> Task Pro </h1>
      </div>
      <p className={scss.mainText}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <button className={scss.registrationButton}><NavLink to="/auth/register">Registration</NavLink></button>
      <NavLink className={scss.loginLink} to="/auth/login">Log In</NavLink>
    </header>
  );
}

export default Welcome;
