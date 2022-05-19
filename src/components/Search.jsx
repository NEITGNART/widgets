import React, {useEffect, useState} from 'react'
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState('');

    console.log('I RUN EVERY RENDER');

    useEffect(
        () => {
            const search = async () => {
                await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                });
            }

            search()

        }, [term]
    )

    return (
        <div>
            Search
            <div className="ui container form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value)
                        }}
                        type="text"/>
                </div>
            </div>
        </div>
    );
};

export default Search;