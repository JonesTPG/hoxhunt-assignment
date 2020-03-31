import * as React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import { Skill } from "src/app/common/types";

import Grid from "@material-ui/core/Grid";

export interface HeroSkillProps {
  skill: Skill;
}

const HeroSkill: React.SFC<HeroSkillProps> = ({ skill }) => {
  return (
    <>
      <Grid item xs={8}>
        <p>{skill.name}</p>
      </Grid>
      <Grid item xs={2}>
        <CircularProgress variant="static" value={skill.damage / 2} />
      </Grid>
      <Grid item xs={2}>
        <p>{skill.damage}</p>
      </Grid>
    </>
  );
};

export default HeroSkill;
