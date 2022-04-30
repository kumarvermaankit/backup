import React from 'react';
import styled from 'styled-components';

const Switch: React.FC<{
  isOn: boolean;
  handleToggle: () => void;
  onColor: any;
  onClick?: () => void;
}> = (props) => {
  return (
    <>
      <Div isOn={props.isOn}>
        <input
          checked={props.isOn}
          onChange={props.handleToggle}
          id="switch"
          type="checkbox"
          onClick={props.onClick}
        />
        <label
          style={{ background: props.isOn && props.onColor }}
          htmlFor="switch"
        >
          <span />
        </label>
      </Div>
    </>
  );
};

export default Switch;

const Div = styled.div<{
  isOn: boolean;
}>`
margin-right: 12px;

  input{
    height: 0;
    width: 0;
    visibility: hidden;
    
    display: ${(props) => (props?.isOn ? 'none' : 'none')};
  }
  label{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 40px;
    height: 20px;
    background: #fff;
    border-radius: 15px;
    border: 1px solid ${(props) => (props?.isOn ? '#F8BD4F' : '#CBCBCB')};
    position: relative;
    transition: background-color .2s ease-in-out;
  }
  label span{
    content: '';
    position: absolute;
    /* top: 2px;
    left: 2px; */
    width: 18px;
    height: 18px;
    border: 1px solid ${(props) => (props?.isOn ? '#F8BD4F' : '#CBCBCB')};
    border-radius: 45px;
    transition: 0.2s ease-in-out;
    background: ${(props) =>
      props?.isOn
        ? 'linear-gradient(219.67deg, #A16A06 0%, #F8BD4F 59.05%);'
        : 'linear-gradient(219.67deg, #4B4B4B 0%, #CBCBCB 59.05%);'}
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  input:checked + label span{
    left: 100%;
    transform: translateX(-100%);
  }
  label:active span{
    width: 30px;
  }

  /* input:checked label span{
    border: 1px solid #A16A06;
    background: linear-gradient(219.67deg, #A16A06 0%, #F8BD4F 59.05%);
  } */
`;
/*
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;

  label span{
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  }
  label:active span{
    width: 60px;
  }
`; */
