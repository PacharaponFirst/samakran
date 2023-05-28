import { FC, useState } from 'react';
import { string, z } from 'zod';

const LoginPage:FC = () => {
    //script
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //validation schema
    const loginModel = z.object({
        email: string().email({message:"กรุณากรอกข้อมูลให้อยู่ในรู)แบบอีเมล์"}),
        password: string().min(8, {message:"รหัสผ่านต้องมีความยาวมากกว่า 8 ตัวอักษร"}),
    });

    //login button event
    const onLoginClick = () => {
        try {
            loginModel.parse({email, password});
            console.log(loginModel)
        }catch(e) {
            console.log(e);
        }
    };
    //template
    return (
        <>
    <div className = "flex w-screen h-screen bg-red-400">
        <div className="flex flex-col border rounded-lg p-4 shadow-md border-blue-400 bg-white w-1/2 m-auto w-full sm:w-1/2 md:w-1/3">
            <img className='w-64 h-64 m-auto mt-3 mb-3 rounded-md' src="moo.jpg" />
            <h1 className='m-auto text-3xl' >Login</h1>
            <label htmlFor='email'>Email</label>
            <input 
            id="email" 
            type ="text"  
            className="npru-input" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <label htmlFor="password">Password</label>
            <input 
            id="password" 
            type ="password" 
            className="npru-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
             />
            <button className= "mt-4 npru-button" onClick = {() => onLoginClick()}>Login</button>
            <h1>
                {email} , {password}
            </h1>
        </div>
    </div>
    </>
    );
};

export { LoginPage };