import React from 'react';
import countryData from '../../../../data/country-data.json';
// import wantsinternship from '../../../../data/wantsInternship-data.json';
// import skillsData from '../../../../data/skills-data.json';
import { Icon } from '@indywise/uikit';
import styled from 'styled-components';
// import MentorPortfolioImg from '../../../../assets/MentorPortfolioImg.svg';
import ModalBasicDetails from '../../../../assets/Modal-Basic-Details.png';
import {
  // ToggleBtnSection,
  ButtonWrapper,
  Header,
  SubData,
  DropDownContainer,
  DropDown,
  YellowBtn,
  Input
} from './UI-components';

interface BDProps {
  skills: any;
  user: object;
  state1: {
    location: { country: string; city: string };
    // skills: Array<string>;
  };
  state2: any;
  mentorid?: string;
  submitBD: (data1: any, data2: any, mentorid?: string) => void;
}

const BD: React.FC<BDProps> = ({
  skills,
  state1,
  state2,
  submitBD,
  mentorid
}) => {
  const [locationCountry, setLocationCountry] = React.useState(
    state1?.location.country ? state1?.location.country : ''
  );
  //eslint-disable-next-line
  const [locationCity, setLocationCity] = React.useState(
    state1?.location.city ? state1?.location.city : ''
  );

  // const [multiSkills, setMultiSkills] = React.useState<Array<string>>(
  //   state1?.skills ? state1?.skills : []
  // );

  // const [finSkills, setFinSkills] = React.useState<Array<string>>(
  //   multiSkills ? multiSkills : []
  // );
  // const [wantsInternship, setWantsInternship] = React.useState<Array<string>>(
  //   state2?.wantsInternshipIn ? state2?.wantsInternshipIn : []
  // );
  const updatedBasicDetails = {
    location: { country: locationCountry, city: locationCity }
    // skills: finSkills
  };
  // const updatedWantsInternship = wantsInternship;
  const [dropDown, setDropDown] = React.useState<{
    country: boolean;
    city: boolean;
    intr: boolean;
    skills: boolean;
  }>({
    country: false,
    city: false,
    intr: false,
    skills: false
  });

  //eslint-disable-next-line
  const [shuffleBD, setShuffleBD] = React.useState<number>(1);

  const setDropDownHandler = React.useCallback(
    (name: 'country' | 'city' | 'intr' | 'skills') => {
      setDropDown((data) => ({
        ...data,
        [name]: !data[name]
      }));
    },
    []
  );
  //eslint-disable-next-line
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const getBDComponent = React.useCallback(
    (value: number) => {
      switch (value) {
        case 1:
          return (
            <div
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                height: '400px',
                overflowY: 'auto'
              }}
            >
              <Header>Location</Header>
              <SubData>Select the country you are currently living in</SubData>
              <DropDownContainer onClick={() => setDropDownHandler('country')}>
                <h1>
                  {updatedBasicDetails?.location.country
                    ? updatedBasicDetails?.location.country
                    : 'Enter Country Name'}
                </h1>
                <Icon
                  icon={!dropDown.country ? 'darkdownarrow' : 'uparrow'}
                  color="black"
                  size="20px"
                />
              </DropDownContainer>
              {dropDown.country ? (
                <DropDown>
                  {countryData.data.map((country) => (
                    <h1
                      key={country}
                      onClick={(e) => {
                        setLocationCountry(e.currentTarget.innerText);
                        setDropDownHandler('country');
                      }}
                    >
                      {country}
                    </h1>
                  ))}
                </DropDown>
              ) : null}
              <SubData>Enter the city you are currently living in</SubData>
              <Input
                placeholder="Enter City Name"
                name="locationCity"
                value={locationCity}
                onChange={(e: any) => {
                  setLocationCity(e.target.value);
                  setInputHeight(e, '10px');
                }}
              />
              <ButtonWrapper
                style={{ position: 'absolute', bottom: 0, right: 0 }}
              >
                <YellowBtn
                  onClick={() => {
                    // 2 API Calls
                    // Send updatedBasicDetails directly
                    // const finalWantsInternship = {
                    // careerObjective: state2?.careerObjective
                    //   ? state2?.careerObjective
                    //   : ''
                    //  wantsInternshipIn: updatedWantsInternship
                    //   ...state2
                    // };
                    submitBD(updatedBasicDetails, state2, mentorid);
                  }}
                >
                  Finish
                </YellowBtn>
              </ButtonWrapper>
            </div>
          );
        // case 2:
        //   return (
        //     <div
        //       style={{
        //         paddingLeft: '24px',
        //         paddingRight: '24px',
        //         height: '400px',
        //         overflowY: 'scroll'
        //       }}
        //     >
        //       <Header>Want Internship in</Header>
        //       <SubData>
        //         Select the major skill for which want to apply <br /> for
        //         Mentored Internship
        //       </SubData>
        //       <DropDownContainer onClick={() => setDropDownHandler('intr')}>
        //         <h1>
        //           {updatedWantsInternship?.length > 0
        //             ? updatedWantsInternship.map((i, index) => (
        //                 <p
        //                   key={index}
        //                   style={{
        //                     display: 'inline-block',
        //                     marginRight: '10px',
        //                     marginBottom: '10px'
        //                   }}
        //                 >
        //                   {i}
        //                 </p>
        //               ))
        //             : 'Select Multiple Skills'}
        //         </h1>
        //         <Icon
        //           icon={!dropDown.intr ? 'darkdownarrow' : 'uparrow'}
        //           color="black"
        //           size="20px"
        //         />
        //       </DropDownContainer>
        //       {dropDown.intr ? (
        //         <DropDown>
        //           {skills.map((s: any) => (
        //             <h1
        //               key={s.ID}
        //               onClick={(e) => {
        //                 setWantsInternship([
        //                   ...wantsInternship,
        //                   e.currentTarget.innerText.toString()
        //                 ]);
        //                 setDropDownHandler('skills');
        //               }}
        //             >
        //               {s.name}
        //             </h1>
        //           ))}
        //         </DropDown>
        //       ) : null}
        //     </div>
        //   );
        case 2:
          return (
            <div
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                height: '400px',
                overflowY: 'auto'
              }}
            >
              {/* <Header>Skills *</Header>
              <SubData>Select multiple skills you are well versed with</SubData>
              <DropDownContainer onClick={() => setDropDownHandler('skills')}>
                <h1>
                  {finSkills?.length > 0
                    ? finSkills.map((skill, i) => (
                        <Pill
                          rightIcon="redexit"
                          text={skill}
                          style={{ marginRight: '10px', marginBottom: '10px' }}
                          onClick={() => {
                            setFinSkills(() =>
                              finSkills.filter((s) => s !== skill)
                            );
                            setMultiSkills(finSkills);
                          }}
                        />
                      ))
                    : 'Select Multiple Skills'}
                </h1>
                <Icon
                  icon={!dropDown.skills ? 'darkdownarrow' : 'uparrow'}
                  color="black"
                  size="20px"
                />
              </DropDownContainer>
              {dropDown.skills ? (
                <DropDown>
                  {skills.map((s: any) => {
                    if (finSkills.indexOf(s.name) !== -1) {
                      return (
                        <h1
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: 700,
                            borderLeft: '2px solid #F2A922',
                            height: '56px',
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0
                          }}
                          key={s.ID}
                        >
                          <p
                            style={{
                              marginLeft: '24px',
                              marginTop: '2px',
                              marginBottom: '4px',
                              marginRight: 0
                            }}
                          >
                            {s.name}
                          </p>
                        </h1>
                      );
                    } else {
                      return (
                        <h1
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '56px',
                            marginTop: '4px',
                            marginRight: 0,
                            marginBottom: '4px'
                            // marginLeft: 0
                          }}
                          key={s.ID}
                          onClick={(e) => {
                            setFinSkills([
                              ...finSkills,
                              e.currentTarget.innerText.toString()
                            ]);
                            setMultiSkills([
                              ...multiSkills,
                              e.currentTarget.innerText.toString()
                            ]);
                            setDropDownHandler('skills');
                          }}
                        >
                          {s.name}
                        </h1>
                      );
                    }
                  })}
                </DropDown>
              ) : null} */}
            </div>
          );
        default:
      }
    },
    // eslint-disable-next-line
    [
      dropDown,
      setDropDownHandler,
      state1,
      state2,
      locationCity
      // multiSkills,
      // finSkills
    ]
  );
  return (
    <Col4 style={{ position: 'relative' }}>
      {getBDComponent(shuffleBD)}
      <ImgDiv>
        <img
          src={ModalBasicDetails}
          // style={{ marginTop: '20px' }}
          alt="Basic Details"
        />
      </ImgDiv>
      {/* <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <ToggleBtnSection>
          <p>{shuffleBD}/2</p>
          <div>
            {shuffleBD > 1 && (
              <ButtonWrapper
                onClick={() =>
                  setShuffleBD(shuffleBD > 1 ? shuffleBD - 1 : shuffleBD)
                }
              >
                <Icon icon="leftcircularbtn" size="80px" />
              </ButtonWrapper>
            )}
            {shuffleBD < 2 ? (
              <ButtonWrapper
                onClick={() =>
                  setShuffleBD(shuffleBD < 3 ? shuffleBD + 1 : shuffleBD)
                }
              >
                <Icon icon="rightCircularBtn" size="80px" />
              </ButtonWrapper>
            ) : (
              <ButtonWrapper>
                <YellowBtn
                  onClick={() => {
                    // 2 API Calls
                    // Send updatedBasicDetails directly
                    const finalWantsInternship = {
                      careerObjective: state2?.careerObjective
                        ? state2?.careerObjective
                        : ''
                      //  wantsInternshipIn: updatedWantsInternship
                    };
                    submitBD(updatedBasicDetails, finalWantsInternship);
                  }}
                >
                  Finish
                </YellowBtn>
              </ButtonWrapper>
            )}
          </div>
        </ToggleBtnSection>
      </div> */}
    </Col4>
  );
};

export default BD;

const ImgDiv = styled.div`
  display: none;
  @media (max-width: 505px) {
    display: flex;
    justify-content: center;
  }
`;

const Col4 = styled.div`
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40.33%;
  flex: 0 0 40.33%;
  max-width: 40.33%;

  @media (max-width: 1001px) {
    flex: 0 0 70%;
    max-width: 70%;
    display: block;
  }
  @media (max-width: 505px) {
    flex: 0 0 100%;
    max-width: 100%;
    display: block;
  }
`;
