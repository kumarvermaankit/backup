import * as React from 'react';
import styled from 'styled-components';
import { Logo, Text, Icon } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer: React.FC<{ color?: any }> = ({ color }) => {
  return (
    <FooterWrapper color={color}>
      <TopRow>
        <Link to="/">
          <LogoWrapper>
            <Logo type="footer" />
          </LogoWrapper>
        </Link>
        <SocialMedia />
      </TopRow>
      <BottomRow>
        <BottomSocialMedia />
        <FooterColumn1 />
        <FooterColumn3 />
        <FooterColumn4 />
        <FooterColumn2 />
        <FooterColumn5 />
      </BottomRow>
      <CopyRight>
        <Line />
        <CopyRightText>
          <div style={{ display: 'flex' }}>
            <Text color="#FFFFFF">
              <span>Copyright</span>{' '}
            </Text>
            <Icon icon="copyright" size="16px" />
            <Text color="#FFFFFF">2020 - 2021</Text>
          </div>
          <Text color="#FFFFFF">
            IndyWise. <span>All Rights Reserved</span>
          </Text>
        </CopyRightText>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaWrapper>
      <Text type="title" bold size="2vw">
        Follow Us
      </Text>
      <SocialMediaIconsWrapper>
        <div>
          <a
            href="https://www.linkedin.com/company/indywise/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="linkedinWithCircle" size="3rem" />
          </a>
          <a
            href="https://www.facebook.com/IndyWiser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="facebookWithCircle" size="3rem" />
          </a>
          <a
            href="https://twitter.com/indywiser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="twitter" size="3rem" />
          </a>
          <a
            href="https://www.instagram.com/indywiser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="instagram" size="3rem" />
          </a>
          <a
            href="https://indywise.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="medium" size="3rem" />
          </a>
        </div>
      </SocialMediaIconsWrapper>
    </SocialMediaWrapper>
  );
};

const BottomSocialMedia: React.FC = () => {
  return (
    <BottomSocialMediaWrapper>
      <Text type="title" bold size="2vw">
        Follow Us
      </Text>
      <BottomSocialMediaIconsWrapper>
        <div>
          <a
            href="https://www.linkedin.com/company/indywise/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="linkedinWithCircle" size="3rem" />
          </a>
          <a
            href="https://www.facebook.com/IndyWiser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="facebookWithCircle" size="3rem" />
          </a>
          <a
            href="https://twitter.com/indywiser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="twitter" size="3rem" />
          </a>
          <a
            href="https://www.instagram.com/indywiser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="instagram" size="3rem" />
          </a>
          <a
            href="https://indywise.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="medium" size="3rem" />
          </a>
        </div>
      </BottomSocialMediaIconsWrapper>
    </BottomSocialMediaWrapper>
  );
};

const FooterColumn1: React.FC = () => {
  return (
    <ColumnWrapper>
      <ul style={{ padding: '0px' }}>
        <ColumnItem>
          <Text type="title" bold size="1.8vw">
            Contact
          </Text>
        </ColumnItem>
        <ColumnItem>
          <a href="mailto:hello@indywise.com?subject=I have a doubt regarding IndyWise&body=I would want to know more about IndyWise">
            <Text type="body" size="1.2vw">
              hello@indywise.com
            </Text>
          </a>
        </ColumnItem>
        <ColumnItem>
          <Text type="body" size="1.2vw">
            IN - +91-9034185281
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Text type="body" size="1.2vw">
            EU - +44-7587442023
          </Text>
        </ColumnItem>
      </ul>
    </ColumnWrapper>
  );
};

const FooterColumn2: React.FC = () => {
  return (
    <ColumnWrapper>
      <ul style={{ padding: '0px' }}>
        <ColumnItem>
          <Text type="title" bold size="1.8vw">
            About
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Link to="/about">
            <Text type="body" size="1.2vw">
              About us
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <HashLink to="/about#team">
            <Text type="body" size="1.2vw">
              Team
            </Text>
          </HashLink>
        </ColumnItem>
        <ColumnItem>
          <HashLink to="/about#offices">
            <Text type="body" size="1.2vw">
              Offices
            </Text>
          </HashLink>
        </ColumnItem>
        <ColumnItem>
          <Link to="/about#investors">
            <Text type="body" size="1.2vw">
              Investors
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <HashLink to="/about#partners">
            <Text type="body" size="1.2vw">
              Partners
            </Text>
          </HashLink>
        </ColumnItem>
        <ColumnItem>
          <HashLink to="/about#careers">
            <Text type="body" size="1.2vw">
              Careers
            </Text>
          </HashLink>
        </ColumnItem>
      </ul>
    </ColumnWrapper>
  );
};

const FooterColumn3: React.FC = () => {
  return (
    <ColumnWrapper>
      <ul style={{ padding: '0px' }}>
        <ColumnItem>
          <Text type="title" bold size="1.8vw">
            Products
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Link to="/mentors">
            <Text type="body" size="1.2vw">
              1:1 Mentoring Sessions
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <Link to="/wiseup/foundation">
            <Text type="body" size="1.2vw">
              WiseUp Foundation
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <Link to="/wiseupx">
            <Text type="body" size="1.2vw">
              WiseUp Upskilling
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <Link to="/wiseup">
            <Text type="body" size="1.2vw">
              WiseUp Employee Upskilling
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <Link to="/talent/pool">
            <Text type="body" size="1.2vw">
              Talent Pool
            </Text>
          </Link>
        </ColumnItem>
      </ul>
    </ColumnWrapper>
  );
};

