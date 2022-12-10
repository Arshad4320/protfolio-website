import React from 'react';
import img from '../../../img/img1.jpg'
import img2 from '../../../img/img2.jpg'
import img3 from '../../../img/img3.jpg'
const Projects = () => {
    return (
        <div >
            <div><h2 className='text-4xl font-semibold text-center py-10 text-teal-500'>Projects</h2></div>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>

                <div className="card card-compact w-90 bg-base-100 shadow-xl mx-auto " data-aos="fade-up">
                    <figure><img src={img} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Food Review</h2>
                        <p>This project is food related. That is - Login, and Register are implemented using Firebase, Tailwind, React Router DOM, and Firebase Authentication. Also, Node JS, Express MongoDB CRUD Operations, etc. are used for the backend.</p>
                        <div className="card-actions justify-end">

                            <a href=" https://country-travel-54ced.web.app">
                                <button className="btn  btn-accent  w-full">Visit site</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-90 bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure><img src={img2} alt="bike" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bike Resale</h2>
                        <p>This project is basically bike sale related.
                            Dashboard has been implemented in this project. Admin role has been implemented
                            there and buyer, seller options have been kept.Technology:tailwind, React , firebase authentication,Node Js, Express JS,
                            react-router-dom, Mongodb, etc.</p>
                        <div className="card-actions justify-end">
                            <a href="https://resale-bike-10a96.web.app/">

                                <button className="btn  btn-accent  w-full ">Visit site</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-90 bg-base-100 shadow-xl " data-aos="fade-up">
                    <figure><img src={img3} alt="code pen" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Code pen</h2>
                        <p>This project is mainly course related. Can buy any type of programming course.
                            Firebase has been implemented in this project. Also, the technologies used in the project are Tailwind, React, Node JS, Firebase Authentication, MongoDB, etc.</p>
                        <div className="card-actions justify-end">

                            <a href=" https://assignment-project-371ab.web.app/">
                                <button className="btn  btn-accent  w-full">Visit site</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;