import * as React from 'react';
import styled from 'styled-components';
import { Text, Logo } from '@indywise/uikit';
import DefaultLogo from '../assets/DefaultLogo.svg';
import { Link } from 'react-router-dom';

export interface IFormContainer {
  /**
   * Heading title for the form pages.
   * @example "Application for Job Success Program and 1 Free Session"
   */
  title?: string;

  /**
   * SVG image that will be the background of the form pages.
   */
  bgImage: any;
}

const FormPage: React.FC<IFormContainer> = (props) => {
  const title = props.title || '';
  const bgImage = props.bgImage;

  return (
    <PageContainer>
      <BgImage bgImage={bgImage} />
      <LeftSideContainer>
        <Content>
          <Link to="/">
            <Logo />
          </Link>
          {title && <Text type="h2">{title}</Text>}
        </Content>
      </LeftSideContainer>

      <FormContainer>
        <FormWrapper>
          <LogoContainer>
            <Link to="/">
              <img src={DefaultLogo} alt="Logo" />
            </Link>
          </LogoContainer>
          <Text type="h2" size="1.5rem">
            {title}
          </Text>
          <Line />
          {props.children}
        </FormWrapper>
      </FormContainer>
    </PageContainer>
  );
};

export default FormPage;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1100px) {
    justify-content: space-between;
  }
`;

const BgImage = styled.div<{ bgImage: any }>`
  @media screen and (min-width: 1100px) {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    background-image: url(${(props) => props.bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    -o-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    justify-content: space-between;
  }
`;

const Content = styled.section`
  margin: 3em 2em 0 4em;
  width: 80%;
`;

const LeftSideContainer = styled.aside`
  display: none;

  // Desktop
  @media screen and (min-width: 1100px) {
    display: inline-block;
    width: 50%;

    h2 {
      font-size: 2rem;
      line-height: 1.5em;
      margin-top: 0.75em;
    }

    svg {
      width: 12em;
    }
  }
`;

const FormContainer = styled.div`
  margin: 0 1em;
  height: 100vh;
  overflow-y: auto;

  @media screen and (min-width: 1100px) {
    width: 50%;
    margin: 0;
    background: white;
    box-shadow: 0px 50px 100px rgba(12, 53, 89, 0.3);
    border-radius: 1.25em 0 0 1.25em;
  }
`;

const FormWrapper = styled.main`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2em;

  h2 {
    display: inline-block;
    text-align: center;
    line-height: 1.5em;
  }

  // Desktop
  @media screen and (min-width: 1100px) {
    margin-top: 10vh;
    margin-left: 5.5em;

    h2 {
      display: none;
    }
  }
`;

const Line = styled.span`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #cbcbcb;
  margin: 2em 0;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const LogoContainer = styled.span`
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1em;

  img {
    width: 6.25em;
  }
  svg {
    width: 6.25em;
  }

  // Tablet
  @media screen and (min-width: 575px) {
    margin-top: 6.7em;
    margin-bottom: 2.5em;
    svg {
      width: 10em;
    }
    img {
      width: 10em;
    }
  }

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;
