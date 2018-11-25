import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'General',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Model</FormLabel>
          <RadioGroup
            aria-label="Modules"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="General" control={<Radio />} label="General" />
            <FormControlLabel value="Apparel" control={<Radio />} label="Apparel" />
            <FormControlLabel value="Food" control={<Radio />} label="Food" />
            <FormControlLabel value="Celebrity" control={<Radio />} label="Celebrity" />
            <FormControlLabel value="Demographics" control={<Radio />} label="Demographics" />
            <FormControlLabel value="Moderation" control={<Radio />} label="Moderation" />
            <FormControlLabel value="Travel" control={<Radio />} label="Travel" />
            <FormControlLabel value="Weddings" control={<Radio />} label="Weddings" />
            <FormControlLabel value="Custom Training" control={<Radio />} label="Custom Training" />

          </RadioGroup>
        </FormControl>

      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
