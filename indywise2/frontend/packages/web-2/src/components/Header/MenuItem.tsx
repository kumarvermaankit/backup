import * as React from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import arrow from '../../assets/downArrow.svg';

export interface IMenuItem {
  text: string;
  isDropDown?: boolean;
  color?: string;
  style?: any;
  headerColor?: string | undefined;
}

const MenuItem: React.FC<IMenuItem> = (props) => {
  const style = props.style || {};
  const color = props.color || '#0c3559';

  const [arrowIconColor, setarrowIconColor] = React.useState(true);
  const [isDownIcon, setIcon] = React.useState(true);

  const toggleIcon = () => {
    setIcon((prv) => !prv);
  };

  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 30) setarrowIconColor(false);
    if (window.scrollY < 30) setarrowIconColor(true);
    if (
      props.headerColor === '#ffffff' ||
      props.headerColor === '#F8FBFD' ||
      props.headerColor === '#FAEFD9' ||
      props.headerColor === undefined
    ) {
      setarrowIconColor(false);
    }
  }, [props.headerColor]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (window.scrollY > 30) setarrowIconColor(false);
    if (window.scrollY < 30) setarrowIconColor(true);
    if (
      props.headerColor === '#ffffff' ||
      props.headerColor === '#F8FBFD' ||
      props.headerColor === '#FAEFD9' ||
      props.headerColor === undefined
    ) {
      setarrowIconColor(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, arrowIconColor, props.headerColor]);

  return (
    <MenuList onClick={toggleIcon}>
      <Text style={style} color={color}>
        {props.text}
        {props.isDropDown && (
          <img
            className={arrowIconColor ? '' : 'active'}
            src={arrow}
            alt="Arrow"
            style={{ transform: isDownIcon ? '' : 'rotate(180deg)' }}
          />
        )}
      </Text>
    </MenuList>
  );
};

export default MenuItem;

const MenuList = styled.span`
  display: flex;
  justify-content: space-between;
  img {
    fill: #fff;
    filter: invert(1) saturate(0);
    &.active {
      filter: none;
    }
  }

  @media (max-width: 1200px) {
    img {
      filter: none;
    }
  }

  @media (max-width: 1200px) {
    color: #262626 !important;
    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
  @media (max-width: 414px) {
    img {
      margin: 0;
    }
  }
  @media (max-width: 1200px) and (min-width: 415px) {
    img {
      margin: 2px 0;
    }
  }
`;
