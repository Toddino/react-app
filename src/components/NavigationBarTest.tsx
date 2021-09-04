import React, { Component } from 'react';
import { Container, Icon, Image, Menu, Sidebar, Dropdown, Segment, Header, Grid } from "semantic-ui-react";
import {ReactComponent as ReactLogo} from '../resources/img/test.svg'
import { useState } from 'react';
import { useEffect } from 'react';
import AlphaIcon from '../resources/img/logo-256.png'
import { Media, MediaContextProvider, mediaStyles } from './Media';

const NavBarMobile = (props: any) => {
    const {
      children,
      leftItems,
      onPusherClick,
      show,
      onToggle,
      rightItems,
      visible
    } = props;
  
    return (
        <Sidebar.Pushable style={{ display: "inline" }}>
            <Menu inverted style={show ? { position: "sticky", top: 0, marginBottom: 0 } : {}} fixed={show ? undefined : "bottom"} fluid>
                <Menu.Item>
                <Image size="mini" src={AlphaIcon} />
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item onClick={onToggle}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Sidebar 
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={visible}
                style={{ position: "fixed", top: 0, width: "100%" }}
                >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
                <Menu.Item onClick={onToggle} style={{ position: "absolute", width: "100%", bottom: 0, borderTop: "1px solid rgba(255,255,255,.08)" }}>
                    <Icon name='close' />
                </Menu.Item>
            </Sidebar>
            {children}
        </Sidebar.Pushable>
    );
};

const NavBarDesktop = (props: any) => {
    const { leftItems, rightItems } = props;

    var scrollAndSpeed = (props.yAxis);

    // console.log(scrollAndSpeed, 100 - Math.min(Math.max(scrollAndSpeed, 30), 90) + "%")
    console.log(100 - Math.min(Math.max(scrollAndSpeed, 75), 100))
    var width = 100 - Math.min(Math.max(scrollAndSpeed, 75), 100) === 0 ? "100%" : (100 - Math.min(Math.max(scrollAndSpeed, 75), 100) + "%")
    console.log(
        width
    )

    return (
        <Grid style={{ position: "sticky", top: 0 }} verticalAlign="bottom">
            <Grid.Row style={{ padding: 0 }}>
                <Grid.Column style={{ width: 100 - Math.min(Math.max(scrollAndSpeed, 75), 90) + "%", 
                                      height: 100 - Math.min(Math.max(scrollAndSpeed, 75), 90) + "%",
                                      backgroundColor: "red" }}>
                    {/* <ReactLogo className="nav-logo" style={{ width: 100 - Math.min(Math.max(scrollAndSpeed, 30), 90) + "%" }} /> */}
                    <span>
                        Left
                    </span>
                </Grid.Column>
                <Grid.Column style={{ width: Math.min(Math.max(scrollAndSpeed, 75), 90) + "%", backgroundColor: "blue" }}>
                    Right
                </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row style={{ padding: 0 }}>
                <Grid.Column style={{ width: 100 - Math.min(Math.max(scrollAndSpeed, 75), 90) + "%" }}>
                    <ReactLogo className="nav-logo" />
                </Grid.Column>
                <Grid.Column style={{ width: Math.min(Math.max(scrollAndSpeed, 75), 90) + "%" }}>
                    <Menu>
                        {leftItems.map((item: any) => (
                        <Menu.Item {...item} />
                        ))}
                        <Dropdown simple text='Dropdown' pointing className='item'>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Header Item</Dropdown.Header>
                                <Dropdown.Item>
                                    <i className='dropdown icon' />
                                    <span className='text'>Submenu</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Menu position="right">
                        {rightItems.map((item: any) => (
                            <Menu.Item {...item} />
                        ))}
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
            </Grid.Row> */}
        </Grid>
    );
  };
  
const NavBarChildren = (props: any) => (
<Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

function NavBar(props: any) {
    const [visible, setVisible] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(true)
    const [yAxis, setYAxis] = useState<number>(0)

    const controlNav = () => {
        setYAxis(window.scrollY)
        if(window.scrollY > 232) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNav)
        return () => {
            window.removeEventListener('scroll', controlNav)
        }
    }, [])
  
    const handlePusher = () => {
      if (visible) setVisible(false)
    };
  
    const handleToggle = () => setVisible(!visible);

    const { children, leftItems, rightItems } = props;
  
      return (
        <div>
          <Media at="mobile">
            <NavBarMobile
              leftItems={leftItems}
              onPusherClick={handlePusher}
              onToggle={handleToggle}
              rightItems={rightItems}
              visible={visible}
              show={show}
            >
              <NavBarChildren>{children}</NavBarChildren>
            </NavBarMobile>
          </Media>
  
          <Media greaterThan="mobile">
            <NavBarDesktop leftItems={leftItems} rightItems={rightItems} show={show} yAxis={yAxis} />
            <NavBarChildren>{children}</NavBarChildren>
          </Media>
        </div>
      );
}

const leftItems = [
    { as: "a", content: "Home", key: "home" },
    { as: "a", content: "Users", key: "users" }
  ];
  const rightItems = [
    { as: "a", content: "Placeholder", key: "login" },
    { as: "a", content: "Placeholder", key: "register" }
  ];

export default function NavigationBar(props: any) {
    return (
        <>
            <style>{mediaStyles}</style>

            <MediaContextProvider>
                <NavBar leftItems={leftItems} rightItems={rightItems}>
                    {props.children}
                </NavBar>
            </MediaContextProvider>
        </>
    )
}