import React, {useEffect, useState} from 'react'
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
           setDebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }

    }, [term]);


    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };

        search();

    }, [debouncedTerm]);


    // // dangerouslySetInnerHTML  => hacker my inject js in this cript
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });
    ;

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
                <div className="ui celled list">
                    {renderedResults}
                </div>
            </div>
        </div>
    );
};

export default Search;