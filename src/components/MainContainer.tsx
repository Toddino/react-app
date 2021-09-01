import { Container } from '@material-ui/core';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { themeState } from '../redux/reducers/themeSlice';
import NavigationBar from './NavigationBar';
import slime from '../resources/img/slime.png'

interface IProps {
    children: any
}

export default function MainContainer(props: IProps) {
    const isDark = useAppSelector(themeState).isDark
    


    return (
        <>
            <React.Suspense fallback={<></>}>
                {/* { isDark && <LightTheme />}
                { !isDark && <DarkTheme /> } */}
            </React.Suspense>
            <Container maxWidth="md" style={{ padding: 0 }}>
                <img src={slime} style={{ width: "300px" }} />
                <NavigationBar>
                    {props.children}
                </NavigationBar>
            </Container>
        </>
    )
}