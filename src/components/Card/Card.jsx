import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';

const Card = () => {

    return (
        <div className={scss.OBCardContainer}>
            <h4 className={scss.OBCardTitle}>Design and Prototyping SoYummy</h4>
            <p>Create visually appealing and functional design prototypes based on the approved concepts,</p>
            
            <hr className={scss.OBCardSeparator} />
            
            <div className={scss.OBCardFooterContainer}>
                <table className={scss.OBCardValuesContainer}>
                    <thead>
                        <tr>
                            <th className={scss.OBCardProreties}>Priority</th>
                            <th className={scss.OBCardProreties}>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className={scss.OBCardPriorityCircle}></div></td>
                            <td className={scss.OBCardDate}>12/05/2023</td>
                        </tr>
                    </tbody>
                </table>
    
                <div className={scss.OBCardIconsWrapper}>
                    <svg className={scss.OBCardIcon} width='16' height='16'>
                    <use href={SvgSprite + '#icon-bell'} />
                    </svg>
                    <svg className={scss.OBCardIcon} width='16' height='16'>
                    <use href={SvgSprite + '#icon-pencil'} />
                    </svg>
                    <svg className={scss.OBCardIcon} width='16' height='16'>
                    <use href={SvgSprite + '#icon-arrow'} />
                    </svg>        
                    <svg className={scss.OBCardIcon} width='16' height='16'>
                    <use href={SvgSprite + '#icon-trash'} width='16' height='16' />
                    </svg>
                </div>
            </div>
      </div>
    );
};

export default Card;