import styled from 'styled-components';

export const SnapScrollCompEndToStart = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: end;
  scroll-snap-stop: always;

  @media (max-width: 1024px) {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;

export const SnapScrollComp = styled.div`
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
