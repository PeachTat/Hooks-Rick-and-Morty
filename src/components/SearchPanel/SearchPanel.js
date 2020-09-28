import React from 'react';
import s from './SearchPanel.module.scss'

const SearchPanel = (props) => {
    return (
        <input type="text" className={s.input} onChange={props.onChange} />
    )
}

export default SearchPanel;
