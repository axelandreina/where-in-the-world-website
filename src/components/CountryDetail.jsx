import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Metronome } from "@uiball/loaders";
import { CountryInfo } from './CountryInfo';
import getCountry from "./../functions/getCountry";

export function CountryDetail() {

    const params = useParams()
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getCountry(params.name)
        .then( country => {
            setCountry(country);
            setLoading(false);
        })
    }, []);    

    return (
        <div>
            {loading ? (
                <div className="flex items-center justify-center h-screen flex-col ">
                    <Metronome size={40} speed={1.6} color="white" />
                </div>
                
            ) : (
                <div>
                    <CountryInfo country={country}/>
                </div>
            )}
        </div>
    )
}
