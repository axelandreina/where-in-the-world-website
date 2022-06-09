import React, {useState} from "react";

export default function Filter() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            <button onClick={() => {setShowDropdown(!showDropdown)}} className={`mt-6 ml-6 bg-darkblue text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mb-1`} type="button" data-dropdown-toggle="dropdown">Filter by Region <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div className={`${showDropdown ? '' : 'hidden' } text-base list-none divide-y divide-gray-100 rounded-2xl shadow z-40 absolute mx-6 w-[155px]`} id="dropdown">
            <ul className="py-1 bg-darkblue rounded-lg text-white cursor-pointer" aria-labelledby="dropdown">
                <li className="text-sm hover:bg-white hover:text-darkblue text-white block px-4 py-2">Africa</li>
                <li className="text-sm hover:bg-white hover:text-darkblue text-white block px-4 py-2 ">America</li>
                <li className="text-sm hover:bg-white hover:text-darkblue text-white block px-4 py-2 ">Asia</li>
                <li className="text-sm hover:bg-white hover:text-darkblue text-white block px-4 py-2 ">Europe</li>
                <li className="text-sm hover:bg-white hover:text-darkblue text-white block px-4 py-2 ">Oceania</li>
            </ul>
            </div>
            
        </>
        
    );
}
