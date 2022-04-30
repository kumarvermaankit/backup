import * as React from 'react';
import styled from 'styled-components';
import {
  withStyles,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Text } from '@indywise/uikit';
import { MenteesListContext } from '../../../contexts/MenteesListContext';

const ExperienceFilterModal: React.FC<{ updateFilterPill: () => void }> = ({
  updateFilterPill
}) => {
  const rangeMin = 0;
  const rangeMax = 20;
  const [isValueChanged, setIsValueChanged] = React.useState(false);
  const [range, setRange] = React.useState([]);

  const { updateExpFilter, clearExp, getExp, updateExp } = React.useContext(
    MenteesListContext
  );

  const exp = getExp();

  const classes = useStyles();

  const handleChange = (event: any, value: number | number[]) => {
    updateExp(value as number[]);
  };

  const handleClearSkills = () => {
    if (isValueChanged) {
      setIsValueChanged(false);
      clearExp();
    }
  };

  const handleSave = () => {
    updateExpFilter();
    updateFilterPill();
  };

  React.useEffect(() => {
    setRange(exp);

    if (exp[0] === 0 && exp[1] === 20) {
      setIsValueChanged(false);
    } else {
      setIsValueChanged(true);
    }
  }, [exp]);

  return (
    <PriceFilterWrapper>
      <Flex>
        <TextBtnWrapper isActive={isValueChanged} onClick={handleClearSkills}>
          <Text style={{ textDecoration: 'underline' }}>Clear All</Text>
        </TextBtnWrapper>
        <TextBtnWrapper isActive={true} onClick={handleSave}>
          <Text style={{ textDecoration: 'underline' }}>Save</Text>
        </TextBtnWrapper>
      </Flex>
      <div className={classes.root}>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          defaultValue={exp}
          onChange={handleChange}
          max={rangeMax}
          min={rangeMin}
        />
      </div>
      <Flex>
        <Text type="body" size="12px">
          Min
        </Text>
        <Text type="body" size="12px">
          Max
        </Text>
      </Flex>
      <Flex>
        <Value>
          <Text type="body" size="20px">
            {range[0]}y
          </Text>
        </Value>
        <Value>
          <Text type="body" size="20px">
            {range[1] === rangeMax ? range[1] + 'y+' : range[1] + 'y'}
          </Text>
        </Value>
      </Flex>
    </PriceFilterWrapper>
  );
};

export default ExperienceFilterModal;

const PriceFilterWrapper = styled.div`
  position: absolute;
  width: 250px;
  padding: 0 1.5rem;
  height: 142px;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
  border-radius: 10px;
  z-index: 1;
  position: absolute;
  top: 2.5rem;
  right: 0;

  @media (max-width: 530px) {
    div {
      margin-right: 0% !important;
    }
  }
`;

const TextBtnWrapper = styled.div<{ isActive: boolean }>`
  width: fit-content;
  height: fit-content;
  margin: 1rem 0 1.5rem 0;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};

  &:hover {
    cursor: ${(props) => (props.isActive ? 'pointer' : 'not-allowed')};
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Value = styled.div`
  display: flex;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 177 + theme.spacing(3) * 2
    },
    margin: {
      height: theme.spacing(3)
    }
  })
);

const AirbnbSlider = withStyles({
  root: {
    color: '#0C3559',
    height: 4,
    padding: '13px 0',
    margin: '0 0.5rem'
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#0C3559',
    border: '1px solid currentColor',
    marginTop: -9,
    boxShadow: '0px 6px 18px rgba(12, 53, 89, 0.35)',
    '&:focus, &:hover, &$active': {
      boxShadow: '0px 6px 18px rgba(12, 53, 89, 0.35)'
    },
    '& .bar': {
      backgroundColor: 'currentColor'
    }
  },
  active: {},
  track: {
    height: 4
  },
  rail: {
    color: '#7DA6CA',
    opacity: 1,
    height: 3
  }
})(Slider);

function AirbnbThumbComponent(props: any) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}
