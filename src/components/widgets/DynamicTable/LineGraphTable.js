import { VictoryLine } from "victory"
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";


const cellStyle = {
    fontSize: 'calc(6px + 0.2vw)',
    padding: 0,
    color: '#383874'
}

const tableData = [ 
    {
        name: "Presentation",
        amount: "862",
        color: "#8676FF",
        graphData: [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 3 },
            { x: 6, y: 5 },
            { x: 7, y: 4 },
            { x: 8, y: 3 }
          ]
    }, 
    {
        name: "Development",
        amount: "753",
        color: "#FF708B",
        graphData: [
            { x: 1, y: 5 },
            { x: 2, y: 2 },
            { x: 3, y: 1 },
            { x: 4, y: 5 },
            { x: 5, y: 2 },
            { x: 6, y: 3 },
            { x: 7, y: 3 },
            { x: 8, y: 5 }
          ]
    }, 
    {
        name: "Research",
        amount: "553",
        color: "#FFBA69",
        graphData: [
            { x: 1, y: 2 },
            { x: 2, y: 4 },
            { x: 3, y: 3 },
            { x: 4, y: 1 },
            { x: 5, y: 4 },
            { x: 6, y: 5 },
            { x: 7, y: 2 },
            { x: 8, y: 5 }
          ]
    }, 
]


export default function LineGraphTable() {
  console.log(tableCellClasses.root);
  return (
    <TableContainer >
      <Table
        size="small"
        sx={{
            overflow: "hidden",
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}
      >
        <TableBody>
          {tableData.map((tableData) => (
            <TableRow
              key={tableData.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              enableResizing
            >
              <TableCell component="th" scope="tableData" sx={cellStyle}>{tableData.name}</TableCell>
              <TableCell align="right" sx={() => {
                const indCellStyle = {...cellStyle}
                indCellStyle.color = "rgba(146, 146, 193, 1)"
                return indCellStyle}}>{tableData.amount}</TableCell>
              <TableCell align="right" sx={cellStyle}><div className="lineGraph">
                        <VictoryLine 
                        interpolation="natural"
                        data={tableData.graphData}
                        style={{ data: { stroke: () => {
                            return tableData.color;
                        }, strokeWidth: 10, strokeLinecap: "round" } }}
                        padding={0}
                        domain={[0, 8]}
                        />
                    </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}