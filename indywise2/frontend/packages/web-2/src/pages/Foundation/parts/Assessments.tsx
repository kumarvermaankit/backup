import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
// import Ellipse from "../../../assets/Ellipse.png";
import Workwolf from '../../../assets/Workwolf.svg';
import ConnectDott from '../../../assets/ConnectDott.svg';
import RIASEC from '../../../assets/RIASEC.svg';
import Personalities from '../../../assets/Personalities.svg';

const Assessments: React.FC<any> = () => {
  const assessments: any = [
    {
      link: 'https://workwolf.com/',
      name: 'Workwolf',
      img: Workwolf
    },
    {
      link: 'https://openpsychometrics.org/tests/RIASEC/',
      name: 'RIASEC',
      img: RIASEC
    },
    {
      link: 'https://www.16personalities.com/free-personality-test',
      name: '16 Personalities',
      img: Personalities
    },
    {
      link: 'https://ui.connectdott.com/login',
      name: 'ConnectDott',
      img: ConnectDott
    }
  ];

  const [assessArr, setArr] = useState([]);

  const shuffleNext = () => {
    const save = assessments.slice(1, 4);
    setArr(save);
  };

  const shufflePrev = () => {
    const save = assessments.slice(0, 3);
    setArr(save);
  };

  useEffect(() => {
    shufflePrev();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SubMain>
        <Text type="title" color="#4B4B4B" style={{ fontFamily: 'Mulish' }}>
          Assessments for you
        </Text>
        <span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {assessArr?.length > 1 ? (
            <>
              <IconWrapper onClick={shufflePrev} left>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </IconWrapper>
              <IconWrapper onClick={shuffleNext}>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </IconWrapper>
            </>
          ) : null}
        </span>
      </SubMain>
      <Row>
        {assessArr?.length > 0
          ? assessArr.map((l: any) => (
              <Col4 style={{ marginTop: '22px' }}>
                <a
                  href={l.link}
                  style={{ textDecoration: 'none', color: '#4B4B4B' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <ImgSpan>
                      <img alt={l.name} src={l.img} />
                    </ImgSpan>
                    <TextA style={{ marginTop: '16px' }}>{l.name}</TextA>
                  </div>
                </a>
              </Col4>
            ))
          : null}
      </Row>
    </>
  );
};

export default Assessments;

const SubMain = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: Mulish;
  }

  @media (max-width: 1263px) {
    margin-top: 24px;
  }
`;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col4 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  max-width: 30%;
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const TextA = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
`;

const ImgSpan = styled.span`
  height: 128px;
  width: 128px;
  border-radius: 50%;
  border: 1px solid #cbcbcb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div<{ left?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.28px;
  cursor: pointer;
  border: 0.727273px solid #317ec2;
  border-radius: 50%;
  background-color: #ffffff;
  transform: ${({ left }) => (left ? 'rotate(90deg)' : 'rotate(-90deg)')};
  margin-right: ${({ left }) => (left ? '8px' : 0)};
`;
