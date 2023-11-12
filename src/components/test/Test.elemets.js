import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    width: ${props => props.width};
    color: ${props => props.theme.colors.primary};
    background-color: ${porps => porps.theme.colors.background};
`;

