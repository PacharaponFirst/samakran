import { FC } from 'react';

const LoginPage:FC = () => {
    return (
        <>
    <div className = "w-screen h-screen bg-red-400">
        <div className="border border-blue-400 bg-white w-1/2 m-auto">
            <h1>Login</h1>
            <label>Email</label>
            <input type ="text" />
        </div>
    </div>
    </>
    );
};

export { LoginPage };