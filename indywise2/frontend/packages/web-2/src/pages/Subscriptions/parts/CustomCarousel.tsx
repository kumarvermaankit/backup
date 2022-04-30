import React from 'react';
import Carousel from 'react-multi-carousel';
import { Icon } from '@indywise/uikit';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 1960, min: 1200 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1200, min: 530 },
    items: 2,
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
  children: React.ReactNode;
}

const CustomCarousel: React.FC<ICarousel> = ({ children }) => {
  const CarouselButtonLeft = {
    position: 'absolute',
    float: 'left',
    left: '-1vw'
  };

  const CarouselButtonRight = {
    position: 'absolute',
    float: 'right',
    right: '0vw'
  };

  const CustomRightArrow = ({ onClick, ...rest }: any) => (
    <Icon
      icon="rightArrow"
      size="76px"
      style={CarouselButtonRight}
      onClick={() => onClick()}
    />
  );

  const CustomBackArrow = ({ onClick, ...rest }: any) => (
    <Icon
      icon="backArrow"
      size="76px"
      style={CarouselButtonLeft}
      onClick={() => onClick()}
    />
  );

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="transform 200ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomBackArrow />}
      partialVisible
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
