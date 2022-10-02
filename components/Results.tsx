import * as React from 'react'
import { Card, Collapse } from '@nextui-org/react'
import Result from './Result'
import { People, Person } from '../interfaces'

type Props = {
  people: People
}

const Results = ({ people }: Props) => (
  <Collapse.Group>
    { people.map((person: Person) => {
      return <Collapse title={ person.name }>
        <Result data={ person } />
      </Collapse>
    } )}
  </Collapse.Group>
)

export default Results
