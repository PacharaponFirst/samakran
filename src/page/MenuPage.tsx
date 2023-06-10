import { FC } from 'react';
import { Link } from 'react-router-dom';

const MenuPage: FC = () => {
    return(
    <>
        <div className='grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
        
            <button className='npru-button'><Link to = "/admin/news">News</Link></button>
            <button className='npru-button'>Menu #2</button>
            <button className='npru-button'>Menu #3</button>
            <button className='npru-button'>Menu #4</button>
            <button className='npru-button'>Menu #5</button>
            <button className='npru-button'>LOGOUT</button>
        </div>
    </>
    );
};

export {MenuPage, Link};