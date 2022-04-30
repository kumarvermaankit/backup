import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar, Icon } from '@indywise/uikit';
import ShareIcon from '@material-ui/icons/Share';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Ellipse from '../../assets/Ellipse.png';

const ProfileMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const OtherLinks = () => {
    return (
      <div style={{ width: '200px', borderRight: '1px solid #E9E9E9' }}>
        <HeadText>Other Links</HeadText>
        <RegularText>Wiser Community</RegularText>
        <RegularText>Blogs</RegularText>
        <RegularText>About Us</RegularText>
        <RegularText>FAQs</RegularText>
        <RegularText>Contact Us</RegularText>
        <RegularText>Way Of Mentoring</RegularText>
        <RegularText>Payment Policy</RegularText>
        <RegularText>Privacy Info</RegularText>
        <RegularText>Terms Of Use</RegularText>
      </div>
    );
  };

  const IndyWisePrograms = () => {
    return (
      <div
        style={{
          marginLeft: '80px',
          width: '600px',
          borderRight: '1px solid #E9E9E9',
          marginRight: '40px'
        }}
      >
        <HeadText>IndyWise Programs</HeadText>
        <div style={{ height: '92px', marginBottom: '40px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '24px' }}>
              <img src={Ellipse} alt="Mentored Internships" />
            </div>
            <div>
              <ProgramText>Mentored Internships</ProgramText>
              <RegularText>
                Get Upskilled and be job ready with Zero Fees
              </RegularText>
            </div>
          </div>
        </div>

        <div
          style={{
            height: '92px',
            paddingBottom: '40px',
            borderBottom: '1px solid #E9E9E9',
            width: '92%'
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '24px' }}>
              <img src={Ellipse} alt="Mentored Internships" />
            </div>
            <div>
              <ProgramText>Subscription Packages</ProgramText>
              <RegularText>
                Browse curated list of Subscription Packages and book them at
                discounted prices
              </RegularText>
            </div>
          </div>
        </div>

        <div
          style={{ height: '92px', marginBottom: '40px', marginTop: '40px' }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '24px' }}>
              <img src={Ellipse} alt="Mentored Internships" />
            </div>
            <div>
              <ProgramText>Become a Mentor</ProgramText>
              <RegularText>
                Become a Mentor and impact lives positively through Quality
                Mentoring
              </RegularText>
            </div>
          </div>
        </div>

        <div style={{ height: '92px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '24px' }}>
              <img src={Ellipse} alt="Mentored Internships" />
            </div>
            <div>
              <ProgramText>IndyWise for Startups</ProgramText>
              <RegularText>
                Check Mentored / Supercharged Intern plans and save upto 75% of
                your time and have 5X cost savings
              </RegularText>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Information = () => {
    return (
      <div>
        <Avatar type="mentor" size="200px" />
        <HeadText
          style={{
            textAlign: 'center',
            marginTop: '16px'
          }}
        >
          Naman Mishra
        </HeadText>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRight: '1px solid #E9E9E9',
              paddingRight: '20px'
            }}
          >
            <Icon icon="badge" style={{ marginBottom: '10px' }} />
            Level
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid #E9E9E9',
              paddingRight: '20px',
              alignItems: 'center'
            }}
          >
            1500
            <RegularText style={{ marginTop: '10px' }}>XP</RegularText>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Icon icon="badge" style={{ marginBottom: '10px' }} />
            Level
          </div>
        </div>
        {PersonalInfoList()}
      </div>
    );
  };

  const PersonalInfoList = () => {
    return (
      <div style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <PersonOutlineIcon fontSize="small" />
          <RegularText style={{ marginBottom: '0', marginLeft: '27px' }}>
            Personal Information
          </RegularText>
        </div>
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <NotificationsNoneIcon fontSize="small" />
          <RegularText style={{ marginBottom: '0', marginLeft: '27px' }}>
            Notifcations
          </RegularText>
        </div>
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <Icon size="20px" icon="notification" />
          <RegularText style={{ marginBottom: '0', marginLeft: '27px' }}>
            Get Help
          </RegularText>
        </div>
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <ShareIcon fontSize="small" />
          <RegularText style={{ marginBottom: '0', marginLeft: '27px' }}>
            Share
          </RegularText>
        </div>
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <Icon size="20px" icon="notification" />
          <RegularText style={{ marginBottom: '0', marginLeft: '27px' }}>
            Logout
          </RegularText>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: 'Roboto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '40px',
          paddingTop: '42px',
          boxSizing: 'border-box'
        }}
      >
        <HoverSpan
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover Over me
        </HoverSpan>
      </div>
      {showMenu && (
        <div
          style={{
            marginLeft: '126px',
            height: '666px',
            padding: '40px',
            background: '#FFFFFF',
            boxShadow: '0px 16px 32px rgba(12, 53, 89, 0.24)',
            borderRadius: '0px 0px 40px 40px',
            width: '1200px',
            marginTop: '20px',
            boxSizing: 'border-box',
            display: 'flex'
          }}
        >
          {OtherLinks()}
          {IndyWisePrograms()}
          {Information()}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

const HoverSpan = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const HeadText = styled.p`
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #262626;
  margin-top: 0px;
  margin-bottom: 40px;
`;

const RegularText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #262626;
  margin-top: 0px;
  margin-bottom: 24px;
`;

const ProgramText = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0px;
  color: #262626;
`;
