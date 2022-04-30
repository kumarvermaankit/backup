import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

// Dialog imports
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1001 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1001, min: 515 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 515, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const testimonials = [
  {
    name: 'Ankoor Dasgupta',
    testimonial:
      'The concept of a community driven model built on trust with the intent of sharing and giving back to the society from real on-ground learnings is a deep rooted need. IndyWise is wisely filling this gap. When IndyWise reached out to me, the first thing that I felt was the seriousness , the dedication to enable such a platform with various programs for potential mentees. With the vast experience of our growing mentor network , we also learn from each other and apart from best practices, also think about next practices. This is also because there are subject matter experts from various domains and functions. I look forward to mentoring sessions and thankful to IndyWise for conceptualizing and making me a part of this value driven community.',
    position: 'Mentor',
    link: 'https://indywise.com/mentor/ankoor_dasguupta',
    show: false,
    img:
      'https://drive.google.com/uc?export=view&id=1he3DQDjjE6q6-ftfjxhgmvAQCsjsPc9X'
  },
  {
    name: 'Deepti Kocherlakota',
    testimonial:
      'IndyWise is a fantastic platform connecting insightful mentors with knowledge seeking mentees. I have been on this platform for almost an year and have mentored young folks from India and Italy. Their Wise Up program provides a data driven assessment scorecard for the mentor and mentee to identify gaps and make their subsequent conversations more result oriented. If you as a mentee are looking for a mentor, then your search stops with IndyWise!',
    position: 'Mentor',
    link: 'https://indywise.com/mentor/deeptikocherlakota',
    show: false,
    img:
      'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/assets/DeeptiKS.jpeg'
  },
  {
    name: 'Dnyanesh Vaidya',
    testimonial: `After reaching at a certain point in the career journey, we look back at the mistakes we made and the lessons learned in a hard way. We realize the need of a good mentor at every stage of the career journey is very crucial. Indywise has made a splendid effort to bring the seekers and the mentors on one platform in an easy way. I have joined Indywise a few months ago and experienced many good things here like an apt digital process from appointment booking,  till giving feedback. Everything is designed with a system adherence to it. Also, the support from Indywise team is excellent in terms of response time and query resolution in an empathetic way. Looking forward for a good long term alliance with Team Indywise. Thanks!`,
    position: 'Mentor',
    link: 'https://indywise.com/mentor/dnyanesh_dileep_vaidya',
    show: false,
    img:
      'https://drive.google.com/uc?export=view&id=1IJEbfuCqSwjwK4hedXJlW7213nxCUywT'
  },
  {
    name: 'Harshdip Singh',
    testimonial: `IndyWise is a great initiative for connecting mentors with mentees seeking direction on something. I have been on this platform for less than a year, but have connected with multiple mentees from India. Some of them had just graduated while some of them were successfully running their startups. This is a wonderful opportunity to share experiences and help each other grow.
    Consulting on your areas of expertise not only helps the mentees but also helps the mentor grow. Each consulting experience brings its own challenges and is insightful. If you are a mentee and looking for some direction, then your search stops with IndyWise. Search and select the most suited mentor for you.`,
    position: 'Mentor',
    link: 'https://indywise.com/mentor/harshdipsingh',
    show: false,
    img:
      'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/Harshdip.jpeg'
  },
  {
    name: 'Quresh Lakdawala',
    testimonial:
      'I am very grateful for the mentorship Deepak Verma has given me through IndyWise Platform over the past five sessions. Having the opportunity to learn from him, has made a substantial change in my career. When we first began our sessions, I never imagined I would have been able to make as much progress as I have. His training in static code analysis, test-driven development, and many more essential coding standards that I should follow as a beginner has helped me a lot in my current internship and also helped me in delivering a high-quality product. I am also very much thankful to the whole IndyWise team who has helped me a lot and gave me this opportunity. Thank you.',
    position: 'Mentee',
    show: false,
    img:
      'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/Quresh.jpeg'
  },
  {
    name: 'Mohammed Shamir',
    testimonial:
      "Through the company where I was interning, I had a fantastic experience with IndyWise's Mentored Upskilling programme. I was stuck in the middle of developing a web application and didn't know where to start. My mentor provided me with useful process insights, shared his experience, and directed me to a solution, which was all I needed. Despite the fact that my mentorship was technical in nature, he also advised me on professional etiquettes. This created a lasting impression on me, and it is something I would absolutely practise. I would like to thank Puneet Jindal, my mentor, for providing me with actionable advice, sharing his expert knowledge apart from guided upskilling which helped me in many ways.",
    position: 'Mentee',
    show: false,
    img:
      'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/Shamir.jpeg'
  },
  {
    name: 'Lavneesh Jaggi',
    testimonial:
      'Vivek Kumar is a great mentor, he explained everything thoroughly. He was very patient and cleared my doubts along the way in a crystal clear manner. Vivek Kumar also fixed the errors that I faced while making the application and under his guidance I was able to learn a lot. Thank you, IndyWise.',
    position: 'Mentee',
    show: false,
    img:
      'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/Lavneesh.jpeg'
  }
];

