import axios from "axios";

const getCountry = async (name) => {
    const result = await axios.get(`https://restcountries.com/v3.1/name/${encodeURI(name)}?fullText=true`)
    const country = result.data[0];
    let selectedCountry = {};
    selectedCountry.png = country.flags.png
    selectedCountry.name = country.name.common;
    selectedCountry.nativeNames = Object.values(country.name.nativeName).map( data => data.official).toString();
    selectedCountry.population = country.population.toLocaleString("es-AR");
    selectedCountry.region = country.region;
    selectedCountry.subRegion = country.subregion;
    selectedCountry.capitals = country.capital;
    selectedCountry.topLevelsDomain = country.tld.toString();
    selectedCountry.currencies = Object.values(country.currencies).map( data => data.name).toString();
    selectedCountry.languages = Object.values(country.languages).toString();
    return selectedCountry;
}


export default getCountry;