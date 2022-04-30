import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Arrow from '../../../assets/Arrow Up 24px.png';

const MenuBar: React.FC = () => {
  const [curr, setCurr] = useState('about');
  const [isDropDown, setIsDropDown] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const [isNavbar, setIsNavBar] = useState(true);

  const handleSetActive = (to: any) => {
    setCurr(to);
  };

  const listentoScroll = () => {
    const container = document.getElementById('footer-section')!;
    const clientHeight = document.body.clientHeight;
    if (clientHeight === 594 && container.getBoundingClientRect().top < 507) {
      setIsNavBar(false);
    } else if (
      clientHeight === 821 &&
      container.getBoundingClientRect().top < 557
    ) {
      setIsNavBar(false);
    } else {
      setIsNavBar(true);
    }
    if (
      (clientHeight < 900 && container.getBoundingClientRect().top < 656) ||
      (clientHeight >= 1024 &&
        clientHeight < 1300 &&
        container.getBoundingClientRect().top < 1110) ||
      (clientHeight >= 1366 &&
        clientHeight < 1400 &&
        container.getBoundingClientRect().top < 1440)
    ) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  };

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  useEffect(() => {
    document.addEventListener('scroll', listentoScroll);
    return () => {
      document.removeEventListener('scroll', listentoScroll);
    };
  }, []);

  return (
    <>
      {isNavbar ? (
        <Wrapper>
          <Content>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
            >
              <button className={curr === 'about' ? 'active' : undefined}>
                About Us
              </button>
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
            >
              <button className={curr === 'team' ? 'active' : undefined}>
                Team
              </button>
            </Link>
            <Link
              to="office"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
            >
              <button className={curr === 'office' ? 'active' : undefined}>
                Offices{' '}
              </button>
            </Link>
            <Link
              to="investors"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
            >
              <button className={curr === 'investors' ? 'active' : undefined}>
                Investors{' '}
              </button>
            </Link>
            <Link
              to="partners"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
            >
              <button className={curr === 'partners' ? 'active' : undefined}>
                {' '}
                Partners
              </button>
            </Link>
            <Link
              to="careers"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
            >
              <button className={curr === 'careers' ? 'active' : undefined}>
                {' '}
                Careers
              </button>
            </Link>
          </Content>
        </Wrapper>
      ) : null}
      {showBtn ? (
        <MobileWrapper>
          <Content>
            <DropDownButton>
              {isDropDown ? (
                <DropDownList>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <button className={curr === 'about' ? 'active' : undefined}>
                      About Us{' '}
                    </button>
                  </Link>
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <button className={curr === 'team' ? 'active' : undefined}>
                      Team
                    </button>
                  </Link>
                  <Link
                    to="office"
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <button
                      className={curr === 'office' ? 'active' : undefined}
                    >
                      Offices{' '}
                    </button>
                  </Link>
                  <Link
                    to="investors"
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <button
                      className={curr === 'investors' ? 'active' : undefined}
                    >
                      Investors{' '}
                    </button>
                  </Link>
                  <Link
                    to="partners"
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <button
                      className={curr === 'partners' ? 'active' : undefined}
                    >
                      {' '}
                      Partners
                    </button>
                  </Link>
                  <Link
                    to="careers"
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <button
                      className={curr === 'careers' ? 'active' : undefined}
                    >
                      {' '}
                      Careers
                    </button>
                  </Link>
                </DropDownList>
              ) : (
                <div id="spacingDiv" style={{ marginBottom: '14rem' }}></div>
              )}

              <button
                id="uniqueButton"
                onClick={handleDropDown}
                style={{ backgroundColor: '#0c3559', color: 'white' }}
              >
                <div style={{ display: 'flex' }}>
                  <div>
                    {curr === 'about'
                      ? 'About Us'
                      : curr === 'team'
                      ? 'Team'
                      : curr === 'office'
                      ? 'Offices'
                      : curr === 'investors'
                      ? 'Investors'
                      : curr === 'partners'
                      ? 'Partners'
                      : curr === 'careers'
                      ? 'Careers'
                      : ''}
                  </div>
                  <img
                    src={Arrow}
                    alt="arrow"
                    style={{ position: 'relative', right: '-10px' }}
                  />
                </div>
              </button>
            </DropDownButton>
          </Content>
        </MobileWrapper>
      ) : null}
    </>
  );
};

export default MenuBar;

const DropDownList = styled.div``;

const DropDownButton = styled.div`
  @media (width: 1024px) {
    position: absolute;
    right: 64px;
    bottom: 24px;
  }

  @media (width: 1024px) {
    #uniqueButton {
      div {
        margin-left: 10px;
      }
    }
  }
`;

const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 1024px) {
    position: fixed;
    right: 0px;
    bottom: 24px;
    display: initial;
    width: 25% !important;
    z-index: 10;
    button {
      box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
      border-radius: 34px;
    }
  }

  @media (max-width: 768px) {
    right: 64px;
  }

  @media (max-width: 540px) {
    right: 64px;
  }

  @media (max-width: 320px) {
    right: 44px;
    bottom: 4px;
  }
`;

const Wrapper = styled.div`
  height: 64px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 34px;
  align-items: center;
  position: fixed;
  padding: 0px 8px;
  z-index: 100;
  bottom: 20px;

  @media (width: 1264px) {
    position: fixed;
  }
  @media (min-width: 1020px) and (max-width: 1369px) {
    position: fixed;
  }
  @media (max-width: 1024px) {
    display: none !important ;
    padding: 0;
  }
  @media (max-width: 500px) {
    display: none !important;
  }
  @media (max-width: 1025px) {
    display: none !important;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 160px;
    height: 48px;
    margin-top: 8px;
    border-radius: 24px;
    padding: 12px 8px;
    background-color: white;
    color: #0c3559;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    align-items: center;
    border: none;
    font: Roboto;
    @media (max-width: 1024px) {
      width: 160px;
      flex-direction: column;
      div {
        justify-content: center;
        align-items: center;
      }
    }
    &.active {
      background-color: #0c3559;
      color: white;
    }
  }

  @media (max-width: 1025px) {
    display: flex;
    flex-direction: column-reverse !important;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    button {
      width: 200px;
      border-radius: 24px;
      padding: 12px 8px;
      background-color: #ffffff;
      color: #0c3559;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      align-items: center;
      border: none;
      font: Roboto;
    }
  }
  @media (max-width: 320px) {
    button {
      width: 140px;
      padding: 12px 8px;
      font-size: 14px;
    }
  }
`;
