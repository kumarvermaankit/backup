import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon, Avatar } from '@indywise/uikit';

const marginHalf = { marginTop: '0.5em', marginRight: '0.75em' };
const marginQuarter = { marginTop: '0.25em' };
const marginTR = { marginTop: '0.25em', marginRight: '0.75em' };
const marginO = {
  marginTop: '1em',
  padding: window.screen.width <= 530 ? '3vw' : 'auto'
};
const truncateLines = {
  display: '-webkit-box',
  '-webkit-line-clamp': '3',
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

export interface IWEProps {
  m: any;
  type?: string;
}

const WorkExperienceCard: React.FC<IWEProps> = (props) => {
  const { m, type } = props;

  return (
    <>
      <Card
        key={m.organization_name + m.worked_from + m.worked_till || ''}
        title={m.description || ''}
        type={type}
      >
        <RowWork>
          <div id="widthfix">
            <Flex>
              <AvatarDiv>
                {
                  <Avatar
                    src={m.avatar as string}
                    size="100px"
                    style={{ marginRight: '1.5rem' }}
                    type="employment"
                  />
                }
              </AvatarDiv>
              <InfoDiv>
                <Text type="title" bold color="#262626">
                  {m.designation}
                </Text>
                <Flex>
                  <Text type="subtitle" style={marginHalf} color="#4B4B4B">
                    {m.organization_name}
                  </Text>
                  <Icon icon="dot" size="0.25em" style={marginHalf} />
                  <Text type="subtitle" style={marginHalf} color="#4B4B4B">
                    {m.job_status}
                  </Text>
                </Flex>
                <Flex>
                  <Text type="subtitle" style={marginTR} color="#4B4B4B">
                    {`${m.worked_from} - ${m.worked_till}`}
                  </Text>
                </Flex>
                <Text type="subtitle" style={marginQuarter} color="#4B4B4B">
                  {m.location}
                </Text>
              </InfoDiv>
            </Flex>
          </div>
        </RowWork>
        <Text type="subtitle" style={marginO} color="#4B4B4B">
          <q style={truncateLines}>{m.description}</q>
        </Text>
      </Card>
    </>
  );
};

export default WorkExperienceCard;

const Flex = styled.div`
  display: flex;
`;

const RowWork = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  column-gap: 0.7em;
  row-gap: 1.25em;

  @media (min-width: 1100px) and (max-width: 1599px) {
    div#widthfix {
      width: 85%;
    }
  }

  @media (max-width: 530px) {
    padding: 3vw;
  }
`;

const AvatarDiv = styled.div`
  @media (max-width: 530px) {
    display: none;
  }
`;

const InfoDiv = styled.div`
  white-space: nowrap;
  width: 26em;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 1600px) {
    width: auto;
  }

  @media (min-width: 1100px) and (max-width: 1599px) {
    h1,
    h2 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: auto;
    }
  }

  @media (max-width: 530px) {
    width: 80vw;
  }
`;

const Card = styled.div<{ title?: string; type?: string }>`
  padding: 1.25em;
  background-color: white;
  margin: ${(props) => (props.type === 'pdf' ? '1em auto' : '1em')};
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.349);
  border-radius: 10px;
  min-height: 206px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 530px) {
    padding: unset;
    margin: 1vh 1vw;
  }
`;
