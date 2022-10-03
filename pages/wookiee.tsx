import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import NoResults from '../components/NoResults';
import { Button, Container, Input, Spacer } from "@nextui-org/react";
import Results from '../components/Results';


export default function WookieePage() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);

  const newPage = (newPageUrl: string) => {
    fetch(newPageUrl).then((res) => res.json()).then((data) => { setData(data) });
  }

  useEffect(() => {
    fetch(searchTerm !== '' ? `https://swapi.dev/api/people/?search=${searchTerm}?format=wookiee` : 'https://swapi.dev/api/people?format=wookiee')
      .then((res) => {
        return res.text().then((text) => {
          text = text.replace(/whhuanan/g, '"whhuanan"');
          text = text.replaceAll(/rcwochuanaoc/g, '"results"');
          text = text.replaceAll(/oaoohuwhao/g, '"count"');
          return JSON.parse(text);
        })
      })
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
      <Container fluid gap={0} justify='space-between' css={{ d: 'flex', padding: '1rem' }}>
        <Button disabled={!data?.previous} auto bordered color='primary' onClick={ () => newPage(data?.previous) }>{'<'}</Button>
        <Spacer x={2}/>
        <Button disabled={!data?.next} auto bordered color='primary' onClick={ () => newPage(data?.next) }>{'>'}</Button>
      </Container>
    </Layout>
  )
}