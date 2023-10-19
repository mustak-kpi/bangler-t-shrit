import React, { useContext } from 'react';
import { RingContacts } from '../Graendpa/Graendpa';

const Spesile = ({raing}) => {
    const ringee = useContext(RingContacts)
    return (
        <div>
            <p>spisel__{raing}</p>
            <p>{ringee}</p>
        </div>
    );
};

export default Spesile;