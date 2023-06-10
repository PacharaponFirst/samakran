import { FC } from 'react'
import { Link } from 'react-router-dom'; 

const Header: FC = () => {
    return(
    <>
    <nav className="bg-teal-500 p-1">
        <div className='flex flex-row gap-4 p-1 ' >
        <img className='w-20 h-16 ' src = "/src/assets/mookrob.jpg"></img>
            <Link to = "/admin/home" className="npru-button  h-10 ">
                Home</Link>
            <Link to = "/admin/menu" className="npru-button  h-10">
                Menu</Link>
        
        </div>
        </nav>
        </>
    );
};

export { Header };
