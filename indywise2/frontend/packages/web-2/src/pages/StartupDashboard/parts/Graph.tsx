import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { Text, Icon } from '@indywise/uikit';
import { DropDownContainer, DropDown } from './UI-components';

interface ITimeline {
  date: {
    month: string;
    day: number;
    year: number;
  };
  wiseupscore: number;
}

const sortTimeline = (data: ITimeline[]) => {
  return data?.sort((a: ITimeline, b: ITimeline) => {
    return (
      new Date(`${a.date.day} ${a.date.month} ${a.date.year}`).valueOf() -
      new Date(`${b.date.day} ${b.date.month} ${b.date.year}`).valueOf()
    );
  });
};

const Graph: React.FC<{ timeline: any; mentees: any }> = (props) => {
  const [selectedMentee, setMentee] = React.useState<string>(
    props?.mentees[0]?.name || 'Select Name'
  );
  const [isDropDownVisible, toggleDropDown] = React.useState(false);
  const [currenTimeline, setCurrenTimeline] = React.useState<any[]>([]);

  React.useEffect(() => {
    setMentee(props?.mentees[0]?.name);
    setCurrenTimeline(props?.timeline[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.mentees, props?.timeline]);

  React.useEffect(() => {
    const filteredTimeline = props?.timeline?.filter((item: any[]) => {
      return item[0]?.menteeDetails?.name === selectedMentee;
    });

    if (filteredTimeline instanceof Array) {
      const res = filteredTimeline[0]?.map((item: any) => ({
        date: item.sessionDate,
        wiseupscore: item.wiseUpScore
      }));

      const sortedTimeline = sortTimeline(res);
      setCurrenTimeline(sortedTimeline);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMentee]);

  const options: any = {
    chart: {
      toolbar: {
        show: false
      },
      height: 324,
      type: 'area'
    },
    stroke: {
      width: 2,
      colors: ['#3C54AF', '#90C0EA', '#FAD897'],
      dashArray: [0, 3, 10],
      curve: 'smooth'
    },
    legend: {
      show: false
    },
    fill: {
      type: ['gradient', 'gradient', 'solid'],
      colors: ['#3C54AF', '#90C0EA', '#FAD897'],
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    // labels: ['May 10', 'May 15', 'May 26', 'June 11', 'June 25', 'July 11'],
    labels: currenTimeline?.map(
      (item: ITimeline) => `${item.date.month} ${item.date.day}`
    ),
    markers: {
      size: 4,
      colors: ['#3C54AF'],
      hover: {
        size: 7
      }
    },
    dataLabels: {
      enabled: false
    }
  };
  const series: any = [
    [
      {
        name: 'WiseUp Score',
        type: 'area',
        // data: [54.4, 56.2, 68.8, 80, 80.6, 86.2]
        data: currenTimeline?.map((item: ITimeline) => item.wiseupscore)
      }
    ]
  ];

  return (
    <Div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text type="title" color="#4B4B4B" style={{ marginLeft: '2rem' }}>
          WiseUp Scores
        </Text>
        <div>
          <DropDownContainer onClick={() => toggleDropDown(!isDropDownVisible)}>
            <div
              style={{
                border: '1px solid #317EC2',
                color: '#317EC2',
                borderRadius: '20px',
                padding: '4px 16px',
                fontFamily: 'Roboto',
                marginRight: '2rem',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>{selectedMentee}</span>
              <Icon icon="arrow" size="20px" color="#317EC2" />
            </div>
          </DropDownContainer>

          {isDropDownVisible && (
            <DropDown style={{ width: 'auto', paddingTop: 0 }}>
              {props?.mentees?.map((item: any) => (
                <DropDownItem onClick={() => setMentee(item?.name)}>
                  <div onClick={() => toggleDropDown(!isDropDownVisible)}>
                    {item?.name}
                  </div>
                </DropDownItem>
              ))}
            </DropDown>
          )}
        </div>
      </div>
      <>
        <ReactApexChart
          options={options}
          series={series[0]}
          type="area"
          height={324}
        />
      </>
    </Div>
  );
};

export default Graph;

const Div = styled.div`
  h1 {
    margin-top: 0;
  }
  @media (max-width: 1024px) {
    margin-bottom: 100px;
    h1 {
      margin-top: 48px;
    }
  }
`;

const DropDownItem = styled.div`
  cursor: pointer;
  padding: 0.8em 0.8em;
  &:hover,
  &:active,
  &:focus {
    font-weight: 700;
  }
`;
