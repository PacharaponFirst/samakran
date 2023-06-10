import { FC } from 'react'
import { Link } from 'react-router-dom'; 

const Header: FC = () => {
    return(
    <>
    <h1>LOGO</h1>
    <Link to = "/admin/home">Home</Link>
    <Link to = "/admin/menu">Menu</Link>
    </>
    );
};

export { Header };
