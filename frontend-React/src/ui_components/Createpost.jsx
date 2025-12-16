import React, { useState } from "react";
import axios from "axios";
import { motion } from 'framer-motion';

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [badge, setBadge] = useState("");
  const [link, setLink] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("access_token"); // token from login

      const response = await axios.post(
        "http://127.0.0.1:8000/api/posts/", // your Django POST endpoint
        {
          title: title,
          content: content,
          badge: badge,
          imgLink: imgLink,
          link: link,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // for JWT auth
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Post created:", response.data);
      setTitle("");
      setContent("");
      setBadge("");
      setLink("");
      setImgLink("");
      setMessage("Post Created!");
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error);
      setMessage("Unsuccessful Attempt. Please try again!");
    }
  };

  return (
     <section  
        className="w-full h-[800px] overflow-hidden"
        style={{
                backgroundImage:`url(https://images.unsplash.com/photo-1493653996588-060ebfafb460?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mt-30 mx-auto p-6 bg-white rounded-2xl shadow-md"
    >
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-black">Create a Post</h2>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 dark:text-grey dark:bg-gray-800 dark:text-white"
        required
      />
      <input
        type="text"
        placeholder="Post Badge"
        value={badge}
        onChange={(e) => setBadge(e.target.value)}
        className="w-full border rounded-lg mt-2 p-2 focus:ring focus:ring-blue-300 dark:text-grey dark:bg-gray-800 dark:text-white"
        required
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mt-5 w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 dark:text-grey dark:bg-gray-800 dark:text-white"
        required
      />
            <textarea
        placeholder="Post Reference Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="mt-5 w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 dark:text-grey dark:bg-gray-800 dark:text-white"
        required
      />


      <textarea
        placeholder="Post Image Link"
        value={imgLink}
        onChange={(e) => setImgLink(e.target.value)}
        className="mt-5 w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 dark:text-grey dark:bg-gray-800 dark:text-white"
        required
      />

       <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-[#4EBB90] text-white py-2 rounded-lg disabled:opacity-50"
        >
          Create Post
        </motion.button>
         <p>{message}</p>
    </form>
    </motion.div>
    </section>
  );
}


export default CreatePost;
