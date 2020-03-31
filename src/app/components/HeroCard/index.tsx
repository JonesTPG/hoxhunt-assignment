// It is your job to implement this. More info in README

import * as React from "react";
import { Skill } from "src/app/common/types";
import styled from "styled-components";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Carousel from "react-material-ui-carousel";
import HeroDetail from "../HeroDetail/index";
import HeroSkill from "../HeroSkill/index";

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  strength: number;
  intelligence: number;
  stamina: number;
  healthpoints: number;
  mana: number;
  agility: number;
  speed: number;
  resistance: string;
  weakness: string;
  skills: Skill[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minHeight: 480,
      fontFamily: "Montserrat"
    },
    media: {
      height: 0,
      paddingTop: "56.25%"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    },
    heroName: {
      textAlign: "center"
    }
  })
);

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
  backStory,
  strength,
  intelligence,
  stamina,
  healthpoints,
  mana,
  agility,
  speed,
  resistance,
  weakness,
  skills
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <h3 className={classes.heroName}>{name}</h3>

      <CardMedia className={classes.media} image={imgUrl} title="Paella dish" />
      <CardContent>
        <h4>Description:</h4>

        <p>{description}</p>

        <h4>Skills:</h4>

        <List>
          {skills.map(skill => (
            <React.Fragment key={skill.name}>
              <ListItem>
                <Grid container>
                  <HeroSkill skill={skill} />
                </Grid>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <HeroDetail
            strength={strength}
            intelligence={intelligence}
            stamina={stamina}
            healthpoints={healthpoints}
            mana={mana}
            agility={agility}
            speed={speed}
            resistance={resistance}
            weakness={weakness}
            backStory={backStory}
          ></HeroDetail>
        </CardContent>
      </Collapse>
    </Card>
  );
};
