import { Container, Grid, Header, Icon, Row, Col } from 'rsuite'
import { NavLink } from 'react-router-dom'
import NavbarInstance from '../components/NavigationBar'

interface IProps {
    page?: boolean
}

export function Error404(props: IProps) {
    const getContent = () => {
        return <Row className="show-grid">
            <Col xs={12}>
                <div className="octagonWrap">
                    <div className="octagon">
                        <Icon icon="exclamation" style={{ color: "white", transform: "rotate(-45deg)", fontSize: "15rem"}} />
                    </div>
                </div>
            </Col>
            <Col xs={12}>
                <div><h1>Errore <span style={{color: "#d62915"}}>404</span></h1></div>
                <div><h4>Pagina non trovata!</h4></div><br />
                <NavLink className="rs-btn rs-btn-primary" to={`/`}>Home</NavLink>
            </Col>
        </Row>
    }
    if(props.page) {
        return <Container style={{ minHeight: "calc(100vh - 56px)", display: "block", width: "700px", margin: "0 auto" }}>
        <Grid fluid style={{ marginTop: "9rem" }}>
            {getContent()}
        </Grid>
    </Container>
    }
    return (
        <Container>
            <Header>
                <NavbarInstance />
            </Header>
            <Container style={{ minHeight: "calc(100vh - 56px)", display: "block", width: "700px", margin: "0 auto" }}>
                <Grid fluid style={{ marginTop: "9rem" }}>
                    {getContent()}
                </Grid>
            </Container>
        </Container>
    );
  }