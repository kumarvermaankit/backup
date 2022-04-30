import React from 'react';
import Carousel from 'react-multi-carousel';
import { Icon } from '@indywise/uikit';
import 'react-multi-carousel/lib/styles.css';

const responsiveRM = {
  desktop: {
    breakpoint: { max: 1960, min: 1200 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1200, min: 530 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0
  }
};

const responsiveWE = {
  desktop: {
    breakpoint: { max: 1960, min: 1200 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1200, min: 530 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0
  }
};

interface ICarousel {
  section?: 'RM' | 'WE' | 'NEW';
  children: React.ReactNode;
}

const CustomCarousel: React.FC<ICarousel> = ({ children, section }) => {
  //New Styles

  const CustomButtonLeft = {
    position: 'absolute',
    float: 'left',
    marginTop: '20px',
    left: section === 'RM' ? '-18px' : '-18px'
  };

  const CustomButtonRight = {
    position: 'absolute',
    float: 'right',
    right: section === 'RM' ? '-2px' : '-18px',
    marginTop: '20px'
  };

  const NewCustomRightArrow = ({ onClick, ...rest }: any) => (
    <Icon
      icon="rightArrow"
      // If we change this to carouselRight, the styling works but onClick fails
      size="76px"
      style={CustomButtonRight}
      onClick={() => onClick()}
    />
  );

  const NewCustomBackArrow = ({ onClick, ...rest }: any) => (
    <Icon
      icon="backArrow"
      // If we change this to carouselLeft, the styling works but onClick fails
      size="76px"
      style={CustomButtonLeft}
      onClick={() => onClick()}
    />
  );

  //Old Styles
  const CarouselButtonLeft = {
    position: 'absolute',
    float: 'left',
    left: section === 'RM' ? '-18px' : '-18px'
  };

  const CarouselButtonRight = {
    position: 'absolute',
    float: 'right',
    right: section === 'RM' ? '-2px' : '-18px'
  };

  const CustomRightArrow = ({ onClick, ...rest }: any) => (
    <Icon
      icon="rightArrow"
      // If we change this to carouselRight, the styling works but onClick fails
      size="76px"
      style={CarouselButtonRight}
      onClick={() => onClick()}
    />
  );

  const CustomBackArrow = ({ onClick, ...rest }: any) => (
    <Icon
      icon="backArrow"
      // If we change this to carouselLeft, the styling works but onClick fails
      size="76px"
      style={CarouselButtonLeft}
      onClick={() => onClick()}
    />
  );

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={section === 'RM' ? responsiveRM : responsiveWE}
      ssr={true}
      infinite={false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="transform 200ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customRightArrow={
        section === 'NEW' ? <NewCustomRightArrow /> : <CustomRightArrow />
      }
      customLeftArrow={
        section === 'NEW' ? <NewCustomBackArrow /> : <CustomBackArrow />
      }
      partialVisible
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
