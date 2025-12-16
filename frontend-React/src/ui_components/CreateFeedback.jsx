import {useState} from 'react'
import API from '../api';
import { motion } from 'framer-motion';


const CreateFeedback = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] =useState("");

    const handleFeedback = async (e) => {
    e.preventDefault();

          API.post("/feedback/",{name,email,message})
            .then(() => {
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
                localStorage.setItem("message",message);
                setAlert("Feedback sent.")
                setName("");
                setEmail("");
                setMessage("");
                

            })
            .catch(err =>{
                console.error(err);
                setAlert("Sending Failed. Try Again.")
            })
    };

  return (
    <>
   <section  
        className="w-full h-[600px] overflow-hidden max-md:h-[500px]"
        style={{
                backgroundImage:`url(https://images.unsplash.com/photo-1466786784937-3e682c802b14?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mt-10 mx-auto p-6 bg-white rounded-2xl shadow-md max-md:mx-5"
    >
      <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
      <form onSubmit={handleFeedback} className="space-y-4 ">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white "
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border rounded-lg p-2 h-28 focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white "
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-[#4EBB90] text-white py-2 rounded-lg disabled:opacity-50"
        >
          Send me a Hello!
        </motion.button>
        <p>{alert}</p>
      </form>
    </motion.div>
    
    </section>
    <section>
       <div className='grid grid-cols-3 text-justify max-md:grid-cols-1'>
                <div className='w-full h-[300px] overflow-hidden'>
                    <img 
                        src="https://images.unsplash.com/photo-1576933765009-9f57f43910aa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full h-[300px] overflow-hidden'>
                    <img 
                        src="https://images.unsplash.com/13/unsplash_523ae1f5502d6_1.JPG?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='w-full h-full object-cover'
                    />
                </div>
                 <div className='w-full h-[300px] overflow-hidden'>
                    <img 
                        src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='w-full h-full object-cover'
                    />
                </div>
             </div>
            
    </section>
    </>
  )
}

export default CreateFeedback