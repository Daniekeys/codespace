import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
// import TiArrowSortedDown from "@material-ui/icons/ExpandMore";
import {TiArrowSortedDown} from 'react-icons/ti'
import FeatureGame from "./FeatureGame";
import FeatureSupport from "./FeatureSupport";
import FeatureLeague from "./FeaturedLeague";
import InfluencerProgram from "./InfluencerProgram";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  headingClassActive: {
    backgroundColor: "#3333FF",
    color: "#fff",
    fontFamily: "Biome !important",
  },
  headingClass: {
    backgroundColor: "#020733",
    color: "#fff",
    fontFamily: "Biome !important",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "60.33%",
    },
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  headingA: {
    fontSize: theme.typography.pxToRem(15),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "80.33%",
    },
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  icon: {
    color: "#fff",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function MobileFeatures() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="lg:hidden" id="Features">
      <div className={classes.root} id="Feature">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<TiArrowSortedDown className={classes.icon} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={`${
              expanded === "panel1"
                ? classes.headingClassActive
                : classes.headingClass
            }`}
          >
            <Typography
              className={classes.heading}
              style={{ fontFamily: "Biome !important" }}
            >
              Featured Games
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FeatureGame />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<TiArrowSortedDown className={classes.icon} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className={`${
              expanded === "panel2"
                ? classes.headingClassActive
                : classes.headingClass
            }`}
          >
            <Typography
              className={classes.heading}
              style={{ fontFamily: "Biome !important" }}
            >
              Featured Leagues
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FeatureLeague />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<TiArrowSortedDown className={classes.icon} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            className={`${
              expanded === "panel3"
                ? classes.headingClassActive
                : classes.headingClass
            }`}
          >
            <Typography
              className={classes.headingA}
              style={{ fontFamily: "Biome !important" }}
            >
              Platforms supported
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FeatureSupport />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<TiArrowSortedDown className={classes.icon} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            className={`${
              expanded === "panel4"
                ? classes.headingClassActive
                : classes.headingClass
            }`}
          >
            <Typography
              className={classes.heading}
              style={{ fontFamily: "Biome !important" }}
            >
              Influencer Program
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <InfluencerProgram />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
