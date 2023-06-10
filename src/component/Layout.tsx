import { FC } from 'react';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
    return ( 
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
    );
};

export { Layout };