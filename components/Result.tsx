import { Card, Grid, Table } from "@nextui-org/react"
import FilmButton from "./FilmButton"
import { Person } from "../interfaces"

type Props = {
    data: Person
}

const Result = ({ data }: Props) => {
  return (
    <div className="result">
        <Card>
            <Card.Header>
                <h3>
                    About Me
                </h3>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
                <Table>
                    <Table.Header>
                        <Table.Column>Key</Table.Column>
                        <Table.Column>Value</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key='1'>
                            <Table.Cell>Height: </Table.Cell>
                            <Table.Cell>{ data.height }</Table.Cell>
                        </Table.Row>
                        <Table.Row key='2'>
                            <Table.Cell>Mass: </Table.Cell>
                            <Table.Cell>{ data.mass }</Table.Cell>
                        </Table.Row>
                        <Table.Row key='3'>
                            <Table.Cell>Hair Color: </Table.Cell>
                            <Table.Cell>{ data.hair_color }</Table.Cell>
                        </Table.Row>
                        <Table.Row key='4'>
                            <Table.Cell>Birth Year: </Table.Cell>
                            <Table.Cell>{ data.birth_year }</Table.Cell>
                        </Table.Row>
                        <Table.Row key='4'>
                            <Table.Cell>Species: </Table.Cell>
                            <Table.Cell>{ data.species }</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                <h3>
                    Films Appeared In
                </h3>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
                <Grid.Container gap={2} justify='center'>
                    { 
                        data.films.map(film => {
                            return (
                                <Grid xs={2}>
                                    <FilmButton film={film}></FilmButton>
                                </Grid>
                            );
                        }) 
                    }
                </Grid.Container>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                <h3>
                    Starships Flown
                </h3>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
                <ul>
                    { 
                        data.starships.map(starship => {
                            return (<li>{starship}</li>);
                        }) 
                    }
                </ul>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Result