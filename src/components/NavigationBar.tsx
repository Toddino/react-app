import { Navbar, Nav, Dropdown, Icon } from 'rsuite'

export default function NavigationBar() {
    return (
        <Navbar>
            <Navbar.Header>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                    Nenei
                </Nav.Item>
                <Nav.Item eventKey="2">Neneinei</Nav.Item>
                <Nav.Item eventKey="3">Neinei!</Nav.Item>
                <Dropdown title="Ayaw">
                    <Dropdown.Item eventKey="4">Perchè</Dropdown.Item>
                    <Dropdown.Item eventKey="5">No</Dropdown.Item>
                    <Dropdown.Item eventKey="6">?</Dropdown.Item>
                </Dropdown>
                </Nav>
                <Nav pullRight>
                <Nav.Item icon={<Icon icon="cog" />}>Nono</Nav.Item>
                </Nav>
            </Navbar.Body>
    </Navbar>
    )
}