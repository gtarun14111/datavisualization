import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function createData(name, data, amount, icon) {
  return { name, data, amount, icon };
}

const cellStyle = {
    fontSize: 'calc(6px + 0.2vw)',
    padding: 0,
    color: '#383874'
}

const rows = [
  createData("Travel", 760, "2,540", <ArrowDropUpIcon />),
  createData("Presentation", 650, "2,304", <ArrowDropDownIcon />),
  createData("Business", 612, "2,140", <ArrowDropUpIcon />),
];

export default function IndicatorTable() {
  console.log(tableCellClasses.root);
  return (
    <TableContainer >
      <Table
        size="small"
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}
      >
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              enableResizing
            >
              <TableCell component="th" scope="row" sx={cellStyle}>{row.name}</TableCell>
              <TableCell align="right" sx={() => {
                const indCellStyle = {...cellStyle}
                indCellStyle.color = "rgba(146, 146, 193, 1)"
                return indCellStyle}}>{row.data}</TableCell>
              <TableCell align="right" sx={cellStyle}>{row.amount}</TableCell>
              <TableCell align="right" sx={cellStyle}>{row.icon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
