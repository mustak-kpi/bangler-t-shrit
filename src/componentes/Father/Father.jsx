import React from 'react';
import Myself from '../Myself/Myself';
import Brather from '../Brather/Brather';
import Sistre from '../Sistre/Sistre';

const Father = ({raing}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='dispaly'>
            <Myself raing={raing}></Myself>
              <Brather></Brather>
              <Sistre></Sistre>
            </section>
        </div>
    );
};

export default Father;