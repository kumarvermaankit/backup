import React from 'react';
import styled from 'styled-components';
import SelectCreditsOption from './SelectCreditsOption';

interface Props {
  PricePerLicense: number;
  numberOfLicenses: number;
}

const PurchaseDetials: React.FC<Props> = ({
  PricePerLicense,
  numberOfLicenses
}) => {
  return (
    <PurchaseDetails>
      <PricePerLicenseStyles>
        <p>
          Price per license <span>(per month)</span>
        </p>
        <span className="amount">$ {PricePerLicense.toFixed(2)}</span>
      </PricePerLicenseStyles>
      <NumberOfResourcesStyles>
        <p>Number of licenses</p>
        <span>{numberOfLicenses}</span>
      </NumberOfResourcesStyles>
      <Total>
        <p>
          Total <span>(per month)</span>
        </p>
        <span>$ {(PricePerLicense * numberOfLicenses).toFixed(2)}</span>
      </Total>
      <SelectCreditsOption />
    </PurchaseDetails>
  );
};

export default PurchaseDetials;

const PurchaseDetails = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (max-width: 770px) {
    margin-top: 1.2rem;
  }
`;

const PricePerLicenseStyles = styled.div`
  display: flex;
  align-items: center;

  & > p {
    margin: 0;
    color: #4b4b4b;
    font-size: 16px;
    line-height: 24px;
    margin-right: auto;
    & > span {
      color: #4b4b4b;
    }

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  & > span {
    font-family: Mulish;
    color: #262626;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;

const NumberOfResourcesStyles = styled.div`
  display: flex;
  align-items: center;

  & > p {
    margin: 0;
    color: #4b4b4b;
    font-size: 16px;
    line-height: 24px;
    margin-right: auto;
  }

  & > span {
    font-family: Mulish;
    font-weight: bold;
    color: #4b4b4b;
    font-size: 20px;
    line-height: 28px;
    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  color: #262626;

  & > p {
    margin: 0;
    font-size: 20px;
    line-height: 32px;
    margin-right: auto;

    & > span {
      color: #4b4b4b;
      font-size: 16px;

      @media (max-width: 375px) {
        font-size: 12px;
      }
    }
    @media (max-width: 375px) {
      font-size: 16px;
    }
  }

  & > span {
    font-family: Mulish;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;

    @media (max-width: 375px) {
      font-size: 24px;
    }
  }
`;
