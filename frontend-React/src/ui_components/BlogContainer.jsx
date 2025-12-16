import React from 'react'
import TestAxios from '../ui_components/TestAxios'

const BlogContainer = () => {
  return (
   <section className='padding-x py-6 max-container dark:bg-gray-700'>
    <h2 id="Portfolio" className='font-semibold text-5xl mb-6 dark:text-white text-center pt-30 pb-20 max-md:text-3xl'>
        Feature Posts
    </h2>

    <div className='flex items-center gap-6 justify-center flex-wrap mb-16'>
        <TestAxios/>
    </div>
   </section>
  )
}

export default BlogContainer