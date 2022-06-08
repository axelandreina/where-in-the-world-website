import axios from "axios";

const getAllCountries = async (state) => {
    const getCountries = await axios.get('https://restcountries.com/v2/all')
    state(getCountries.data)
}


export default getAllCountries;