const FooterColumn4: React.FC = () => {
  return (
    <ColumnWrapper>
      <ul style={{ padding: '0px' }}>
        <ColumnItem>
          <Text type="title" bold size="1.8vw">
            Community
          </Text>
        </ColumnItem>
        {/* <ColumnItem>
          <a
            href="https://community.indywise.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Text type="body" size="1.2vw">
              Wiser Community
            </Text>
          </a>
        </ColumnItem> */}
        <ColumnItem>
          <a
            href="https://indywise.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Text type="body" size="1.2vw">
              Blog
            </Text>
          </a>
        </ColumnItem>
      </ul>
    </ColumnWrapper>
  );
};

const FooterColumn5: React.FC = () => {
  return (
    <ColumnWrapper>
      <ul style={{ padding: '0px' }}>
        <ColumnItem>
          <Text type="title" bold size="1.8vw">
            Support
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Link to="/support/way-of-mentoring">
            <Text type="body" size="1.2vw">
              Way of Mentoring
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <HashLink to="/support/payment-policy">
            <Text type="body" size="1.2vw">
              Payment Policy
            </Text>
          </HashLink>
        </ColumnItem>
        <ColumnItem>
          <Link to="/support/privacy-policy">
            <Text type="body" size="1.2vw">
              Privacy Info
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <Link to="/support/terms">
            <Text type="body" size="1.2vw">
              Terms of Use
            </Text>
          </Link>
        </ColumnItem>
        <ColumnItem>
          <a href="mailto:hello@indywise.com?subject=I have a query about IndyWise">
            <Text type="body" size="1.2vw">
              Contact Us
            </Text>
          </a>
        </ColumnItem>
        <ColumnItem>
          <Link to="/support/faq">
            <Text type="body" size="1.2vw">
              FAQs
            </Text>
          </Link>
        </ColumnItem>
      </ul>
    </ColumnWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #042039;

  @media (max-width: 360px) {
    height: fit-content;
  }

  @media (max-width: 1000px) {
    height: fit-content;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: white;
    margin: 0px 47px;
    font-size: 20px;
    font-weight: 700px;
  }

  svg {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 1000px) {
    display: none;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;

    svg {
      width: 24px;
      height: 24px;
    }

    h1 {
      width: 100%;
      margin: 24px 0px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
const SocialMediaIconsWrapper = styled.div`
  width: 256px;
  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    width: 100%;
    div {
      max-width: 170px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-left: -10px;

      * {
        min-width: 50px;
        margin-bottom: 10px;
      }
    }
  }
`;

const BottomSocialMediaWrapper = styled.div`
      display:none;

      @media(max-width:1000px){
        display:flex;
        flex-direction: column;
        svg {
          width: 32px;
          height: 32px;
          }
    
        h1 {
          width: 100%;
          margin: 24px 0px;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
      }
      @media(max-width:360px){
        display:none;
      }
`;

const BottomSocialMediaIconsWrapper = styled.div`
  width: 256px;
  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    width: 100%;
    div {
      max-width: 170px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-left: -10px;

      * {
        min-width: 50px;
        margin-bottom: 10px;
      }
    }
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8vh 6vw;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    justify-content: center;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  svg {
    width: 132px;
    height: 44px;
  }

  @media (max-width: 360px) {
    width: 176px;
    margin: 32px auto 0 auto;

    svg {
      width: 96px;
      height: 32px;
      margin-left: 40px;
    }
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 6vw;
  margin: 0 auto;

  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-left: 1.5rem;
  }
`;

const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh 6vw 2vh 6vw;
  max-width: 100%;
  margin: 0 auto;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #e9e9e9;
`;

const CopyRightText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5em;
  width: fit-content;

  p,
  svg {
    margin-right: 0.5em;
  }
  @media (max-width: 768px) {
    justify-content: center;
    p,
    svg {
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
    }
    p {
      span {
        display: none;
      }
    }
  }

  @media (max-width: 360px) {
    min-width: 100%;

    p,
    svg {
      margin-top: 0.5em;
      margin-right: 10;
    }

    svg {
      margin-right: 0.5em;
      margin-left: 0.5em;
    }
  }
`;

const ColumnItem = styled.li`
  list-style-type: none;

  a {
    text-decoration: none;
  }

  h1 {
    color: white;
    font-size: 24px;
    margin: 24px 0px;
    line-height: 32px;
    font-weight: bold;
  }

  p {
    color: white;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 16px;
      margin-bottom: 16px;
      line-height: 24px;
    }

    p {
      font-size: 12px;
      margin-bottom: 16px;
      line-height: 16px;
    }
  }
`;

const ColumnWrapper = styled.div`
  @media (max-width: 1000px) {
    flex-basis: 30%;
  }

  @media (max-width: 500px) {
    flex-basis: 45%;
  }

  @media (max-width: 360px) {
    margin-top: 24px 0px;
  }
`;
