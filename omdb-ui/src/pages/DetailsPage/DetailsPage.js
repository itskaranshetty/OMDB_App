import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card/Card';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';

import { baseUrl, axiosHeaders } from '../../utils/constants';

export default function DetailsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const params = useParams();
    const imdbID = params.imdbID;
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    const onSubmitSuccess = (res) => {
        // Data validation before setting searchResult
        if (res && res.data && res.data.Search instanceof Array) {
          setSearchResult(res.data.Search);
        }
      }
    
    const onSubmit = (searchTerm) => {
    const uri = `http://localhost:3001/omdb/imdb/${imdbID}`;

    console.log(uri);

    axios.get(uri, axiosHeaders)
        .then(res => onSubmitSuccess(res))
        .catch(err => console.error(err));
    }

    console.log("Hello World");

    return (
      <div>
        {/* <Search value={searchTerm} onChange={setSearchTerm} onSubmit={onSubmit} />
        <br /> */}
        <List elements={searchResult} component={Card} />

        <h3> Wubba Lubba Dub Dub </h3>
        <p> But this is the iMDb ID if it helps : {imdbID}</p>
      </div>
    )
}