import React from "react";
import { connect } from "react-redux";
import { getUsername } from "../../redux/auth/auth-selectors.js";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
}));

function LetterAvatar({ name }) {
  const classes = useStyles();
  const spacePosition = name.indexOf(" ");
  const avatarName =
    name.slice(0, 1) + name.slice(spacePosition + 1, spacePosition + 2);

  console.log(spacePosition, name, avatarName);
  return (
    <div className={classes.root}>
      <Avatar className={classes.purple}>{avatarName}</Avatar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  name: getUsername(state),
});
export default connect(mapStateToProps)(LetterAvatar);
