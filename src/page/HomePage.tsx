import { FC } from 'react';
const HomePage:FC = () => {
    return <>
    <div className='flex flex-col'>
    <img className='w-64 h-64 m-auto p-6' src = "/src/assets/moo.jpg"></img>
    <h1 className='m-auto text-3xl text-red-500'>
        Homepage Work!!!
    </h1>
    </div>
    </>
}

export { HomePage }