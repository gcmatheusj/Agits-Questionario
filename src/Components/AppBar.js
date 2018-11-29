import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1,
  },
}

function SimpleAppBar(props) {
  const { classes } = props 
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit">
              AGITS
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
  SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SimpleAppBar)