const HomeFilter = ({filter, text, onClickFilter}) => {
    return (
        <button onClick={onClickFilter}>{text}</button>
    )
}

export default HomeFilter;