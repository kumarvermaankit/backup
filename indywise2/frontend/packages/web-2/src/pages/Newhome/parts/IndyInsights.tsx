import * as React from 'react';
import styled from 'styled-components';
import Background from '../../../assets/YellowBg1.svg';

import { Text } from '@indywise/uikit';
import { useEffect } from 'react';
import axios from 'axios';

interface IBlog {
  pubDate: any;
}

const VideoSection: React.FC = () => {
  const [blogs, setBlogs] = React.useState<IBlog[]>([]);

  const [numBlogs, setNumBlogs] = React.useState(3);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40indywise'
        );
        setBlogs(res.data.items);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }

    window.addEventListener('resize', () => {
      if (window.screenX < 1030) {
        setNumBlogs(2);
      } else {
        setNumBlogs(3);
      }
    });
  }, []);

  return (
    <Wrapper>
      {/* <Text type="hl" bold size="4.5vw" color="#0C3559">
        How IndyWise Works
      </Text>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/icZspZSzlSw?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"
          width="100%"
          height="100%"
          title="IndyInsights"
        ></iframe>
      </VideoWrapper> */}
      {blogs?.length && blogs.length > 0 ? (
        <>
          <Text type="h4" bold size="4vw" color="#0C3559">
            Top Insights
          </Text>
          <CardsWrapper>
            {blogs
              ?.sort(
                ({ pubDate: previousDate }, { pubDate: currentDate }) =>
                  currentDate - previousDate
              )
              ?.slice(0, numBlogs)
              ?.map((post: any) => (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignSelf: 'center' }}
                >
                  <BlogArticleCard>
                    <CardTop thumbnail={post.thumbnail} />
                    <CardBottom>
                      <Text type="subtitle" size="1.3vw">
                        Medium Blog Article
                      </Text>
                      <Text type="h3" size="1.5vw">
                        {post.title}
                      </Text>
                    </CardBottom>
                  </BlogArticleCard>
                </a>
              ))}
          </CardsWrapper>
        </>
      ) : null}
    </Wrapper>
  );
};

export default VideoSection;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 12vh;
  margin-bottom: 12vh;

  h1 {
    color: #000;
    text-align: center;
    line-height: 5vw;
    padding-top: 20vh;
  }

  h4 {
    color: #000;
    text-align: center;
    line-height: 3vw;
    margin: 12vh auto;
  }

  @media (min-width: 900px) and (max-width: 1599px) {
    background-repeat: no-repeat;
    height: auto;
  }

  @media (max-width: 1030px) {
    h1 {
      padding-top: 10vh;
      margin-bottom: 5vh;
    }
    h4 {
      padding-top: 0;
      margin-bottom: 5vh;
    }
  }

  @media (max-width: 530px) {
    background-position: center;
    background-size: cover;
    height: auto;
    padding-top: 10vh;
    padding-bottom: 20vh;
    margin-bottom: 5rem;

    h1 {
      padding-top: 4rem;
      line-height: 2rem;
      font-size: 2rem;
    }
    h4 {
      margin-bottom: 4rem;
    }
  }
`;

const CardsWrapper = styled.div`
  max-width: 100%;
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  @media (max-width: 1030px) {
    justify-content: space-evenly;
    margin: 0 auto;
  }

  @media (max-width: 530px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
`;

const BlogArticleCard = styled.div`
  width: 25vw;
  height: 52vh;
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(12, 53, 89, 0.2);
  border-radius: 20px;
  margin-right: 2vw;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1366px) and (max-width: 1599px) {
    box-shadow: 0px 10.67px 21.34px rgba(12, 53, 89, 0.2);
  }

  @media (max-width: 1030px) {
    width: 300px;
    height: 280px;
  }

  @media (max-width: 530px) {
    width: 90vw;
    height: 24rem;
    margin-bottom: 1.875rem;
    margin-right: auto;
  }
`;

const CardTop = styled.div<{ thumbnail: any }>`
  background-image: url(${(props) => props.thumbnail});
  width: 100%;
  height: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  border-radius: 1.25rem 1.25rem 0px 0px;

  @media (max-width: 1030px) {
    height: 160px;
  }

  @media (max-width: 530px) {
    width: 100%;
    height: 13.625rem;
  }
`;

const CardBottom = styled.div`
  margin: 1vw 2vw 1.5vw 1.5vw;

  h2 {
    color: #0c3559;
    opacity: 0.5;
    line-height: 2vw;
  }

  h3 {
    line-height: 2vw;
    font-size: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  subtitle {
    font-size: 16px;
  }

  @media (max-width: 1030px) {
    h3 {
      font-size: 16px;
      line-height: 24px;
    }

    subtitle {
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (max-width: 530px) {
    margin: 17.7px 27.33px 0 27.33px;

    h2 {
      line-height: 1.5rem;
      font-size: 16px;
    }

    h3 {
      line-height: 1.8rem;
      font-size: 1.375rem;
    }
    subtitle {
      font-size: 12px;
    }
  }
`;

// const VideoWrapper = styled.div`
//   height: 73vh;
//   width: 75vw;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   margin: 15vh auto 12vh auto;
//   border-radius: 8px;
//   z-index: 1;

//   &:hover {
//     cursor: pointer;
//   }
//   iframe {
//     border-radius: 8px;
//     border: none;
//   }

//   @media (max-width: 1030px) {
//     height: 30vh;
//     margin: 5vh auto 12vh auto;
//   }

//   @media (max-width: 530px) {
//     height: 10.75rem;
//     width: 90vw;
//     border-radius: 8px;
//     margin: 4rem auto 3.625rem auto;

//     svg {
//       width: 2.69rem;
//       height: 2.69rem;
//     }
//   }
// `;
