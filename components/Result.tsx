import { Button, Card, Collapse, Modal, Table, Text } from "@nextui-org/react"
import FilmButton from "./FilmButton"
import { Person } from "../interfaces"
import { getStarshipDetails } from '../utilities/gateway'
import { useState } from "react"

type Props = {
    data: Person
}

const Result = ({ data }: Props) => {

    const [starshipDetails, setStarshipDetails] = useState([]);
    const [modalDetails, setModalDetails] = useState(null);

    const resultOpened = () => {
        getStarshipDetails(data.starships).then(shipDetails => {
            setStarshipDetails(shipDetails);
        })
    }

  return (
    <Collapse title={ data.name } key={ data.name } onClick={() => resultOpened()}>
        <div className="result">
            <Card>
                <Card.Header>
                    <Text h3>About Me</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                    <Table>
                        <Table.Header>
                            <Table.Column>Attribute</Table.Column>
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
                            <Table.Row key='5'>
                                <Table.Cell>Species: </Table.Cell>
                                <Table.Cell>{ }</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <Text h3>Films Appeared In</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                    <div className='film-buttons'>
                        { 
                            data.films.map((film, index) => {
                                return (
                                    <FilmButton film={film} key={ index }></FilmButton>
                                );
                            }) 
                        }
                    </div>
                </Card.Body>
            </Card>
            {
                data.starships.length > 0 && 
                <Card>
                    <Card.Header>
                        <Text h3>Starships Flown</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body>
                        <ul>
                            {
                                starshipDetails.map((details) => {
                                    return <li>
                                        <Button light color="primary" auto onClick={() => setModalDetails(details)}>
                                            { details.name }
                                        </Button>
                                    </li>
                                })
                            }
                        </ul>
                    </Card.Body>
                </Card>
            }
        </div>
        <Modal
                scroll
                closeButton
                aria-labelledby='modal-title'
                width='90%'
                open={modalDetails !== null}
                onClose={() => setModalDetails(null)}
            >
                <Modal.Header>
                    <Text id='modal-title' h2 size={18} color='primary'>{ modalDetails?.name }</Text>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <Table.Header>
                            <Table.Column>Attribute</Table.Column>
                            <Table.Column>Value</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row key='1'>
                                <Table.Cell>Model: </Table.Cell>
                                <Table.Cell>{ modalDetails?.model }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='2'>
                                <Table.Cell>Manufacturer: </Table.Cell>
                                <Table.Cell>{ modalDetails?.manufacturer }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='3'>
                                <Table.Cell>Cost in Credits: </Table.Cell>
                                <Table.Cell>{ modalDetails?.cost_in_credits }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='4'>
                                <Table.Cell>Length: </Table.Cell>
                                <Table.Cell>{ modalDetails?.length }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='5'>
                                <Table.Cell>Maximum Atmosphering Speed: </Table.Cell>
                                <Table.Cell>{ modalDetails?.max_atmosphering_speed }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='6'>
                                <Table.Cell>Crew: </Table.Cell>
                                <Table.Cell>{ modalDetails?.crew }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='7'>
                                <Table.Cell>Passengers: </Table.Cell>
                                <Table.Cell>{ modalDetails?.passengers }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='8'>
                                <Table.Cell>Cargo Capacity: </Table.Cell>
                                <Table.Cell>{ modalDetails?.cargo_capacity }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='9'>
                                <Table.Cell>Consumables: </Table.Cell>
                                <Table.Cell>{ modalDetails?.consumables }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='10'>
                                <Table.Cell>Hyperdrive Rating: </Table.Cell>
                                <Table.Cell>{ modalDetails?.hyperdrive_rating }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='11'>
                                <Table.Cell>MGLT: </Table.Cell>
                                <Table.Cell>{ modalDetails?.MGLT }</Table.Cell>
                            </Table.Row>
                            <Table.Row key='12'>
                                <Table.Cell>Starship Class: </Table.Cell>
                                <Table.Cell>{ modalDetails?.starship_class }</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Modal.Body>
            </Modal>
    </Collapse>
  )
}

export default Result