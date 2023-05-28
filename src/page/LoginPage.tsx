import { FC } from 'react';

const LoginPage:FC = () => {
    return (
        <>
    <div className = "flex w-screen h-screen bg-red-400">
        <div className="flex flex-col border rounded-lg p-4 shadow-md border-blue-400 bg-white w-1/2 m-auto w-full sm:w-1/2 md:w-1/3">
            <img className='w-64 h-64 m-auto mt-3 mb-3 rounded-md' src="moo.jpg" />
            <h1 className='m-auto text-3xl' >Login</h1>
            <label htmlFor='email'>Email</label>
            <input id="email" type ="text"  className="npru-input" />
            <label htmlFor="password">Password</label>
            <input id="password" type ="password" className="npru-input" />
            <button className= "mt-4 npru-button">Login</button>
        </div>
    </div>
    </>
    );
};

export { LoginPage };