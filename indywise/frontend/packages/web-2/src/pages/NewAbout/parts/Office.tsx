import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const Office: React.FC = () => {
  const [content, setContent] = useState('');
  const [country, setCountry] = useState('');

  return (
    <Wrapper id="office">
      <Content>
        <Text type="h1">Offices</Text>
        <ComposableMap
          width={980}
          height={551}
          data-tip=""
          style={{
            width: '100%',
            marginTop: '10px'
          }}
          id="new"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#5A9FDB"
                  stroke="#5A9FDB"
                />
              ))
            }
          </Geographies>
          <Marker
            coordinates={[77, 28.4]}
            onMouseEnter={() => {
              setContent(
                `Unit No. 221, 2nd Floor, JMD Megapolis, Sector 48,<br>Sohna Road, Gurugram, Haryana 122018<br>E: hello@indywise.com<br>M: +91-9034185281`
              );
              setCountry('India');
            }}
            onMouseLeave={() => {
              setContent('');
              setCountry('');
              setCountry('');
            }}
          >
            <g
              fill="#FAEFD9"
              stroke="#F2A922"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="10" r="4" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
          </Marker>
          <Marker
            coordinates={[-89.4, 53.7]}
            onMouseEnter={() => {
              setContent(
                `Chad Management Group<br>21 St Clair Ave E #1000, Toronto, ON M4T 1L9, Canada<br>M: +1-416-918-5529`
              );
              setCountry('North America');
            }}
            onMouseLeave={() => {
              setContent('');
              setCountry('');
            }}
          >
            <g
              fill="#FAEFD9"
              stroke="#F2A922"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="10" r="4" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
          </Marker>
          <Marker
            coordinates={[12, 60]}
            onMouseEnter={() => {
              setContent(
                `Ksawerów 3, 02-656 Warsaw, Poland<br>E: emea@indywise.com<br>M: +48-734440707<br>Representation - +44 7587442023`
              );
              setCountry('Poland');
            }}
            onMouseLeave={() => {
              setContent('');
              setCountry('');
            }}
          >
            <g
              fill="#FAEFD9"
              stroke="#F2A922"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="10" r="4" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
          </Marker>
          <Marker
            coordinates={[105, 0]}
            onMouseEnter={() => {
              setContent(
                `IndyWise Pte. Ltd., 68 Circular Road #02-01, 049422, Singapore<br>E: hello@indywise.com<br>M: +91-9034185281`
              );
              setCountry('Singapore');
            }}
            onMouseLeave={() => {
              setContent('');
              setCountry('');
            }}
          >
            <g
              fill="#FAEFD9"
              stroke="#F2A922"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="10" r="4" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
          </Marker>
        </ComposableMap>
        <ReactTooltip multiline={true} arrowColor="#EAF3FA">
          {country && content ? (
            <>
              <Flex>
                <Icon icon="location" color="white" />
                <Text type="h2">{country}</Text>
              </Flex>
              {content?.split('<br>')?.map((c: any) => (
                <Text type="body">{c}</Text>
              ))}
            </>
          ) : null}
        </ReactTooltip>
      </Content>
    </Wrapper>
  );
};

export default Office;

const Wrapper = styled.div`
  background-color: #eaf3fa;
  width: 100%;
  height: 100vh;
  padding-top: 1rem;
`;

const Flex = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Content = styled.div`
  margin: 100px 197px 0px 191px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    height: 600px;
    display: inline-block;
    vertical-align: middle;
  }

  h1 {
    font-family: Mulish;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: #262626;
  }

  div {
    height: auto;
    width: 350px;
    padding: 24px;
    position: absolute;
    background: #042039;
    border-radius: 20px;

    span {
      margin-right: 8px;
      svg {
        width: 24px;
        height: 24px;
        path {
          fill: white;
        }
      }
    }

    p {
      color: #cbcbcb;
      line-height: 20px;
      font-size: 14px;
    }

    h2 {
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
      color: white;
    }
  }

  @media (max-height: 750px) {
    svg {
      height: 500px;
    }
  }

  @media (max-height: 650px) {
    svg {
      height: 400px;
    }
  }

  @media (max-height: 550px) {
    svg {
      height: 300px;
    }
  }

  @media (max-width: 1300px) {
    svg {
      height: 400px;
    }
  }

  @media (max-width: 1030px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    svg {
      height: auto;
    }

    svg {
      height: auto;
    }

    div {
      width: 80%;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }

    div {
      h2 {
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
      }

      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 360px) {
    div {
      padding: 10px;
    }
  }
`;
