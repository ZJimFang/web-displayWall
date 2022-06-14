import React, { useState } from "react";
import Bar from "../public/Bar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { getDatabase, ref, query, get, orderByChild } from "firebase/database";
import { Box } from "@mui/system";

function createData(rank, name, calories) {
  return { rank, name, calories };
}

const LeaderBoard = () => {
  const db = getDatabase();
  const [rows, setRows] = useState([]);

  function getRank(group) {
    setRows([]);
    const que = query(ref(db, `projects/${group}`), orderByChild("total"));
    const rank = [];
    get(que)
      .then((snapshot) => {
        snapshot.forEach((item) => {
          rank.push(item.val());
        });
        return rank.reverse();
      })
      .then((rank) => {
        rank.forEach((element, index) => {
          console.log(element);
          setRows((prev) => [
            ...prev,
            createData(index + 1, element.name, element.total),
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Bar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: "30px",
        }}
      >
        <ButtonGroup variant="contained" sx={{ margin: "30px 0 30px 0" }}>
          <Button
            onClick={() => {
              getRank("c1");
            }}
          >
            C1
          </Button>
          <Button
            onClick={() => {
              getRank("c2");
            }}
          >
            C2
          </Button>
        </ButtonGroup>
        <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Rank</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.rank}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default LeaderBoard;
