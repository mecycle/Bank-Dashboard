import React from "react";
import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";
import { getPositions } from "../services/dataService";
import { Position } from "../data/models";

const ChangeCell = (props: GridCellProps) => {
  const value = props.dataItem[props.field || ""];
  return (
    <td style={{ color: value > 0 ? "green" : "red" }}>
      {value}
    </td>
  )
}

export default function PositionsPanel() {
  const [positions, setPositions] = React.useState<Position[]>();
  React.useEffect(() => {
    getPositions().then((data: Position[]) => {
      setPositions(data);
    });
  }, []);

  return (
    <Grid
  data={positions}
  style={{ height: 700 }}
>
  <GridColumn title="CustomerId" field="CustomerId" locked={true} width={100} />
  <GridColumn title="Surname" field="Surname" />
  {/* <GridColumn title="Change" field="Change" cell={ChangeCell} /> */}
 
  <GridColumn title="CreditScore" field="CreditScore" />
  <GridColumn title="Age" field="Age" />
  <GridColumn title="Balance" field="Balance" />
  <GridColumn title="Exited" field="Exited" cell={ChangeCell} />
</Grid>
  );
}
