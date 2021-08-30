import React from 'react';
import { Container } from 'rsuite'
import { useAppSelector } from '../redux/hooks';
import { themeState } from '../redux/reducers/themeSlice';

interface IProps {
    children: any
}

export default function MainContainer(props: IProps) {
    const isDark = useAppSelector(themeState).isDark

    const LightTheme = React.lazy(() => import('./Light'));
    const DarkTheme = React.lazy(() => import('./Dark'));

    return (
        <>
            <React.Suspense fallback={<></>}>
                { isDark && <LightTheme />}
                { !isDark && <DarkTheme /> }
            </React.Suspense>
            <Container style={{ width: "1080px", height: "250px", margin: "0 auto" }}>
                {props.children}
            </Container>
        </>
    )
}