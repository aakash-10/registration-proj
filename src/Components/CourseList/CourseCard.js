// components/CourseList/CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div style={{marginTop: '5%', marginRight: '3%'}}>
    <div className="flex flex-col md:flex-row font-sans bg-white border rounded-lg overflow-hidden shadow-lg">
      <div className="md:flex-none w-full md:w-56 relative">
        <img
          src="https://www.bleepstatic.com/content/hl-images/2020/12/15/Python_malware.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap items-center">
          <h1 className="flex-auto font-medium text-slate-900 text-lg md:text-xl">
            {course.title}
          </h1>
          <div className="w-full mt-2 text-2xl font-bold text-violet-600">
            $39.00
          </div>
          <div className="text-sm font-medium text-slate-400">
            Cybersecurity
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          {/* Add something here if needed */}
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mb-5 text-sm font-medium">
          <div className="flex-none">
            <button className="w-full h-10 px-6 font-semibold rounded-full bg-violet-600 text-white">
              Buy now
            </button>
          </div>
          <div className="flex-none">
            <button className="w-full h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900">
              Add to bag
            </button>
          </div>
          <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full text-violet-600 bg-violet-50">
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </div>
        </div>
        <p className="text-sm text-slate-500">Life time Access</p>
      </form>
    </div>
    </div>
  );
};

export default CourseCard;
