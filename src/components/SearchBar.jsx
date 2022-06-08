import React from "react";

export default function SearchBar() {
    return (
        <div className="mt-6 mx-6 py-3 px-4 bg-darkblue rounded-xl text-white flex">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input className="bg-darkblue placeholder-transparent border-none outline-none" placeholder="Search for a country..." type="text" />
        </div>
    );
}
