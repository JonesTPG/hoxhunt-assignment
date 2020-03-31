import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export interface HeroDetailProps {
  strength: number;
  intelligence: number;
  stamina: number;
  healthpoints: number;
  mana: number;
  agility: number;
  speed: number;
  resistance: string;
  weakness: string;
  backStory: string;
}

const useStyles = makeStyles({
  table: {},
  heading: {
    fontWeight: "bold"
  }
});

const HeroDetail: React.SFC<HeroDetailProps> = ({
  strength,
  intelligence,
  stamina,
  healthpoints,
  mana,
  agility,
  speed,
  resistance,
  weakness,
  backStory
}) => {
  const classes = useStyles();

  return (
    <>
      <h4>Backstory:</h4>
      <p>{backStory}</p>

      <h4>Attributes:</h4>

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="Statistics">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Stamina
              </TableCell>
              <TableCell align="right">{stamina}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Strength
              </TableCell>
              <TableCell align="right">{strength}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Intelligence
              </TableCell>
              <TableCell align="right">{intelligence}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Speed
              </TableCell>
              <TableCell align="right">{speed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Resistance
              </TableCell>
              <TableCell align="right">{resistance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Weakness
              </TableCell>
              <TableCell align="right">{weakness}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HeroDetail;
