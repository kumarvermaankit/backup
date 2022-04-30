import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { useDesktop } from '../hooks/useDesktop';

export interface IEditFieldProps {
  name: string;
  value: string;
  type: string;
  htmlName: string;
  onClick?: (e?: any) => any;
}

const EditField: React.FC<IEditFieldProps> = (props) => {
  const isDesktop = useDesktop(1200);

  return (
    <Container>
      {isDesktop ? (
        <>
          <LeftContainer>
            <Label htmlFor={props.htmlName}>{props.name}</Label>
          </LeftContainer>
          <RightContainer>
            <Input
              type={props.type}
              name={props.htmlName}
              value={props.value}
              readOnly={true}
            />
          </RightContainer>
          <IconContainer onClick={props.onClick}>
            <Icon icon="editPen" size="1.25em" />
          </IconContainer>
        </>
      ) : (
        <>
          <div
            style={{
              width: '95%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Label htmlFor={props.htmlName}>{props.name}</Label>
            <Input
              type={props.type}
              name={props.htmlName}
              value={props.value}
              readOnly={true}
            />
          </div>
          <IconContainer onClick={props.onClick}>
            <Icon icon="editPen" size="1.25em" />
          </IconContainer>
        </>
      )}
    </Container>
  );
};

export default EditField;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
`;

const RightContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 30%;
  display: flex;
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.4em;
  color: #0c3559;
`;

const Input = styled.input`
  width: 90%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.4em;
  color: #0c3559;
  border: none;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

const IconContainer = styled.span`
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    margin: auto 0;
  }
`;
