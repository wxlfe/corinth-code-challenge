import * as React from 'react'
import { Collapse } from '@nextui-org/react'
import Result from './Result'
import { People, Person } from '../interfaces'

type Props = {
  people: People
}

const Results = ({ people }: Props) => (
  <Collapse.Group>
    { people.map((person: Person) => {
      return <Result data={ person } />
    } )}
  </Collapse.Group>
)

export default Results
