import { useState } from 'react';
import { Button, Card, Collapse, Modal, Table, Text } from '@nextui-org/react';
import { Person } from '../../interfaces';
import { getSpeciesDetails, getStarshipDetails } from '../../utilities/gateway';
import FilmButton from '../FilmButton';

type Props = {
  data: Person;
};

const Result = ({ data }: Props) => {
  const [starshipDetails, setStarshipDetails] = useState([]);
  const [starshipModalDetails, setStarshipModalDetails] = useState(null);

  const [speciesDetails, setSpeciesDetails] = useState([]);
  const [speciesModalDetails, setSpeciesModalDetails] = useState(null);

  const resultOpened = () => {
    getStarshipDetails(data.starships).then((shipDetails) => {
      setStarshipDetails(shipDetails);
    });
    getSpeciesDetails(data.species).then((speciesData) => {
      setSpeciesDetails(speciesData);
    });
  };

  return (
    <Collapse title={data.name} key={data.name} onClick={() => resultOpened()}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gridGap: '1rem',
        }}
      >
        <Card>
          <Card.Header>
            <Text h3 aria-label='About Me'>
              About Me
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Table aria-label='About Me Table'>
              <Table.Header>
                <Table.Column>Attribute</Table.Column>
                <Table.Column>Value</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row key='1'>
                  <Table.Cell>Height: </Table.Cell>
                  <Table.Cell>{data.height}</Table.Cell>
                </Table.Row>
                <Table.Row key='2'>
                  <Table.Cell>Mass: </Table.Cell>
                  <Table.Cell>{data.mass}</Table.Cell>
                </Table.Row>
                <Table.Row key='3'>
                  <Table.Cell>Hair Color: </Table.Cell>
                  <Table.Cell>{data.hair_color}</Table.Cell>
                </Table.Row>
                <Table.Row key='4'>
                  <Table.Cell>Birth Year: </Table.Cell>
                  <Table.Cell>{data.birth_year}</Table.Cell>
                </Table.Row>
                {speciesDetails.length > 0 && (
                  <Table.Row key='5'>
                    <Table.Cell>Species: </Table.Cell>
                    <Table.Cell>
                      <ul>
                        {speciesDetails.map((species) => {
                          return (
                            <li>
                              <Button
                                light
                                color='primary'
                                auto
                                onPress={() => setSpeciesModalDetails(species)}
                              >
                                {species.name}
                              </Button>
                            </li>
                          );
                        })}
                      </ul>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Text h3 aria-label='Films Appeared In'>
              Films Appeared In
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
                gridGap: '1rem',
              }}
            >
              {data.films.map((film, index) => {
                return <FilmButton film={film} key={index}></FilmButton>;
              })}
            </div>
          </Card.Body>
        </Card>
        {data.starships.length > 0 && (
          <Card>
            <Card.Header>
              <Text h3 aria-label='Starships Flown'>
                Starships Flown
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <ul>
                {starshipDetails.map((details, index) => {
                  return (
                    <li key={index}>
                      <Button
                        light
                        color='primary'
                        auto
                        onPress={() => setStarshipModalDetails(details)}
                      >
                        {details.name}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Card>
        )}
      </div>
      <Modal
        scroll
        closeButton
        aria-labelledby='modal-title'
        width='90%'
        open={starshipModalDetails !== null}
        onClose={() => setStarshipModalDetails(null)}
      >
        <Modal.Header>
          <Text
            id='modal-title'
            h2
            size={18}
            color='primary'
            css={{ fontFamily: "'Star Jedi', 'Roboto', sans-serif" }}
          >
            {starshipModalDetails?.name}
          </Text>
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
                <Table.Cell>{starshipModalDetails?.model}</Table.Cell>
              </Table.Row>
              <Table.Row key='2'>
                <Table.Cell>Manufacturer: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.manufacturer}</Table.Cell>
              </Table.Row>
              <Table.Row key='3'>
                <Table.Cell>Cost in Credits: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.cost_in_credits}</Table.Cell>
              </Table.Row>
              <Table.Row key='4'>
                <Table.Cell>Length: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.length}</Table.Cell>
              </Table.Row>
              <Table.Row key='5'>
                <Table.Cell>Maximum Atmosphering Speed: </Table.Cell>
                <Table.Cell>
                  {starshipModalDetails?.max_atmosphering_speed}
                </Table.Cell>
              </Table.Row>
              <Table.Row key='6'>
                <Table.Cell>Crew: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.crew}</Table.Cell>
              </Table.Row>
              <Table.Row key='7'>
                <Table.Cell>Passengers: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.passengers}</Table.Cell>
              </Table.Row>
              <Table.Row key='8'>
                <Table.Cell>Cargo Capacity: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.cargo_capacity}</Table.Cell>
              </Table.Row>
              <Table.Row key='9'>
                <Table.Cell>Consumables: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.consumables}</Table.Cell>
              </Table.Row>
              <Table.Row key='10'>
                <Table.Cell>Hyperdrive Rating: </Table.Cell>
                <Table.Cell>
                  {starshipModalDetails?.hyperdrive_rating}
                </Table.Cell>
              </Table.Row>
              <Table.Row key='11'>
                <Table.Cell>MGLT: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.MGLT}</Table.Cell>
              </Table.Row>
              <Table.Row key='12'>
                <Table.Cell>Starship Class: </Table.Cell>
                <Table.Cell>{starshipModalDetails?.starship_class}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Body>
      </Modal>
      <Modal
        scroll
        closeButton
        aria-labelledby='modal-title'
        width='90%'
        open={speciesModalDetails !== null}
        onClose={() => setStarshipModalDetails(null)}
      >
        <Modal.Header>
          <Text
            id='modal-title'
            h2
            size={18}
            color='primary'
            css={{ fontFamily: "'Star Jedi', 'Roboto', sans-serif" }}
          >
            {speciesModalDetails?.name}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <Table.Header>
              <Table.Column>Attribute</Table.Column>
              <Table.Column>Value</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key='1'>
                <Table.Cell>Classification: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.classification}</Table.Cell>
              </Table.Row>
              <Table.Row key='2'>
                <Table.Cell>Designation: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.designation}</Table.Cell>
              </Table.Row>
              <Table.Row key='3'>
                <Table.Cell>Average Height: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.average_height}</Table.Cell>
              </Table.Row>
              <Table.Row key='4'>
                <Table.Cell>Skin Colors: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.skin_colors}</Table.Cell>
              </Table.Row>
              <Table.Row key='5'>
                <Table.Cell>Hair Colors: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.hair_colors}</Table.Cell>
              </Table.Row>
              <Table.Row key='6'>
                <Table.Cell>Eye Colors: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.eye_colors}</Table.Cell>
              </Table.Row>
              <Table.Row key='7'>
                <Table.Cell>Average Lifespan: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.average_lifespan}</Table.Cell>
              </Table.Row>
              <Table.Row key='8'>
                <Table.Cell>Homeworld: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.homeworld}</Table.Cell>
              </Table.Row>
              <Table.Row key='9'>
                <Table.Cell>Language: </Table.Cell>
                <Table.Cell>{speciesModalDetails?.language}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Body>
      </Modal>
    </Collapse>
  );
};

export default Result;
