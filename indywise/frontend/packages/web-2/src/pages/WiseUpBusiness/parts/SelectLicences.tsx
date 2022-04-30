import React from 'react';
import { Button } from '@indywise/uikit';
import styled from 'styled-components';
import NumberOfLicenses from './NumberOfLicenses';
import PurchaseDetials from './PurchaseDetails';
import ApplyRecurentMonths from './ApplyRecurrentMonths';

const SelectLicenses: React.FC = () => {
  const [numberOfLicenses, setNumberOfLicenses] = React.useState(1);

  const [checked, setChecked] = React.useState(true);
  const PricePerLicense = 99;

  const handleNumberOfLicenseSelect = (e: any, newValue: any) => {
    setNumberOfLicenses(newValue);
  };

  const handleSwitchBoxChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <SelectLicensesStyles>
      <h2>Select number of fresh licenses</h2>

      <NumberOfLicenses
        value={numberOfLicenses}
        onSliderChange={handleNumberOfLicenseSelect}
      />

      <PurchaseDetials
        PricePerLicense={PricePerLicense}
        numberOfLicenses={numberOfLicenses}
      />

      <ProceedToPayStyles>
        <ApplyRecurentMonths
          checked={checked}
          handleChange={handleSwitchBoxChange}
        />

        <Button
          color="primary"
          icon="arrow"
          iconAlign="right"
          iconRotate={270}
          iconColor="#262626"
          style={{
            filter: 'drop-shadow(0px 8px 16px rgba(242, 169, 34, 0.32))'
          }}
        >
          Proceed to Pay
        </Button>
      </ProceedToPayStyles>
    </SelectLicensesStyles>
  );
};

export default SelectLicenses;

const SelectLicensesStyles = styled.div`
  margin-left: 4rem;
  flex: 1 0 0;
  padding: 40px 0 40px 0;
  font-family: Roboto;
  display: flex;
  flex-direction: column;

  @media (max-width: 770px) {
    margin: 2rem 0;
    padding: 20px 0 40px 0;
  }

  & > h2 {
    font-size: 32px;
    line-height: 48px;
    font-weight: bold;
    color: #4b4b4b;
    @media (max-width: 375px) {
      font-size: 28px;
    }
  }
`;

const ProceedToPayStyles = styled.div`
  display: flex;

  @media (max-width: 460px) {
    flex-direction: column;

    & > button {
      margin-top: 5px;
      align-self: flex-end;
    }
  }

  & > :first-child {
    color: #4b4b4b;
    font-size: 16px;
    line-height: 24px;
    margin-right: auto;

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
`;
