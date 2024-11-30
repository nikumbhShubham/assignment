"use client"
import React, { useState } from "react";
// import therapist from '../assets/therapist.jpg'

import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { SlGraduation } from "react-icons/sl";
import { FaRegIdCard } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineAddHome } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const TherapistPortfolio = () => {
    const testimonials = [
        {
            text: "The guidance I received helped me manage my stress and live a more balanced life.",
            author: "Anonymous",
        },
        {
            text: "Therapy helped me build self-esteem and confidence that I never thought possible.",
            author: "Anonymous",
        },
        {
            text: "I felt truly heard and supported, which made all the difference in my journey.",
            author: "Anonymous",
        },
        {
            text: "This approach was professional yet empathetic, creating a safe space for healing.",
            author: "Anonymous",
        },
    ];

    // State to manage "Show More" or "Show Less"
    const [showAll, setShowAll] = useState(false);

    // Toggle between showing 2 or all testimonials
    const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);
    return (
        <div className="flex h-screen">
            {/* Left Side (Fixed) */}

            <div className="w-[40%] bg-blue-500  p-8 sticky top-0">
                <span className='flex items-center gap-2 text-white'>
                    <FaArrowLeft /> Back
                </span>
                <div className="flex flex-col items-center mt-16 mx-auto py-4 bg-white rounded-lg w-[350px]">
                    <div className="absolute  right-1/4">
                        <IoShareSocialOutline className="text-blue-500 text-xl cursor-pointer" />
                    </div>
                    <Image
                        src="/assets/therapist.jpg"
                        alt="Therapist"
                        width={150}
                        height={150}
                        className="rounded-lg m-4"
                    />
                    <h2 className="text-2xl font-bold flex items-center gap-3">  <IoShareSocialOutline className="text-blue-500 text-xl cursor-pointer" /> Swetha Varma
                        <MdVerified className='text-blue-500' />
                    </h2>
                    <p className="text-gray-400 font-semibold">Consultant Clinical Psychologist</p>
                    <p className="font-semibold">10+ Years of experience</p>
                    <p className="text-2xl font-bold my-4">Start at 1,200/session</p>
                    <p className="text-gray-400 flex items-center gap-3 "><CiLocationOn />
                        Block A2, Delhi</p>

                </div>
                <button className="bg-white text-blue-500 px-20 py-3 rounded-full flex items-center mx-auto my-4 font-semibold text-xl  ">
                    <Link 
                    href={'/PricingComponent'}
                    >
                    Book session
                    </Link>
                </button>
            </div>

            {/* Right Side (Scrollable) */}
            <div className="w-2/3 p-16 overflow-y-scroll">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">About me</h2>
                    <div className='flex justify-around '>
                        <p className=' align-middle'>
                            Hello, I am Swetha, a licensed therapist dedicated to guiding individuals
                            through lifes challenges with empathy and expertise. With over 10 years
                            of experience, I specialize in helping clients manage anxiety,
                            depression, and relationship issues through personalized,
                            evidence-based practices. <span className='text-blue-500 underline cursor-pointer'>Read more</span>
                        </p>

                    </div>

                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Credentials</h2>
                    <ul className=" ">

                        <li className='flex items-center gap-3 text-gray-500 '><SlGraduation className='text-blue-500' />Ph.D. in Clinical Psychology - Harvard University</li>
                        <li className='flex items-center gap-3 text-gray-500 '> <SlGraduation className='text-blue-500' />M.A. in Counseling - University of California, Berkeley</li>
                        <li className='flex items-center gap-3 text-gray-500 '><FaRegIdCard className='text-blue-500' />Licensed Professional Counselor (LPC) - State of DEF</li>
                        <li className='flex items-center gap-3 text-gray-500 '><PiCertificate className='text-blue-500' />Certified Cognitive Behavioral Therapist (CBT)</li>
                        <li className='flex items-center gap-3 text-gray-500 '><FiUsers className='text-blue-500' />Member, American Psychological Association (APA)</li>
                        <li className='flex items-center gap-3 text-gray-500 '><IoBriefcaseOutline className='text-blue-500' />10+ years of experience in individual and group therapy</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Available on</h2>
                    <div className="flex flex-wrap gap-4">
                        {/* In-Person Option */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-blue-200 p-6 rounded-md">
                                <MdOutlineAddHome className="text-4xl text-blue-500" />
                            </div>
                            <span>In-Person</span>
                        </div>

                        {/* Video/Voice Call Option */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-blue-200 p-6 rounded-md">
                                <MdOutlineLocalPhone className="text-4xl text-blue-500" />
                            </div>
                            <span>Video/Voice call</span>
                        </div>
                    </div>

                </section>


                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">I offer therapy for</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-full border p-3 text-center border-blue-500">Stress Management</div>
                        <div className="rounded-full border p-3 text-center border-blue-500">Relationship Skills</div>
                        <div className="rounded-full border p-3 text-center border-blue-500">Anxiety Reduction</div>
                        <div className="rounded-full border p-3 text-center border-blue-500">Depression Relief</div>
                        <div className="rounded-full border p-3 text-center border-blue-500">Behavioral</div>
                        <div className="rounded-full border p-3 text-center border-blue-500">Trauma Healing</div>
                    </div>
                </section>
                <section className=" flex justify-between m-6">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 flex items-center gap-1"> I am from <CiMap className='text-base' /> </h2>
                        <p className='text-gray-500'>Chennai, India</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 flex items-center gap-1">Languages <GrLanguage className='text-base' /></h2>
                        <p className='text-gray-500'>English, Hindi</p>
                    </section>
                </section>


                <section className="mb-8">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
                        <button
                            className="text-gray-500 flex items-center top-10"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show less" : "Show more"}{" "}
                            {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>

                    {/* Testimonials */}
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        {displayedTestimonials.map((testimonial, index) => (
                            <div key={index} className="bg-blue-100 p-4 rounded-xl w-full sm:w-[45%]">
                                <blockquote>
                                    <p>
                                        <span className="text-8xl mb-2 text-blue-400">"</span>
                                        {testimonial.text}
                                    </p>
                                    <cite className="block mt-2 text-gray-600">- {testimonial.author}</cite>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TherapistPortfolio;