import React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip,
} from "@progress/kendo-react-charts";
import { getPerformance } from "../services/dataService";

export default function PerformancePanel() {
  const [data, setData] = React.useState<string[]>();
  React.useEffect(() => {
    var res = getPerformance();
      setData(res);
  }, []);

  return (
    <Chart>
      <ChartTitle text="Fund Performance" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={["2014", "2015", "2016", "2017", "2018", "2019", "2020"]} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" data={data} />
      </ChartSeries>
      <ChartTooltip render={(e: any) => (
        
        <div>{e.point ? e.point.value : ""}</div>
        
      )} />
    </Chart>
  )
}
