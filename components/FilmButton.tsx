import { Button } from "@nextui-org/react"
import { Film } from "../interfaces"

type Props = {
    film: string
}

const FilmButton = ({ film }: Props) => {

    let label = '';

    switch ( film ) {
        case 'https://swapi.dev/api/films/4/':
            label = 'I'
            break;
        case 'https://swapi.dev/api/films/5/':
            label = 'II'
            break;
        case 'https://swapi.dev/api/films/6/':
            label = 'III'
            break;
        case 'https://swapi.dev/api/films/1/':
            label = 'IV'
            break;
        case 'https://swapi.dev/api/films/2/':
            label = 'V'
            break;
        case 'https://swapi.dev/api/films/3/':
            label = 'VI'
            break;
        default:
            break;
    }

    return (
        <Button auto bordered color='primary'>
            { label }
        </Button>
    )
}

export default FilmButton