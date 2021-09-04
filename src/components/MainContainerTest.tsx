import { Container } from '@material-ui/core';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { themeState } from '../redux/reducers/themeSlice';
import NavigationBarTest from './NavigationBarTest';
import AlphaIcon from '../resources/img/logo-256.svg'
import {ReactComponent as ReactLogo} from '../resources/img/test.svg'
import { Grid, Header, Segment, Item, ItemImage, Icon } from 'semantic-ui-react';
import { Media, MediaContextProvider, mediaStyles } from './Media';

interface IProps {
    children: any
}

const HeaderTitle = (props: any) => {
    return (
        <>
            <Media at="mobile">
                <Container style={{ padding: 0 }}>
                    <NavigationBarTest>
                        {props.children}
                    </NavigationBarTest>
                </Container>
                {/* <Container>
                    <Grid>
                        <Grid.Row stretched>
                            <Grid.Column width={8}>
                                <img src={AlphaIcon} />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <div className="logo-title">
                                    <span className="alpha-assistenza">Alpha Assistenza</span>
                                </div>
                                <div className="logo-subtitle">
                                    CAF - Patronato | Assistenza Legale
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div className="logo-end"></div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <NavigationBar>
                        {props.children}
                    </NavigationBar>
                </Container> */}
            </Media>
            <Media greaterThan="mobile">
                <Container maxWidth="md" style={{ padding: 0 }}>
                    <NavigationBarTest>
                        {props.children}
                    </NavigationBarTest>
                </Container>
            </Media>
        </>
    )
}

const Footer = (props: any) => {
    return(
        <>
            <Media at="mobile">
                <Container className="footer" style={{ padding: 0, color: "red" }} >
                    <Grid>
                        <Grid.Row stretched>
                            <Grid.Column width={8}>
                                <Header as='h4' className="footer-icon">
                                    <Icon.Group size='large'>
                                        <Icon name='phone' />
                                    </Icon.Group>
                                    <a href="https://www.facebook.com/alphaassistenza" target="_blank" className="footer-link underline">
                                        +390289617434
                                    </a>
                                </Header>
                                <Header as='h4' className="footer-icon">
                                    <Icon.Group size='large'>
                                        <Icon name='map marker alternate' />
                                    </Icon.Group>
                                    <a href="https://goo.gl/maps/zuKnfDzKceTiU8xt5" target="_blank" className="footer-link underline">
                                        Viale Giovanni da Cermenate, 43, 20141 Milano MI
                                    </a>
                                </Header>
                                <Header as='h4' className="footer-icon">
                                    <Icon.Group size='large'>
                                        <Icon name='facebook official' />
                                    </Icon.Group>
                                    <a href="https://www.facebook.com/alphaassistenza" target="_blank" className="footer-link underline">
                                        Pagina Facebook
                                    </a>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                RIGHT
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Container className="footer-bottom">
                        About us | Contacts | About us | Contacts
                    </Container>
                </Container>
            </Media>
            <Media greaterThan="mobile">
                <Container className="footer">
                    <Grid>
                        <Grid.Row stretched>
                            <Grid.Column width={8}>
                                <Header as='h4' className="footer-icon">
                                    <Icon.Group size='large'>
                                        <Icon name='phone' />
                                    </Icon.Group>
                                    <a href="https://www.facebook.com/alphaassistenza" target="_blank" className="footer-link underline">
                                        +390289617434
                                    </a>
                                </Header>
                                <Header as='h4' className="footer-icon">
                                    <Icon.Group size='large'>
                                        <Icon name='map marker alternate' />
                                    </Icon.Group>
                                    <a href="https://goo.gl/maps/zuKnfDzKceTiU8xt5" target="_blank" className="footer-link underline">
                                        Viale Giovanni da Cermenate, 43, 20141 Milano MI
                                    </a>
                                </Header>
                                <Header as='h4' className="footer-icon">
                                    <Icon.Group size='large'>
                                        <Icon name='facebook official' />
                                    </Icon.Group>
                                    <a href="https://www.facebook.com/alphaassistenza" target="_blank" className="footer-link underline">
                                        Pagina Facebook
                                    </a>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                RIGHT
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Container className="footer-bottom">
                        About us | Contacts | About us | Contacts
                    </Container>
                </Container>
            </Media>
        </>
    )
}

export default function MainContainer(props: IProps) {
    return (
        <>
            <style>{mediaStyles}</style>

            <MediaContextProvider>
                <HeaderTitle>
                    {props.children}
                    <Footer />
                </HeaderTitle>
            </MediaContextProvider>
        </>
    )
}