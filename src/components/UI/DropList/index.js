import React, { useState } from "react";
import styled from "styled-components";
import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem } from "./DropList.elements";


const options = ["EN", "FR", "DE"];

export default function DropList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (

      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "EN"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>

  );
}