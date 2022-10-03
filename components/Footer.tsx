import { Container, Dropdown, Link, Spacer, Text } from "@nextui-org/react"

const Footer = () => {
  return (
    <footer>
        <hr />
        <Container fluid gap={0} justify='space-between' css={{ d: 'flex', padding: '1rem' }}>
            <Link href='https://wxlfe.dev' color='primary'>
                <Text h3 color='primary'>Created by Nate Wolfe</Text>
            </Link>
            <Spacer x={2}/>
            <Dropdown>
                <Dropdown.Button bordered>Language</Dropdown.Button>
                <Dropdown.Menu variant="shadow">
                    <Dropdown.Item key='Galactic Standard'>
                        <Link href='/' color='primary'>
                            Galactic Standard
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key='Wookiee'>
                        <Link href='/wookiee' color='primary'>
                            Wookiee
                        </Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </footer>
  )
}

export default Footer