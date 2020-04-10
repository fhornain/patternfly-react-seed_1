import * as React from 'react';
import ReactDOM from "react-dom";
import { PageSection, Title } from '@patternfly/react-core';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';

const Test: React.FunctionComponent<{}> = () => {

return(
    <PageSection>
      <Title size="lg">Test Page Title</Title>

  <div style={{ height: '200px', width: '800px' }}>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Area chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={200}
      maxDomain={{y: 9}}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      width={800}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid/>
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: '2015', y: 3 },
            { name: 'Cats', x: '2016', y: 4 },
            { name: 'Cats', x: '2017', y: 8 },
            { name: 'Cats', x: '2018', y: 6 }
          ]}
          interpolation="monotoneX"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 3 },
            { name: 'Dogs', x: '2017', y: 4 },
            { name: 'Dogs', x: '2018', y: 5 },
            { name: 'Dogs', x: '2019', y: 6 }
          ]}
          interpolation="monotoneX"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: '2015', y: 1 },
            { name: 'Birds', x: '2016', y: 2 },
            { name: 'Birds', x: '2017', y: 3 },
            { name: 'Birds', x: '2018', y: 2 },
            { name: 'Birds', x: '2019', y: 4 }
          ]}
          interpolation="monotoneX"
        />
      </ChartGroup>
    </Chart>
  </div>
    </PageSection>
)
}

export { Test };
