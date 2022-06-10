import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import { Metronome } from "@uiball/loaders";
import getAllCountries from "./../functions/getAllCountries";



const AllCountries = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        getAllCountries()
        .then( allCountries => {
            setCountries(allCountries);
            setLoading(false);
        })
        
    }, []);

    return (
        <div className="h-screen">
            {loading ? (
                <div className="flex items-center justify-center h-screen flex-col ">
                    <Metronome size={40} speed={1.6} color="white" />
                </div>
                
            ) : (
                <div className="desktop:flex desktop:flex-wrap desktop:justify-center">
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
