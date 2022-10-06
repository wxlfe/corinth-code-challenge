import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  test('should create', () => {
    expect(Layout).toBeTruthy();
  });

  test('should render', () => {
    const { asFragment } = render(
      <Layout>
        <p>Test</p>
      </Layout>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
