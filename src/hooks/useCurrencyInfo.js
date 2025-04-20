import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(jsonData => setData(jsonData[currency]))
        .catch(error => console.error(error));

        // console.log(data);
        
    }, [currency]);
    return data;
}

export default useCurrencyInfo;