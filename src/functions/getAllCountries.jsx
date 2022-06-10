// Borrar esto

import axios from "axios";

const getAllCountries = async () => {
    const allCountries = await axios.get('https://restcountries.com/v2/all')
    return allCountries.data;
}


export default getAllCountries;