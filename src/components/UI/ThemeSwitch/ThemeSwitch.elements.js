import styled from "styled-components";
import {CgDarkMode} from 'react-icons/cg';

export const Container = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    /* opacity: 0.8; */
    position: relative;

`;
export const Toggle = styled(CgDarkMode)`
    font-size: 1.7rem;
    color: ${props => props.theme.colors.text};

    &:hover{
        cursor: pointer;
    }

`;