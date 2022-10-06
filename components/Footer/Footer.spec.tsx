import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  test('should create', () => {
    expect(Footer).toBeTruthy();
  });

  test('should render', () => {
    const { asFragment } = render(<Footer></Footer>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should contain portfolio link', () => {
    const { asFragment } = render(<Footer></Footer>);
    expect(asFragment()).toHaveTextContent('Created by Nate Wolfe');
  });
});
