import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Results from './Results';

describe('Results Component', () => {
  test('should create', () => {
    expect(Results).toBeTruthy();
  });

  test('should render', () => {
    const { asFragment } = render(
      <Results
        people={[
          {
            name: 'string',
            height: 'string',
            mass: 'string',
            hair_color: 'string',
            skin_color: 'string',
            eye_color: 'string',
            birth_year: 'string',
            gender: 'male',
            homeworld: 'string',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: 'string',
            edited: 'string',
            url: 'string',
          },
        ]}
      ></Results>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
