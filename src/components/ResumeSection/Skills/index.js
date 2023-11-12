import {
  Container,
  PorsLabel,
  PorsWrapper,
  Row,
  Title,
} from "./Skill.elements";

const Skill = (props) => {
  const value = props.item.pers+ '%' ;
  console.log(value);
  return (
    <Container>
      <Title>{props.item.title}</Title>
      <PorsWrapper $value = {value}>
        <PorsLabel $value = {value}>
        {value} 
          <Row />
        </PorsLabel>
      </PorsWrapper>
    </Container>
  );
};

export default Skill;
