import { React } from 'react';
import 'styles/index.module.scss';

const Sidebar = ({active}) => {
  return (
    <div className="sidebarWrap">
      <div className="sbHeader">
        <span className="sbLogo">LOGO</span>
        <h2 className="sbTitle">Task Pro</h2>
      </div>
      <div className="sbBoards">
        <h3 className="sbSubtitle">My boards</h3>
        <div className="sbCreateBoardBlock">
          <span className="sbCreateBoardText">Create a new board</span>
          <button className="sbCreateBoardButton">SVG</button>
        </div>
        <div>Тут буде елемент зі списком створених дошок</div>
      </div>
      <div className="sbHelp">
        <span>SVG</span>
        <p className="sbHelpText">
          If you need help with <span className="cbTaskProSpan">TaskPro</span>,
          check out our support resources or reach out to our customer support
          team.
        </p>
        <button className="sbHelpButton">SVG Need help?</button>
      </div>
      <button className="sbLogout">Log out</button>
    </div>
  );
};

export default Sidebar;
