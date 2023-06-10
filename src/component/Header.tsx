import { FC } from 'react'
import { Link } from 'react-router-dom'; 

const Header: FC = () => {
    return(
    <>
        <div className='flex flex-row gap-4 p-4'>
             <h1>LOGO</h1>
            <Link to = "/admin/home" className='bg-blue-500 text-gray-500 p-2 '>
                Home</Link>
            <Link to = "/admin/menu">Menu</Link>
        </div>
        </>
    );
};

export { Header };
