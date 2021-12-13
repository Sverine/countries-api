import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

    const [data,setData] = useState([]);
    // const [sortedData, setSortedData] = useState([]);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio]= useState('');
    const radios= ['Africa','America',"Asia","Europe","Oceania"];

    useEffect(()=>{
        axios
            .get('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
            .then((res)=>{
                setData(res.data);
            })

        // const sortedCountry = () =>{
        //    const  countryObj = Object.keys(data).map((i)=>data[i])
        //    const sortedArray = countryObj.sort((a,b)=>{
        //        return b.population - a.population;
        //    });
        //    sortedArray.length=rangeValue;
        //    setSortedData(sortedArray);
        // }
        // sortedCountry();
    },[])

    return (
        <div className='countries'>

            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue}
                onChange={(e)=> setRangeValue(e.target.value)}/>
                <ul>
                    {radios.map((radio)=>{
                        return <li key={radio}>
                            <input type="radio" value={radio} id={radio}
                            checked={radio === selectedRadio}
                            onChange={(e)=> setSelectedRadio(e.target.value)}/>
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5 onClick={()=>setSelectedRadio("")}>Annuler la recherche</h5> }
            </div>
            <ul className="countries-list">
                {
                    data
                    .filter((country)=>country.region.includes(selectedRadio))
                    .sort((a,b)=>b.population - a.population)
                    .filter((country,index)=>index<rangeValue)
                    .map((country)=>(
                        <Card key={country.name.common} country={country}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;