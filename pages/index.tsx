import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Input,
  Loading,
  Spacer,
  Text,
} from '@nextui-org/react';
import { getNewPage, searchPeople } from '../utilities/gateway';
import { Layout, NoResults, Results } from '../components';

export default function IndexPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const newPage = (newPageUrl: string) => {
    setLoading(true);
    getNewPage(newPageUrl).then((data) => {
      setData(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    searchPeople(searchTerm).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <Layout title='Corinth Code Challenge'>
      <Text
        h1
        color='primary'
        weight='bold'
        css={{
          fontFamily: "'Star Jedi', 'Roboto', sans-serif",
          textAlign: 'center',
          padding: '4rem',
        }}
      >
        Corinth
      </Text>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Input
          className='search-bar'
          rounded
          bordered
          clearable
          width='90%'
          color='primary'
          label='Search for a Character'
          placeholder='Search Your Feelings'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></Input>
      </div>
      <div className='results'>
        {data?.count > 0 && <Results people={data.results}></Results>}
        {data?.count === 0 && <NoResults />}
      </div>
      <Container
        fluid
        gap={0}
        justify='space-between'
        css={{ d: 'flex', padding: '1rem' }}
      >
        <Button
          disabled={!data?.previous || loading}
          auto
          bordered
          color='primary'
          onPress={() => newPage(data?.previous)}
        >
          {'<'}
        </Button>
        <Spacer x={2} />
        {loading ? <Loading type='points-opacity' color='currentColor' /> : ''}
        <Spacer x={2} />
        <Button
          disabled={!data?.next || loading}
          auto
          bordered
          color='primary'
          onPress={() => newPage(data?.next)}
        >
          {'>'}
        </Button>
      </Container>
    </Layout>
  );
}
