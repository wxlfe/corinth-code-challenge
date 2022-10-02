import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import NoResults from '../components/NoResults';
import { Input } from "@nextui-org/react";
import Results from '../components/Results';


export default function IndexPage() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(searchTerm !== '' ? `https://swapi.dev/api/people/?search=${searchTerm}` : 'https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
  }, [searchTerm])

  return (
    <Layout title="Corinth Code Challenge">
      <h1 className='siteTitle'>Corinth</h1>
      <div className='search-bar-container'>
        <Input className='search-bar' rounded bordered clearable width='90%' color='primary' label='Search for a Character' placeholder='Search Your Feelings' onChange={ (e) => {setSearchTerm(e.target.value)} }></Input>
      </div>
      <div className='results'>
        {
          data?.count > 0 && <Results people={ data.results }></Results>
        }
        {
          data?.count === 0 && <NoResults/>
        }
      </div>
    </Layout>
  )
}