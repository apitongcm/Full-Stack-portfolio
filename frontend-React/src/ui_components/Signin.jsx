import { Button } from '@/components/ui/button'
import {useState} from 'react'
import API from '../api';
import { motion } from 'framer-motion';


const Signin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    API.post("/token/", { username, password })
      .then(res => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        localStorage.setItem("username", username);
        setMessage("Login successful!");
        setUsername("");
        setPassword("");
      })
      .catch(err => {
        console.error(err);
        setMessage("Invalid username or password");
      });
  };

  return (
        <section  
        className="w-full h-[600px] overflow-hidden max-md:h-[500px]"
        style={{
                backgroundImage:`url(https://images.unsplash.com/photo-1466786784937-3e682c802b14?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                       <form className="max-w-lg mt-10 mx-auto p-6 bg-white rounded-2xl shadow-md max-md:mx-5" onSubmit={handleLogin}>
                             
                             <div className='mx-10'>
                              <h3 className='text-right dark:text-black'>Add New Post, Carl ? </h3>
                                <label 
                                htmlFor="username"
                                className="dark:text-white">
                                    Username
                                </label>
                                <input 
                                  type="text"
                                  id="username"
                                  placeholder="Enter username"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
                                  required
                                 />
         
                                <label htmlFor="username" className="dark:text-white">
                                    Password
                                </label>
                                <input 
                                  type="password"
                                  id="password"
                                  placeholder="Enter password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
                                  required
                                 />
                             </div>
                             <div className='grid grid-cols-2 gap-4 mt-4'>
                                <div></div>
                                <div>
                                  <Button className="w-full bg-[#4EBB90]" type="submit">Log in</Button>
                                  <p>{message}</p>
                                  
                                </div>
                             </div>
                       </form>
                    </section>
  )
}

export default Signin