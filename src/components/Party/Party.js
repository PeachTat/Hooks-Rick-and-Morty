import React from 'react';
import s from './Party.module.scss'

const Party = ({ rick, morty }) => {
    return (
        <>
            <h1>Party</h1>
            <div className={s.row}>
                <div className={s.rick}>
                    <img src={rick} alt='' />
                </div>
                <div className={s.morty}>
                    <img src={morty} alt='' />
                </div>
            </div>
        </>
    )
}
export default Party;
