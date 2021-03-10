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
    getPerformance().then((results: string[]) => {
      setData(results);
    })
  }, []);

  return (
    <Chart>
      <ChartTitle text="predictive possibilities" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={["log primal", "log pol2", "SVM RBF", "SVM POL", "RF", "XGB"]} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="bar" data={data} />
      </ChartSeries>
      <ChartTooltip render={(e: any) => (
        
        <div>{e.point ? e.point.value : ""}</div>
        
      )} />
    </Chart>
  )
}
