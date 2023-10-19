import React from 'react';
import Cousine from '../Cousine/Cousine';

const Uncale = ({raing}) => {
    return (
        <div>
            <h2>uncale</h2>
            <section className='dispaly'>
            <Cousine>mustak</Cousine>
            <Cousine hendeler={true} raing={raing}>rannu</Cousine>
            </section>
        </div>
    );
};

export default Uncale;