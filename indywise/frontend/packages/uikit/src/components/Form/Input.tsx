import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5em;
  color: #0c3559;
  width: 100%;
  padding-bottom: 0.5em;
  margin-top: 2.25em;
  border: none;
  border-bottom: 1px solid #727272;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  &::placeholder {
    color: #4b4b4b;
  }

  &:focus {
    outline: none;
  }
`;
