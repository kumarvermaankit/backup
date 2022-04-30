import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import DefaultAvatar from '../../assets/DefaultAvatar.svg';

interface IUserMenuBtn {
  name?: string;
  avatar?: string | null;
  color?: string;
}

const UserMenuBtn: React.FC<IUserMenuBtn> = (props) => {
  const { name, avatar, color } = props;

  return (
    <Container color={color}>
      <Avatar src={avatar ? avatar : DefaultAvatar} color={color} />
      <Text>{name}</Text>
      <Icon icon="arrow" size="16px" />
    </Container>
  );
};

export default UserMenuBtn;

const Container = styled.button<{ fontSize?: string; color?: string }>`
  background: transparent;
  border: 2px solid ${(props) => props.color || '#0c3559'};
  box-sizing: border-box;
  border-radius: 1.375em;
  display: flex;
  padding: 0 8px 0 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${(props) => props.fontSize || '1rem'};
    color: ${(props) => props.color || '#0c3559'};
    padding: 0;
    margin-left: 0.5em;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    svg {
      stroke: ${(props) => props.color || '#0c3559'};
    }
  }
`;

const Avatar = styled.img<{ color?: string }>`
  height: 32px;
  width: 32px;
  border-radius: 100px;
  box-sizing: border-box;
  object-fit: cover;
  margin: 0 8px 0 0;
  border: 1px solid ${(props) => props.color || '#0c3559'};
`;
