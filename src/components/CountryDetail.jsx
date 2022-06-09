import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Metronome } from "@uiball/loaders";
import axios from "axios";

export function CountryDetail() {

    const params = useParams()
        const [country, setCountry] = useState(null)
        const [loading, setLoading] = useState(true);

        const getCountry = async (name, state) => {
            setLoading(true)
            const result = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            state(result.data[0])
            setLoading(false);
        }
        
        useEffect(() => {
            getCountry(params.name, setCountry);
        }, []);    
    
        console.log(country);

    return (
        <div>
            {loading ? (
                <div className="flex items-center justify-center h-screen flex-col ">
                    <Metronome size={40} speed={1.6} color="white" />
                </div>
                
            ) : (
                // Aca va el componente que voy a crear
                <div>
                    <img src={country.flags.png} alt="" />
                </div>
            )}
        </div>
    )
}
