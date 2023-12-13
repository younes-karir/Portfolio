import styled from "styled-components";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

import { MdOutlineLanguage } from "react-icons/md";

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.25rem;
  color: ${(props) => props.$selected ? props.theme.colors.primary : props.theme.colors.text};
  opacity: ${(props) => props.$selected ? 1 : .8};
  
  display: flex;
  align-items: center;
  gap: 10px;
`;

// export const Check = styled(MdCheckBoxOutlineBlank)`
//   font-size: 1.4rem;
//   color:${props => props.theme.colors.text};
// `;
// export const Checked = styled(MdCheckBox)`
//   font-size: 1.4rem;
// `;


export const LNIcon = styled(MdOutlineLanguage)`
  font-size: 1.3rem;
  color:inherit;

`;