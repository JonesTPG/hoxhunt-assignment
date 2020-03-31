import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { HeroCard } from "../../components/HeroCard";

import { Skill } from "../../common/types";
import Grid from "@material-ui/core/Grid";

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      backStory
      strength
      intelligence
      stamina
      healthpoints
      mana
      agility
      speed
      resistance
      weakness
      skills {
        name
        damage
        element
      }
    }
  }
`;

interface IHeroIndexProps {}

interface IHero {
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
      padding: "20px"
    }
  })
);

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
  const classes = useStyles();
  const {
    data: { heroes },
    error,
    loading
  } = useQuery<{ heroes: IHero[] }>(HEROES_QUERY);

  if (error) {
    return handleError(error.message);
  }

  if (loading) {
    return handleLoading();
  }

  return (
    <main>
      <TopBar />
      <Hero />
      <Section
        heading={"Hunter Index"}
        paragraph={`
          Professor Hoax gave us this Hunter Index -tool 
          so we can see how our heroes manage against evildoers. 
          Unfortunately he forgot to implement their HeroCards. 
          It's your job to finish his work before we can continue
          on our journey together!
        `}
      />

      <Section
        heading={"The hero index"}
        paragraph={`
		  Check out the different heroes and their abilities here. 
		  You can view more detailed information by opening the dropdown.
        `}
      />
      <Grid className={classes.root} container spacing={5} justify="center">
        {heroes.map(hero => (
          <Grid key={hero.name} item>
            <HeroCard {...hero} />
          </Grid>
        ))}
      </Grid>

      <Footer />
    </main>
  );
};
