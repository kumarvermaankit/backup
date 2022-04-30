import React from 'react';

import ReactApexChart from 'react-apexcharts';

const MixedChart: React.FC<any> = ({ timeline }) => {
  const finalLabels =
    timeline?.map((t: any) => `Session ${t?.sessionNumber}`) || [];
  const options: any = {
    chart: {
      toolbar: {
        show: false
      },
      height: 150,
      type: 'line'
    },
    stroke: {
      width: 2,
      colors: ['#F2A922', '#90C0EA', '#FAD897'],
      dashArray: [0, 3, 10]
    },
    legend: {
      show: false
    },
    fill: {
      type: ['solid', 'gradient', 'solid'],
      colors: ['#F2A922', '#90C0EA', '#FAD897'],
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    // labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    labels: finalLabels,
    markers: {
      size: [7],
      colors: ['#F2A922']
    }
  };
  const series: any = [
    {
      name: 'WiseUp Score',
      type: 'area',
      data: timeline?.map((t: any) => t?.wiseUpScore)
      // data: [1.2, 2, 2.8, 4]
    }
    // {
    //   name: 'Y2',
    //   type: 'line',
    //   data: [0.8, 1.8, 4, 5]
    // },
    // {
    //   name: 'Y2',
    //   type: 'line',
    //   data: [1.2, 2, 2.8, 4]
    // }
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={188}
      />
    </div>
  );
};

export default MixedChart;
