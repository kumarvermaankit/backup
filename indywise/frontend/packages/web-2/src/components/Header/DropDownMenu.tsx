import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import MenuItem from './MenuItem';

export interface IDropDownMenuItem {
  title: string;
  path: string;
  // So we use `<a>` to open links in other tab to outside our website (eg: google forms)
  isExternal?: boolean;
  // So we don't use `<Link>` or `<a>` for signout btn
  isSignoutBtn?: boolean;
  new?: Boolean;
}

export interface IDropDownMenu {
  Items: IDropDownMenuItem[];
  width?: string;
  height?: string;
  alignRight?: boolean;
}

const DropDownMenu: React.FC<IDropDownMenu> = (props) => {
  const { signout } = useAuth();
  const [isMenuHidden, setIsMenuHidden] = React.useState(false);

  const handleClick = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <>
      <Container
        hidden={isMenuHidden}
        width={props.width}
        height={props.height}
        alignRight={props.alignRight}
      >
        {props.Items.map((item, index) => {
          return (
            <i key={index}>
              {item.isExternal ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleClick}
                >
                  <MenuItem text={item.title} style={{ marginTop: '1em' }} />
                </a>
              ) : item.isSignoutBtn ? (
                <span onClick={signout}>
                  <MenuItem text={item.title} style={{ marginTop: '1em' }} />
                </span>
              ) : (
                <Link to={item.path} onClick={handleClick}>
                  <MenuItem text={item.title} style={{ marginTop: '1em' }} />
                  {item.new && <New>New</New>}
                </Link>
              )}
            </i>
          );
        })}
      </Container>
    </>
  );
};

export default DropDownMenu;

const Container = styled.ul<{
  hidden: boolean;
  width?: string;
  height?: string;
  alignRight?: boolean;
}>`
  display: ${(props) => (!props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  align-items: flex-start !important;
  width: ${(props) => props.width || '10em'} !important;
  // Below line is for fixing header dropdown issue in safari
  // TODO: to find a better solution with css prefix for safari
  min-height: 60% !important;
  height: ${(props) => props.height || 'fit-content'} !important;
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(12, 53, 89, 0.2);
  border-radius: 10px;
  position: absolute;
  font-size: 1rem;
  top: 3.75em;
  right: ${(props) => props.alignRight && '0'};
  padding-bottom: 1em !important;
  z-index: 1100;

  i {
    margin-left: 1em !important;
    border-bottom: none !important;
    width: calc(100% - 1em);

    a {
      width: 100%;
      border-bottom: none !important;
      text-decoration: none;

      p {
        font-weight: normal !important;
      }
    }
  }
`;

const New = styled.span`
  margin-top: 1em;
  margin-left: 5px;
  background: #0c3559;
  font-family: 'Roboto';
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
  font-weight: bold;
  font-style: normal;
`;
