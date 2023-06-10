import { FC } from 'react'
import { Link } from 'react-router-dom'; 

const Header: FC = () => {
    return(
    <>
        <div className='flex flex-row gap-4 p-4'>
             <h1>LOGO</h1>
            <Link to = "/admin/home" className="npru-button">
                Home</Link>
            <Link to = "/admin/menu" className="npru-button">
                Menu</Link>
        </div>
        </>
    );
};

export { Header };
