import { FC, useState } from 'react';
import { string, z } from 'zod';

const LoginForm: FC = () => {
    // script
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // validation schema
    const userModel = z.object({
        email: string().email(),
        password: string().min(8),
    });

    const onLoginClick = () => {};
    
        const model = userModel.safeParse({ email, password});
        if (model.success) {
            //TODO: send data to api server
        } else {
            //show error dialog
        }
    
    
    
    //template

    return<>
    <div className="flex flex-col border rounded-lg p-4 shadow-md border-blue-400 bg-white m-auto w-full sm:w-1/2 md:w-1/3">
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
    </>
}

export { LoginForm };