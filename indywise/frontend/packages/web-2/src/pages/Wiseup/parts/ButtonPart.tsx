import React from 'react';
import { Button } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { useAuth } from '../../../contexts/AuthContext';

export interface IButtonProps {
  page?: string;
  price?: string;
}

interface StyleProp {
  verticalAlign?: string;
  marginRight?: string;
  background?: string;
  filter?: string;
  color?: string;
}

const ButtonPart: React.FC<IButtonProps> = (props) => {
  const { business } = useAuth();

  const mailMessage = business
    ? `mailto:sales@indywise.com?subject=IndyWise WiseUp&body=Hi Team IndyWise! We are the startup ${business.organization_name} and we’re interested in the WiseUp program. I would like to enquire about training employees.`
    : `mailto:sales@indywise.com?subject=IndyWise WiseUp&body=Hi Team IndyWise! I am interested in the WiseUp program. I would like to enquire about training employees.`;

  const bStyle: StyleProp = {
    verticalAlign: 'top',
    marginRight: '2vw',
    background: '#3C54AF',
    filter: 'none',
    color: '#FFF'
  };

  if (props.page === 'why') delete bStyle?.filter;

  if (props.page === 'landing') {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none', color: '#042039' }}
        href={mailMessage}
      >
        <Button
          icon="arrow"
          iconAlign="right"
          iconRotate={-90}
          iconColor="#262626"
        >
          Contact Sales
        </Button>
      </a>
    );
  }

  return (
    <>
      <div>
        {props.page !== 'pricing' && (
          <Color>
            <Link
              to="/wiseup/#pricing"
              style={{ textDecoration: 'none', color: '#FFF' }}
            >
              <Button style={bStyle}>
                {props.page === 'why' ? 'Check Plan Pricing' : 'Check Pricing'}
              </Button>
            </Link>
          </Color>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', color: '#042039' }}
          href={mailMessage}
        >
          <Button
            icon="arrow"
            iconAlign="right"
            iconRotate={-90}
            iconColor="#262626"
          >
            {props.page === 'why' ? 'Apply Now' : 'Contact Sales'}
          </Button>
        </a>
      </div>
    </>
  );
};

export default ButtonPart;

const Color = styled.div`
  display: contents;
  a {
    button {
      span {
        p {
          color: #fff;
        }
      }
    }
  }
`;
