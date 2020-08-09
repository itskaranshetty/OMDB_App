import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card/Card';
import List from '../../components/List/List';

import { baseUrl, axiosHeaders } from '../../utils/constants';

export default function DetailsPage() {
    //const [searchTerm, setSearchTerm] = useState('');
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
    
    var url;

    const onSubmit = (imdbID) => {
    const uri = `http://localhost:3001/omdb/imdb/${imdbID}`;

    url = uri;

    axios.get(uri, axiosHeaders)
        .then(res => onSubmitSuccess(res))
        .catch(err => console.error(err));
    }

    return (
      <div>
        {/* <Search value={searchTerm} onChange={setSearchTerm} onSubmit={onSubmit} />
        <br /> */}
        <List elements={searchResult} component={Card} />

        <h3> Wubba Lubba Dub Dub </h3>
        <p> But this is the iMDb ID if it helps : {imdbID}</p>

        <p> I want to fetch info from here: {url} </p>

        {<a href={url}> Click Me </a>}
      </div>
    )
}