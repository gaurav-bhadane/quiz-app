import React, { useEffect } from 'react';
import JSC from 'jscharting';

// Assuming you have already imported the JSCharting library in your project
// Import JSC globally if needed
// import JSC from 'path-to-JSCharting';

const GaugeChart = () => {
  useEffect(() => {
    var chart = JSC.chart('chartDiv', { 
      debug: true, 
      type: 'gauge',  // Fixed typo
      legend_visible: false, 
      chartArea_boxVisible: false, 
      xAxis: { 
        /*Used to position marker on top of axis line.*/
        scale: { range: [0, 1], invert: true } 
      }, 
      palette: { 
        pointValue: '%yValue', 
        ranges: [ 
          { value: 350, color: '#FF5353' }, 
          { value: 600, color: '#FFD221' }, 
          { value: 700, color: '#77E6B4' }, 
          { value: [800, 850], color: '#21D683' } 
        ] 
      }, 
      yAxis: { 
        defaultTick: { padding: 13, enabled: false }, 
        customTicks: [600, 700, 800], 
        line: { 
          width: 15, 
          breaks_gap: 0.03, 
          color: 'smartPalette'
        }, 
        scale: { range: [350, 850] } 
      }, 
      defaultSeries: { 
        opacity: 1, 
        shape: { 
          label: { 
            align: 'center', 
            verticalAlign: 'middle'
          } 
        } 
      }, 
      series: [ 
        { 
          type: 'marker', 
          name: 'Score', 
          shape_label: { 
            text: 
              "720<br/> <span style='fontSize: 35'>Great!</span>", 
            style: { fontSize: 48 } 
          }, 
          defaultPoint: { 
            tooltip: '%yValue', 
            marker: { 
              outline: { 
                width: 10, 
                color: 'currentColor'
              }, 
              fill: 'white', 
              type: 'circle', 
              visible: true, 
              size: 30 
            } 
          }, 
          points: [[1, 720]] 
        } 
      ] 
    });
  }, []);

  return (
    <div id="chartDiv" style={{ maxWidth: '400px', height: '370px', margin: '0px auto' }}>
      {/* Chart will be rendered here */}
    </div>
  );
};

export default GaugeChart;
