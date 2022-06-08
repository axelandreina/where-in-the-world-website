import React, {useState} from "react";

export default function Filter() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            <button onClick={() => {setShowDropdown(!showDropdown)}} className="m-6 bg-darkblue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Filter by Region <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div className={`${showDropdown ? '' : 'hidden' } bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`} id="dropdown">
            <ul className="py-1" aria-labelledby="dropdown">
                <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Africa</li>
                <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">America</li>
                <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Asia</li>
                <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Europe</li>
                <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Oceania</li>
            </ul>
            </div>
            
        </>
        
    );
}
