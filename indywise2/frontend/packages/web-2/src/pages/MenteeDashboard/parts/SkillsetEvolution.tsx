import React from 'react';
import styled from 'styled-components';
import MixedChart from './MixedChart';
//eslint-disable-next-line
import { Icon } from '@indywise/uikit';

const SkillsetEvolution: React.FC<any> = (props) => {
  /* const [mobilesize, setContent] = React.useState(false);

  const setContent = () => {
    if (len(props.selected) > 1 && mobilesize))
    {

    }
  }; */

  return (
    <>
      <Container style={{ paddingBottom: 0 }}>
        <Flex>
          {/* <Heading>UX Design</Heading> */}
          <Heading>WiseUp Score</Heading>
          <SubFlex>
            <DropDownMenu>
              <DropDownMenuBtn>
                {/* <BigMenu>Monthly</BigMenu>
                <SmallMenu>M</SmallMenu> */}
                <BigMenu>Per Session</BigMenu>
                <SmallMenu>S</SmallMenu>
                {/* <Icon icon="arrow" size="20px" color="#317EC2" /> */}
              </DropDownMenuBtn>
              <DropDownMenuContent>Per Session</DropDownMenuContent>
            </DropDownMenu>
            {/* <Icons>
              <LeftIconWrapper>
                <Icon icon="arrow" size="17.45px" color="#CBCBCB" />
              </LeftIconWrapper>
              <RightIconWrapper>
                <Icon icon="arrow" size="17.45px" color="#317EC2" /> //commented line
                <Icon icon="arrow" size="17.45px" color="#CBCBCB" />
              </RightIconWrapper>
            </Icons> */}
          </SubFlex>
        </Flex>
        <Chartarea>
          <MixedChart timeline={props?.timeline || []} />
        </Chartarea>
      </Container>
    </>
  );
};

export default SkillsetEvolution;

const Container = styled.div`
  width: 28%;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(4, 32, 57, 0.08);
  border-radius: 0.75rem;
  margin: 0.5rem;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1320px) {
    flex: 1 0 auto;
    width: auto;
  }

  @media screen and (min-width: 768px) {
    /* min-width: 325px; */
  }

  @media screen and (max-width: 375px) {
    width: fill-available;
    margin: 0.5rem 1rem;
  }
`;

const Heading = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #4b4b4b;
  font-family: Mulish;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Chartarea = styled.div`
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  margin: 16px 0 0 0;
`;

const DropDownMenu = styled.div`
  padding: 0.25rem 1rem;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  color: #317ec2;
  border: 1px solid #317ec2;
  border-radius: 20px;
  margin-right: 18px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubFlex = styled.div`
  display: flex;
`;

const DropDownMenuBtn = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
  font-family: Roboto;
  font-weight: 400;
`;

const SmallMenu = styled.div`
  margin-right: 8px;
  display: none;
  @media screen and (max-width: 810px) and (min-width: 650px) {
    display: block;
  }

  @media screen and (max-width: 375px) {
    display: block;
  }
`;

const BigMenu = styled.div`
  margin-right: 8px;
  @media screen and (max-width: 810px) and (min-width: 650px) {
    display: none !important;
  }

  @media screen and (max-width: 375px) {
    display: none !important;
  }
`;

const DropDownMenuContent = styled.div`
  display: none;
  /* font-size: 14px;
line-height: 20px;
font-family: Roboto;
font-weight: 400; */
`;

/* const Icons = styled.div`
  display: flex;
`;

const LeftIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.28px;
  cursor: pointer;
  border: 0.727273px solid #cbcbcb;
  border-radius: 50%;
  transform: rotate(90deg);
  margin-right: 8px;
`;

const RightIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.28px;
  cursor: pointer;
  // border: 0.727273px solid #317ec2;
  border: 0.727273px solid #cbcbcb;
  border-radius: 50%;
  background-color: #ffffff;
  transform: rotate(-90deg);
`;
 */
