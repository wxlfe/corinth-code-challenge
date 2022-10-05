import * as React from 'react';
import { Collapse } from '@nextui-org/react';
import Result from '../Result';
import { Person } from '../../interfaces';

type Props = {
  people: Person[];
};

const Results = ({ people }: Props) => (
  <Collapse.Group>
    {people.map((person: Person, index: number) => {
      return <Result data={person} key={index} />;
    })}
  </Collapse.Group>
);

export default Results;
