import { Container, Dropdown, Link, Spacer, Text } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer>
      <hr />
      <Container
        fluid
        gap={0}
        justify='space-around'
        css={{ d: 'flex', padding: '1rem' }}
      >
        <Link href='https://wxlfe.dev' color='primary'>
          <Text h3 color='primary'>
            Created by Nate Wolfe
          </Text>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
