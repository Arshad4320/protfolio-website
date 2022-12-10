import React from 'react';

const Contact = () => {
    return (
        <div className='mx-10 ' data-aos="fade-up">
            <div><h2 className='text-4xl font-semibold text-center py-12 text-teal-500'>Contact Us</h2></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2'>

                <form action="https://formsubmit.co/2f7a99d9f8ea027b63372ebea84bfe3a " method="POST" className='w-50 shadow-2xl  p-10 rounded-md'>
                    <label className='text-xl  text-teal-400' htmlFor="Name">Name</label><br />
                    <input type="text" placeholder="Name" className="input w-full bordered my-2" required />
                    <label className='text-xl text-teal-400' htmlFor="email">Email</label><br />
                    <input type="text" placeholder="Email" className="input w-full bordered my-2" required />
                    <label className='text-xl text-teal-400' htmlFor="message">Message</label><br />
                    <textarea className="textarea textarea-bordered w-full my-2" placeholder="message" required></textarea>
                    <button type='submit' className="btn btn-outline btn-accent ">Submit</button>
                </form>
                <div>
                    <h3 className='text-4xl  mt-10 font-semibold text-teal-500'>About Me</h3>
                    <p className='text-white text-justify text-lg mt-5'>I am a web developer and have extensive experience in this sector I like clean and simple designs My goal is to create good quality projects that users can enjoy using I love coding I consider myself a skilled and qualified candidate for the job of Wave Developer Think, and have the confidence to work towards yourself. And I always try my best To finish the work in time with time.</p>
                </div>
            </div>
           
        </div>
    );
};

export default Contact;