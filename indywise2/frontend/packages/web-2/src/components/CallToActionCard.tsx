import * as React from 'react';
import styled from 'styled-components';
import { Icon, IconTypes, Text } from '@indywise/uikit';

export interface ICallToActionCardProps {
  title: string;
  subTitle?: string;
  icon: IconTypes;
  cardBgColor?: string;
  iconBgColor: string;
  textColor?: string;
  subtitleStyle?: any;
  onClick?: () => any;
  clickable?: boolean;
}

const CallToActionCard: React.FC<ICallToActionCardProps> = (props) => {
  const icon = props.icon as IconTypes;
  let IconToBeRendered;

  if (typeof props.icon === 'string') {
    IconToBeRendered = <Icon icon={icon} size="max-content" />;
  } else {
    IconToBeRendered = props.icon;
  }

  return (
    <ActionCard
      cardBgColor={props.cardBgColor}
      textColor={props.textColor}
      onClick={props.onClick}
      clickable={props.clickable}
      id="action-card"
    >
      <IconBg iconBgColor={props.iconBgColor}>{IconToBeRendered}</IconBg>
      <Text type="h2" bold size="2.2vw">
        {props.title}
      </Text>
      <Text type="title" size="1.4vw" style={props.subtitleStyle}>
        {props.subTitle}
      </Text>
    </ActionCard>
  );
};

export default CallToActionCard;

const ActionCard = styled.div<{
  cardBgColor?: string;
  textColor?: string;
  clickable?: boolean | undefined;
}>`
  width: 22vw;
  height: fit-content;
  padding: 2vw 3vw;
  background: ${(props) => props.cardBgColor || '#ffffff'};
  border-radius: 20px;
  box-shadow: 0px 15px 30px rgba(12, 53, 89, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    cursor: ${(props) => (props.clickable ? 'pointer' : '')};
  }

  h2 {
    color: ${(props) => props.textColor || '#0C3559'};
    line-height: 3.7vw;
  }

  h1 {
    color: ${(props) => props.textColor || '#0C3559'};
    line-height: 3vw;
  }

  @media (max-width: 530px) {
    width: 90vw;
    padding: 0;
    margin: 0;
    padding: 20px 0;

    h2 {
      font-size: 7vw;
      line-height: 6vh;
    }

    h1 {
      width: 80vw;
      font-size: 4vw !important;
      line-height: 3vh !important;
    }
  }
`;

const IconBg = styled.div<{ iconBgColor: string }>`
  width: 8vw;
  height: 8vw;
  background: ${(props) => props.iconBgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vw;

  svg {
    width: 4vw;
    height: 4vw;
  }

  @media (max-width: 530px) {
    width: 104px;
    height: 104px;
    margin-bottom: 6px;

    svg {
      width: 52px;
      height: 52px;
    }

    img {
      width: 52px;
      height: 52px;
    }
  }
`;
