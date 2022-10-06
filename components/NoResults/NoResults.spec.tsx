import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoResults from './NoResults';

describe('No Results Component', () => {
  test('should create', () => {
    expect(NoResults).toBeTruthy();
  });

  test('should render', () => {
    const { asFragment } = render(<NoResults />);
    expect(asFragment()).toMatchSnapshot();
  });
});
