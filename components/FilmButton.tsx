import { Button, Modal, Table, Text } from '@nextui-org/react';
import { useState } from 'react';
import { getFilmDetails } from '../utilities/gateway';

type Props = {
  film: string;
};

const FilmButton = ({ film }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filmDetails, setFilmDetails] = useState(null);

  let label = '';

  const openModal = (film: string) => {
    getFilmDetails(film).then((filmData) => {
      setFilmDetails(filmData);
      setModalOpen(true);
    });
  };

  switch (film) {
    case 'https://swapi.dev/api/films/4/':
      label = 'I';
      break;
    case 'https://swapi.dev/api/films/5/':
      label = 'II';
      break;
    case 'https://swapi.dev/api/films/6/':
      label = 'III';
      break;
    case 'https://swapi.dev/api/films/1/':
      label = 'IV';
      break;
    case 'https://swapi.dev/api/films/2/':
      label = 'V';
      break;
    case 'https://swapi.dev/api/films/3/':
      label = 'VI';
      break;
    case 'https://swapi.dev/api/films/7/':
      label = 'VII';
      break;
    default:
      break;
  }

  return (
    <>
      <Button auto bordered color='primary' onClick={() => openModal(film)}>
        {label}
      </Button>
      <Modal
        scroll
        closeButton
        aria-labelledby='modal-title'
        width='90%'
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Modal.Header>
          <Text id='modal-title' h2 size={18} color='primary'>
            {filmDetails?.title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text color='primary' blockquote>
            {filmDetails?.opening_crawl}
          </Text>
          <Table>
            <Table.Header>
              <Table.Column>Attribute</Table.Column>
              <Table.Column>Value</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key='1'>
                <Table.Cell>Episode: </Table.Cell>
                <Table.Cell>{filmDetails?.episode_id}</Table.Cell>
              </Table.Row>
              <Table.Row key='2'>
                <Table.Cell>Director: </Table.Cell>
                <Table.Cell>{filmDetails?.director}</Table.Cell>
              </Table.Row>
              <Table.Row key='3'>
                <Table.Cell>Producer: </Table.Cell>
                <Table.Cell>{filmDetails?.producer}</Table.Cell>
              </Table.Row>
              <Table.Row key='4'>
                <Table.Cell>Release Date </Table.Cell>
                <Table.Cell>{filmDetails?.release_date}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilmButton;