function NewTestimonials() {
  const [open, setOpen] = useState(false);
  const [toShow, setToShow] = useState(testimonials[0]);
  const fullWidth = true;
  const maxWidth = 'xs';

  const handleClickOpen = (e: any, index: number) => {
    console.log(e);
    setOpen(true);
    setToShow(testimonials[index]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HeadText>Testimonials</HeadText>
      <CustomCarouselDiv>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          keyBoardControl={true}
          customTransition="transform 200ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testimonials.map((t, index) => (
            <MainDiv>
              <Image src={t.img} alt="Mentor" />
              {t.link ? (
                <a href={t.link}>
                  <NameText style={{ marginBottom: '2px', marginTop: '32px' }}>
                    {t.name}
                  </NameText>
                </a>
              ) : (
                <NameText style={{ marginBottom: '2px', marginTop: '32px' }}>
                  {t.name}
                </NameText>
              )}
              <NameText style={{ fontWeight: 400, marginBottom: 0 }}>
                {t.position}
              </NameText>
              <TextDiv>
                <RegularText style={{ marginTop: '24px' }}>
                  {t.testimonial.slice(0, 160)}...
                  <ReadTestimonialButton
                    onClick={(e) => handleClickOpen(e, index)}
                  >
                    Read More
                  </ReadTestimonialButton>
                </RegularText>
              </TextDiv>
            </MainDiv>
          ))}
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogTitle id="max-width-dialog-title">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <HeadText
                  style={{
                    marginBottom: '20px',
                    marginTop: '28px',
                    paddingLeft: '0',
                    fontSize: '24px',
                    lineHeight: '32px'
                  }}
                >
                  Testimonial
                </HeadText>
                <Icon
                  icon="close"
                  onClick={handleClose}
                  style={{ cursor: 'pointer' }}
                ></Icon>
              </div>
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <img
                  src={toShow.img}
                  alt="Mentor"
                  height="240px"
                  width="240px"
                  style={{ borderRadius: '50%' }}
                />
                <NameText style={{ marginBottom: '2px', marginTop: '32px' }}>
                  {toShow.name}
                </NameText>
                <NameText style={{ fontWeight: 400, marginBottom: 0 }}>
                  {toShow.position}
                </NameText>
                <div style={{ marginTop: 0, marginBottom: 0 }}>
                  <RegularText
                    style={{ marginBottom: '24px', marginTop: '32px' }}
                  >
                    {toShow.testimonial}
                  </RegularText>
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Carousel>
      </CustomCarouselDiv>
    </>
  );
}

export default NewTestimonials;

const HeadText = styled.p`
  font-family: Mulish;
  font-size: 56px;
  font-style: normal;
  font-weight: 900;
  line-height: 56px;
  letter-spacing: 0em;
  color: #0c3559;
  margin-bottom: 0;
  @media (max-width: 501px) {
    font-size: 48px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

const TextDiv = styled.div`
  width: 240px;
  margin-top: 0;
  margin-bottom: 0;
`;

const Image = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 0;
  margin-top: 58px;
  border-radius: 50%;
`;

const CustomCarouselDiv = styled.div`
  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }

  .react-multi-carousel-list {
    margin: 0 auto;
    height: 600px;
    width: 940px;
    @media (max-width: 1001px) {
      width: 800px;
    }
    @media (max-width: 801px) {
      width: 515px;
    }
    @media (max-width: 515px) {
      width: 290px;
    }
  }
`;

const RegularText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #4b4b4b;
`;

const NameText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #262626;
  margin-top: 0;
`;

const ReadTestimonialButton = styled.button`
  background: white;
  text-decoration: underline;
  color: #cb870a;
  font-family: Roboto;
  font-weight: 400;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
