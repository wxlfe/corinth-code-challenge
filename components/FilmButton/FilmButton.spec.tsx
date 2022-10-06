import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilmButton from './FilmButton';

describe('FilmButton Component', () => {
  test('should create', () => {
    expect(FilmButton).toBeTruthy();
  });

  test('should render', () => {
    const { asFragment } = render(
      <FilmButton film='https://swapi.dev/api/films/1/'></FilmButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
