const { useState } = require("react");
// const { useSelector, useDispatch } = require("react-redux");
// import sprite from '../../images/sprite.svg'

const icons = [
    { key: 'project', value: 'icon-project' },
  ];

const NewBoard = () => {
    // потрібно створити селектор selectIsLoadingBoard
    // const isLoadingBoard = useSelector(selectIsLoadingBoard);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const toggleModal = () => setIsOpenModal(state => !state);
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("icon-project");
    // const [background, setBackground] = useState(second)
// потрібно створити селектор вибору теми
    // const theme = useSelector(selectTheme)

// const dispatch = useDispatch();

const onSubmit = e => {
    e.prevenDefault();
    // dispatch(
    //     addBoard({
    //         title,
    //         icon, 
    //         background: background || "default",
    //     })
    // ).then(() => {
    //     if (!isLoadingBoard) {
    //         toggleModal();
    //         setTitle("");
    //         setIcon("icon-project");
    //         setBackground("default")
    //     }
    // })
};

const changeIcon = newIcon => {
    setIcon(newIcon);
}

// const changeBackground = newBg => {
//     setBackground(newBg)
// }

const changeTitle = e => {
    setTitle(e.target.value)
}

return (
    <div>
        <button onClick={toggleModal} type="button">
            <svg width={36} height={36}>
                {/* <use href={sprite + '#icon-plus'}></use> */}
            </svg>
        </button>
        {isOpenModal && (
            <div onClose={toggleModal}>
                <form onSubmit={onSubmit}>
                    <h1>New board</h1>

                    <input
                    id="title"
                    type="title"
                    name="title"
                    placeholder={title}
                    value={title}
                    onChange={changeTitle}
                    />
                    <div id="icon-label">
                        Icons
                        <fieldset role='group' aria-labelledby="icon-label">
                            {icons.map(item => (
                                <div key={item.value}>
                                    <input
                                    id={item.value}
                                    type='radio'
                                    name={item.value}
                                    checked={icon === item.value}
                                    onChange={() => changeIcon(item.value)}
                                    />
                                    <label
                                    htmlFor={item.value}
                                    onClick={() => changeIcon(item.value) }
                                    >
                                    <svg>
                                        {/* <use href={sprite + `#${item.value}`}></use> */}
                                    </svg>
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    </div>

                    <div id="icon-label">
                        Background
                        <fieldset role='group' aria-labelledby="icon-label">

                            {/* описати логіку вибору background */}

                        </fieldset>
                    </div>

                    <button type='submit' onClick={onSubmit}>

                        Create
                    </button>

                </form>
            </div>
        )}
    </div>
)

}

export default NewBoard;