import Header from "./Header";
import AllCountries from "./AllCountries";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

import React from "react";

export default function Home() {
    return (
        <>
            <Header />
            <SearchBar />
            <Filter />
            <AllCountries />
        </>
    );
}
