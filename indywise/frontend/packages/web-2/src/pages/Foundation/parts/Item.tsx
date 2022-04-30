import React from 'react';
import styled from 'styled-components';
// import { HashLink as Link } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';
import NewMentorsListItem from '../../MentorsList/parts/NewMentorsListItem';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
import { Icon } from '@indywise/uikit';
import goldBadge from '../../../assets/GoldBadge.svg';
import platinumBadge from '../../../assets/PlatinumBadge.svg';
import diamondBadge from '../../../assets/DiamondBadge.svg';
import indyfluencerBadge from '../../../assets/IndyfluencerBadge.svg';

const Item: React.FC<any> = ({ mentor, currency, exchangeRate, data }) => {
  const history = useHistory();
  let source;
  if (data.iconName === 'goldBadge') {
    source = goldBadge;
  } else if (data.iconName === 'platinumBadge') {
    source = platinumBadge;
  } else if (data.iconName === 'diamondBadge') {
    source = diamondBadge;
  } else {
    source = indyfluencerBadge;
  }

  const { setSelectedTierFn } = React.useContext(NewMentorsListContext);

  const setTier = () => {
    setSelectedTierFn(data?.tier);

    history.push('/mentors');
  };

  return (
    <Col4>
      <div
        style={{
          height: '28px',
          background: `${data.background}`,
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* <Icon icon={data.iconName} /> */}
          <img src={source} alt="Icon name" />
          <Text style={{ marginLeft: '8px' }}>{data.tier}</Text>
        </span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#4B4B4B',
            fontSize: '12px',
            lineHeight: '16px',
            fontFamily: 'Roboto'
          }}
        >
          <Icon icon="dollar" color="#4B4B4B" /> <Text>{data.cost}</Text>/hr
        </span>
      </div>
      <div style={{ marginTop: '24px', minHeight: '223px' }}>
        <NewMentorsListItem
          mentor={mentor}
          currency={currency}
          exchangeRate={exchangeRate}
        />
      </div>
      {/* <Link to="/mentors" style={ButtonDiv}> */}
      <ButtonDiv onClick={setTier}>
        <span
          style={{
            fontFamily: 'Roboto',
            color: '#317EC2',
            marginRight: '16px'
          }}
        >
          See More
        </span>
        <IconWrapper>
          <Icon icon="arrow" size="16px" color="#317EC2" />
        </IconWrapper>
        {/* </Link> */}
      </ButtonDiv>
    </Col4>
  );
};

export default Item;

const Col4 = styled.div`
  width: 95%;
  // -webkit-box-flex: 0;
  // -ms-flex: 0 0 30%;
  // flex: 0 0 30%;
  // max-width: 30%;
  // @media (max-width: 1263px) {
  //   flex: 0 0 100%;
  //   max-width: 100%;
  //   margin-top: 12px;
  //   margin-bottom: 12px;
  // }
`;

const ButtonDiv = styled.button`
  width: 100%;
  margin-top: 30px;
  height: 40px;
  border: 1px solid #317ec2;
  background: #fff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  margin: 0;
  transform: rotate(-90deg);
  cursor: pointer;
`;

const Text = styled.small`
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #4b4b4b;
`;
