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
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
// import Rating from '@material-ui/lab/Rating';
import Switch from '@material-ui/core/Switch';
import Dollar from '../../../assets/Dollar 24px.svg';
import Rupee from '../../../assets/Rupee 24px.svg';

const FilterModal: React.FC<{ currency: string }> = ({ currency }) => {
  // React.useEffect(() => {
  //   setPriceContext(currency);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const {
    getPrice,
    // getRating,
    getFreeSession,
    getExp,
    updateExp,
    updatePrice,
    // updateRating,
    updateFreeSession,
    clearAllFilters,
    updateSelectedExp,
    updateSelectedPrice,
    updateSelectedRating,
    defaultPriceRange
  } = React.useContext(NewMentorsListContext);

  //PRICE STATE
  const priceRangeMin = defaultPriceRange()[0]; // Lower limit
  const priceRangeMax = defaultPriceRange()[1]; // Upper limit

  const [priceRange, setPriceRange] = React.useState<number[]>([]);

  const price = getPrice();

  // const rating = getRating();
  const freeSession = getFreeSession();

  //EXPERIENCE STATE
  const [isValueChanged, setIsValueChanged] = React.useState(false);
  const [range, setRange] = React.useState<number[]>([]);
  const rangeMin = 0;
  const rangeMax = 20;

  const exp = getExp();

  const classes = useStyles();

  const handleChange = (event: any, value: number | number[]) => {
    updateExp(value as number[]);
  };

  const handlePriceChange = (event: any, value: number | number[]) => {
    updatePrice(value as number[]);
  };

  const handleFSChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFreeSession(event.target.checked);
  };

  // const handleRatingChange = (event: any, value: number | null) => {
  //   updateRating(value as number);
  // };

  React.useEffect(() => {
    handleSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValueChanged]);

  const handleClearSkills = () => {
    clearAllFilters('filter');
    if (isValueChanged) {
      setIsValueChanged(false);
      // clearExp();
      // clearPrice();
      // clearRating();
      // searchMentors('');
    }
  };

  const handleSave = () => {
    updateSelectedExp();
    updateSelectedPrice();
    updateSelectedRating();
    // updateFilterPill();
  };

  React.useEffect(() => {
    // updateExp([0, 20]);
    // updatePrice([0, 20000]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setRange(exp);

    if (exp[0] === 0 && exp[1] === 20) {
      setIsValueChanged(false);
    } else {
      setIsValueChanged(true);
    }
    setPriceRange(price);

    if (price[0] === 0 && price[1] === 40000) {
      setIsValueChanged(false);
    } else {
      setIsValueChanged(true);
    }

    // if (rating === null) {
    //   setIsValueChanged(false);
    // } else {
    //   setIsValueChanged(true);
    // }

    if (freeSession === null) {
      setIsValueChanged(false);
    } else {
      setIsValueChanged(true);
    }
  }, [exp, price, priceRangeMin, priceRangeMax, freeSession]);

  const AntSwitch = withStyles((theme: Theme) =>
    createStyles({
      root: {
        width: 28,
        height: 16,
        display: 'flex',
        padding: '0px 0px 1px 0px'
      },
      switchBase: {
        padding: '2px',
        color: theme.palette.grey[500],
        '&$checked': {
          transform: 'translateX(12px)',
          color: '#F8BD4F',
          '& + $track': {
            opacity: 1,
            backgroundColor: '#FAEFD9',
            borderColor: '#F8BD4F'
          }
        }
      },
      thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none'
      },
      track: {
        border: '1px solid #F8BD4F',
        borderRadius: 10,
        opacity: 1,
        backgroundColor: '#FFF'
      },
      checked: {}
    })
  )(Switch);

  return (
    <>
      <PriceFilterWrapper>
        <div>
          {/* <div className={classes.root}>
            <Text bold={true} type="body" size="16px">
              Rating
            </Text>
            <Value style={{ margin: '8% 0' }}>
              <Text type="body" size="20px">
                {rating === null
                  ? 'Please Select Rating'
                  : rating === 5
                  ? 'Only 5 Stars'
                  : 'More than ' + rating}
              </Text>
            </Value>
            <Rating size="large" value={rating} onChange={handleRatingChange} />
          </div> */}
          <div
            className={classes.root}
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <Text type="body" size="16px">
                FREE Exploratory Session
              </Text>
              <Value style={{ margin: '8% 0' }}>
                <Text type="body" size="12px" color="#727272">
                  Show only mentors offering 30m FREE Exploratory Session
                </Text>
              </Value>
            </div>
            <div>
              <AntSwitch
                checked={freeSession}
                onChange={handleFSChange}
                name="checkedC"
              />
            </div>
          </div>
        </div>
        <hr style={{ margin: '6% 0', opacity: '0.4' }} />
        <div style={{ marginTop: '5%' }}>
          <div className={classes.root}>
            <Text
              bold={true}
              type="body"
              size="16px"
              style={{ marginBottom: '10%' }}
            >
              Experience
            </Text>
            <Value style={{ margin: '8% 0', width: '20rem' }}>
              <Text type="body" size="20px">
                More than {exp[0]}, less than {exp[1]} years
              </Text>
            </Value>
            <AirbnbSlider
              style={{ width: '23rem' }}
              ThumbComponent={AirbnbThumbComponent}
              defaultValue={exp}
              value={getExp()}
              onChange={handleChange}
              max={rangeMax}
              min={rangeMin}
            />
          </div>

          <Flex>
            <Value>
              <div style={{ marginTop: '1rem' }}>
                <Text type="body" size="20px">
                  {range[0]}y
                </Text>
              </div>
            </Value>
            <Value>
              <div style={{ marginTop: '1rem' }}>
                <Text type="body" size="20px">
                  {range[1] === rangeMax ? range[1] + 'y+' : range[1] + 'y'}
                </Text>
              </div>
            </Value>
          </Flex>
        </div>
        <hr style={{ margin: '6% 0', opacity: '0.4' }} />
        <div style={{ marginTop: '10%' }}>
          <div className={classes.root}>
            <Text
              bold={true}
              type="body"
              size="16px"
              style={{ marginBottom: '10%' }}
            >
              Price
            </Text>
            <Value style={{ margin: '8% 0', width: '20rem' }}>
              <Text type="body" size="20px">
                {currency === 'usd' ? (
                  <>
                    ${price[0]} - ${price[1]}
                  </>
                ) : (
                  <>
                    ₹{price[0]} - ₹{price[1]}
                  </>
                )}
              </Text>
            </Value>
            <AirbnbSlider
              style={{ width: '23rem' }}
              ThumbComponent={AirbnbThumbComponent}
              defaultValue={price}
              value={getPrice()}
              onChange={handlePriceChange}
              max={priceRangeMax}
              min={priceRangeMin}
            />
          </div>

          <Flex>
            <Value>
              <div style={{ marginTop: '1rem', display: 'flex' }}>
                {currency === 'usd' ? (
                  <img
                    src={Dollar}
                    alt="dollar"
                    style={{
                      width: '1.5rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                ) : (
                  <img
                    src={Rupee}
                    alt="rupee"
                    style={{
                      width: '1.5rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                )}

                <Text type="body" size="20px">
                  {priceRange[0]}
                </Text>
              </div>
            </Value>
            <Value>
              <div style={{ marginTop: '1rem', display: 'flex' }}>
                {currency === 'usd' ? (
                  <img
                    src={Dollar}
                    alt="dollar"
                    style={{
                      width: '1.5rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                ) : (
                  <img
                    src={Rupee}
                    alt="dollar"
                    style={{
                      width: '1.5rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                )}
                <Text type="body" size="20px">
                  {priceRange[1] === priceRangeMax
                    ? priceRange[1] + '+'
                    : priceRange[1]}
                </Text>
              </div>
            </Value>
          </Flex>
        </div>
        <Flex>
          <TextBtnWrapper
            style={{ backgroundColor: 'white' }}
            isActive={isValueChanged}
            onClick={handleClearSkills}
          >
            <Text>Clear All</Text>
          </TextBtnWrapper>
          <TextBtnWrapper isActive={true} onClick={handleSave}>
            <Text>Apply Filters</Text>
          </TextBtnWrapper>
        </Flex>
      </PriceFilterWrapper>

      <MobileFilterWrapper>
        <div style={{ height: '50%' }}>
          {/* <div className={classes.root}>
            <Text bold={true} type="body" size="16px">
              Rating
            </Text>
            <Value style={{ margin: '8% 0' }}>
              <Text type="body" size="20px">
                {rating === null
                  ? 'Please Select Rating'
                  : rating === 5
                    ? 'Only 5 Stars'
                    : 'More than ' + rating}
              </Text>
            </Value>
            <Rating size="large" value={rating} onChange={handleRatingChange} />
          </div> */}
          <div
            className={classes.root}
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <Text type="body" size="16px">
                FREE Exploratory Session
              </Text>
              <Value style={{ margin: '8% 0' }}>
                <Text type="body" size="12px" color="#727272">
                  Show only mentors offering 30m FREE Exploratory Session
                </Text>
              </Value>
            </div>
            <div>
              <AntSwitch
                checked={freeSession}
                onChange={handleFSChange}
                name="checkedC"
              />
            </div>
          </div>
        </div>
        <hr style={{ margin: '6% 0', opacity: '0.4' }} />
        <div style={{ marginTop: '5%' }}>
          <div className={classes.root}>
            <Text
              bold={true}
              type="body"
              size="16px"
              style={{ marginBottom: '10%' }}
            >
              Experience
            </Text>
            <Value style={{ margin: '8% 0', width: '20rem' }}>
              <Text type="body" size="20px">
                More than {exp[0]}, less than {exp[1]} years
              </Text>
            </Value>
            <AirbnbSlider
              style={{ width: '12rem' }}
              ThumbComponent={AirbnbThumbComponent}
              defaultValue={exp}
              value={getExp()}
              onChange={handleChange}
              max={rangeMax}
              min={rangeMin}
            />
          </div>

          <Flex>
            <Value>
              <div style={{ marginTop: '1rem' }}>
                <Text type="body" size="20px">
                  {range[0]}y
                </Text>
              </div>
            </Value>
            <Value>
              <div style={{ marginTop: '1rem', marginLeft: '9rem' }}>
                <Text type="body" size="20px">
                  {range[1] === rangeMax ? range[1] + 'y+' : range[1] + 'y'}
                </Text>
              </div>
            </Value>
          </Flex>
        </div>
        <hr style={{ margin: '6% 0', opacity: '0.4' }} />
        <div style={{ marginTop: '10%' }}>
          <div className={classes.root}>
            <Text
              bold={true}
              type="body"
              size="16px"
              style={{ marginBottom: '10%' }}
            >
              Price
            </Text>
            <Value style={{ margin: '8% 0', width: '20rem' }}>
              <Text type="body" size="20px">
                {currency === 'usd' ? (
                  <>
                    ${price[0]} - ${price[1]}
                  </>
                ) : (
                  <>
                    ₹{price[0]} - ₹{price[1]}
                  </>
                )}
              </Text>
            </Value>
            <AirbnbSlider
              style={{ width: '12rem' }}
              ThumbComponent={AirbnbThumbComponent}
              defaultValue={price}
              value={getPrice()}
              onChange={handlePriceChange}
              max={priceRangeMax}
              min={priceRangeMin}
            />
          </div>

          <Flex>
            <Value>
              <div style={{ marginTop: '1rem', display: 'flex' }}>
                {currency === 'usd' ? (
                  <img
                    src={Dollar}
                    alt="dollar"
                    style={{
                      width: '1rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                ) : (
                  <img
                    src={Rupee}
                    alt="rupee"
                    style={{
                      width: '1rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                )}
                <Text type="body" size="20px">
                  {priceRange[0]}
                </Text>
              </div>
            </Value>
            <Value>
              <div
                style={{
                  marginTop: '1rem',
                  marginLeft: '7rem',
                  display: 'flex'
                }}
              >
                {currency === 'usd' ? (
                  <img
                    src={Dollar}
                    alt="dollar"
                    style={{
                      width: '1rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                ) : (
                  <img
                    src={Rupee}
                    alt="rupee"
                    style={{
                      width: '1rem',
                      position: 'relative',
                      bottom: '1px'
                    }}
                  ></img>
                )}
                <Text type="body" size="20px">
                  {priceRange[1] === priceRangeMax
                    ? priceRange[1] + '+'
                    : priceRange[1]}
                </Text>
              </div>
            </Value>
          </Flex>
        </div>
        <Flex>
          <TextBtnWrapper
            style={{ backgroundColor: 'white' }}
            isActive={isValueChanged}
            onClick={handleClearSkills}
          >
            <Text>Clear All</Text>
          </TextBtnWrapper>
          <TextBtnWrapper
            style={{ width: '15rem', marginRight: '-2rem' }}
            isActive={true}
            onClick={handleSave}
          >
            <Text>Apply Filters</Text>
          </TextBtnWrapper>
        </Flex>
      </MobileFilterWrapper>
    </>
  );
};

export default FilterModal;

const PriceFilterWrapper = styled.div`
  display: none;
  @media (min-width: 750px) {
    display: initial;
    position: absolute;
    width: 400px;
    height: 620px;
    padding: 40px;
    background: #ffffff;
    box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
    border-radius: 20px;
    z-index: 1;
    position: absolute;
    top: 2.5rem;
    right: 0;
  }

  @media (max-width: 530px) {
    right: auto;
    div {
      margin-right: 0% !important;
    }
  }
`;

const MobileFilterWrapper = styled.div`
  display: none;
  @media (max-width: 750px) {
    background-color: red;

    display: initial;
    position: absolute;
    width: 210px;

    padding: 40px;
    background: #ffffff;
    box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
    border-radius: 20px;
    z-index: 1;
    position: absolute;
    top: 2.5rem;
    right: 13px;
  }
  @media (max-width: 414px) {
    display: initial;
    position: absolute;
    top: 2.5rem;
    right: -2rem;
  }
`;

const TextBtnWrapper = styled.div<{ isActive: boolean }>`
  background-color: #ffb326;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 8px;
  width: 152px;
  height: 44px;
  margin: 2rem 0;
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
