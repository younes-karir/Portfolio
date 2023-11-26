import styled from "styled-components";
import {Link} from 'react-scroll';


export const Container = styled.footer`
  height: 5rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;


export const LinksWrapper = styled.div``;

export const InternalLinks = styled.div``;
export const SLink = styled(Link)`
  height: fit-content;
  width: fit-content;
  line-height: 1.88rem;
  font-size: 1.05rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }

`;
export const SocialLinks = styled.div``;
export const SocialLink = styled.a``
export const CopyRightsWrapper = styled.div``;
export const CopyRightsLabel = styled.div``;
export const LogoLabel = styled.div``;