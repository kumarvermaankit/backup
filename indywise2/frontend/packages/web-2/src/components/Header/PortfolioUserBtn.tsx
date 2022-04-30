import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, Avatar } from '@indywise/uikit';
import DefaultAvatar from '../../assets/DefaultAvatar.svg';
import Profile from '../../assets/Profile 24px.svg';
import Logout from '../../assets/Logout 24px.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PortfolioUserBtn: React.FC<any> = (props) => {
  const { name, avatar, color, type } = props;
  const [showMenu, setShowMenu] = useState(false);
  const { signout, user, business } = useAuth();

  const linkStyles = {
    textDecoration: 'none',
    color: '#262626',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0em',
    marginBottom: '0',
    marginLeft: '27px'
  };

  const linkTextStyles = {
    cursor: 'pointer',
    marginBottom: '0',
    marginLeft: '27px'
  };

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  // const OtherLinks = () => {
  //   return (
  //     <div style={{ width: '200px', borderRight: '1px solid #E9E9E9' }}>
  //       <HeadText>Other Links</HeadText>
  //       <RegularText>Wiser Community</RegularText>
  //       <RegularText>Blogs</RegularText>
  //       <RegularText>About Us</RegularText>
  //       <RegularText>FAQs</RegularText>
  //       <RegularText>Contact Us</RegularText>
  //       <RegularText>Way Of Mentoring</RegularText>
  //       <RegularText>Payment Policy</RegularText>
  //       <RegularText>Privacy Info</RegularText>
  //       <RegularText>Terms Of Use</RegularText>
  //     </div>
  //   );
  // };

  // const IndyWisePrograms = () => {
  //   return (
  //     <div
  //       style={{
  //         marginLeft: '80px',
  //         width: '600px',
  //         borderRight: '1px solid #E9E9E9',
  //         marginRight: '40px'
  //       }}
  //     >
  //       <HeadText>IndyWise Programs</HeadText>
  //       <div style={{ height: '92px', marginBottom: '40px' }}>
  //         <div style={{ display: 'flex' }}>
  //           <div style={{ marginRight: '24px' }}>
  //             <img src={Ellipse} alt="Mentored Internships" />
  //           </div>
  //           <div>
  //             <ProgramText>Mentored Internships</ProgramText>
  //             <RegularText>
  //               Get Upskilled and be job ready with Zero Fees
  //             </RegularText>
  //           </div>
  //         </div>
  //       </div>

  //       <div
  //         style={{
  //           height: '92px',
  //           paddingBottom: '40px',
  //           borderBottom: '1px solid #E9E9E9',
  //           width: '92%'
  //         }}
  //       >
  //         <div style={{ display: 'flex' }}>
  //           <div style={{ marginRight: '24px' }}>
  //             <img src={Ellipse} alt="Mentored Internships" />
  //           </div>
  //           <div>
  //             <ProgramText>Subscription Packages</ProgramText>
  //             <RegularText>
  //               Browse curated list of Subscription Packages and book them at
  //               discounted prices
  //             </RegularText>
  //           </div>
  //         </div>
  //       </div>

  //       <div
  //         style={{ height: '92px', marginBottom: '40px', marginTop: '40px' }}
  //       >
  //         <div style={{ display: 'flex' }}>
  //           <div style={{ marginRight: '24px' }}>
  //             <img src={Ellipse} alt="Mentored Internships" />
  //           </div>
  //           <div>
  //             <ProgramText>Become a Mentor</ProgramText>
  //             <RegularText>
  //               Become a Mentor and impact lives positively through Quality
  //               Mentoring
  //             </RegularText>
  //           </div>
  //         </div>
  //       </div>

  //       <div style={{ height: '92px' }}>
  //         <div style={{ display: 'flex' }}>
  //           <div style={{ marginRight: '24px' }}>
  //             <img src={Ellipse} alt="Mentored Internships" />
  //           </div>
  //           <div>
  //             <ProgramText>IndyWise for Startups</ProgramText>
  //             <RegularText>
  //               Check Mentored / Supercharged Intern plans and save upto 75% of
  //               your time and have 5X cost savings
  //             </RegularText>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const Information = () => {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {type === 'startup' ? (
            <Avatar
              // src="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/TechESpace.png"
              src={
                business?.avatar ||
                'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/TechESpace.png'
              }
              type="mentor"
              size="120px"
            />
          ) : (
            <Avatar
              src={user?.avatar?.large ? user?.avatar?.large : DefaultAvatar}
              type="mentee"
              size="120px"
            />
          )}
        </div>
        {type === 'startup' ? (
          <HeadText
            style={{
              textAlign: 'center',
              marginTop: '16px',
              marginBottom: '2px'
            }}
          >
            {business?.organization_name}
          </HeadText>
        ) : (
          <HeadText
            style={{
              textAlign: 'center',
              marginTop: '16px',
              marginBottom: '2px'
            }}
          >
            {name}
          </HeadText>
        )}
        {user?.userType?.length &&
        user?.userType?.length > 0 &&
        user?.userType?.includes('mentor') ? (
          <RegularText style={{ textAlign: 'center' }}>Mentor</RegularText>
        ) : (
          <RegularText style={{ textAlign: 'center' }}>
            {type === 'startup' ? 'Company' : 'Mentee'}
          </RegularText>
        )}
        {PersonalInfoList()}
      </div>
    );
  };

  const PersonalInfoList = () => {
    return (
      <div style={{ marginTop: '24px' }}>
        {type === 'startup' ? null : (
          <div
            style={{
              display: 'flex',
              marginBottom: '16px',
              alignItems: 'center'
            }}
          >
            {/* <PersonOutlineIcon fontSize="small" /> */}
            <img src={Profile} alt="Profile" />
            <Link to="/my-profile" style={linkStyles}>
              Profile
            </Link>
          </div>
        )}
        {/* <div style={{ display: 'flex', marginBottom: '16px' }}>
          <Icon size="20px" icon="notification" />
          <Link to="/wiseup/#pricing"
            style={linkStyles}
          >
            Get Help
          </Link>
        </div> */}
        <div
          style={{
            display: 'flex',
            marginBottom: '16px',
            alignItems: 'center'
          }}
        >
          {/* <Icon size="20px" icon="logout" /> */}
          {/* <ExitToAppIcon fontSize="small" /> */}
          <img src={Logout} alt="Logout" />
          <RegularText onClick={signout} style={linkTextStyles}>
            Logout
          </RegularText>
        </div>
      </div>
    );
  };

  return (
    <>
      <Container
        color={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {type === 'startup' ? (
          <Avatars
            // src="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/TechESpace.png"
            src={
              business?.avatar
                ? business?.avatar
                : 'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/TechESpace.png'
            }
            color={color}
          />
        ) : (
          <Avatars src={avatar ? avatar : DefaultAvatar} color={color} />
        )}
        <Icon icon="menu" size="24px" color="#317EC2" />
      </Container>
      {showMenu && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'fixed',
            // marginLeft: '126px',
            height: '370px',
            padding: '24px',
            background: '#FFFFFF',
            justifyContent: 'center',
            boxShadow: '0px 16px 32px rgba(12, 53, 89, 0.24)',
            borderRadius: '0px 0px 40px 40px',
            width: '240px',
            marginTop: '20px',
            zIndex: 1001,
            boxSizing: 'border-box',
            display: 'flex',
            right: '40px',
            top: '50px'
          }}
        >
          {/* {OtherLinks()}
          {IndyWisePrograms()} */}
          {Information()}
        </div>
      )}
    </>
  );
};

export default PortfolioUserBtn;

const Container = styled.button<{ fontSize?: string; color?: string }>`
  background: transparent;
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  padding: 0 16px 0 0;
  margin: 0;
  margin-left: 12px;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: ${(props) => props.fontSize || '1rem'};
    color: ${(props) => props.color};
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

const Avatars = styled.img<{ color?: string }>`
  height: 32px;
  width: 32px;
  border-radius: 100px;
  box-sizing: border-box;
  object-fit: cover;
  margin: 0 8px 0 0;
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

// const ProgramText = styled.p`
//   font-family: Roboto;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 28px;
//   letter-spacing: 0em;
//   text-align: left;
//   margin-top: 0px;
//   color: #262626;
// `;
