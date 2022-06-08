import React, { useState, useEffect } from "react";
// import getAllCountries from "../functions/functions";
import CountryCard from "./CountryCard";
import { Metronome } from "@uiball/loaders";
import axios from "axios";



const AllCountries = () => {
    const getAllCountries = async (state) => {
        setLoading(true)
        const getCountries = await axios.get('https://restcountries.com/v2/all')
        state(getCountries.data)
        setLoading(false);
    }

    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState(null);
    
    useEffect(() => {
        getAllCountries(setCountries);
    }, []);

    return (
        <div className="h-screen">
            {loading ? (
                <div className="flex items-center justify-center h-screen flex-col ">
                    <Metronome size={40} speed={1.6} color="white" />
                </div>
                
            ) : (
                <div>
                    {countries !== null
                        ? countries.map((country) => (
                        <CountryCard key={country.name} country={country} />
                        ))
                        : "No country selected"}
                </div>
            )}
        </div>
    );
};

export default AllCountries;
