import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Selector1 from './TargetSelect';
import Selector2 from './SelectPrecision';
import Selector3 from './SelectorMod';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 500,
  },
});


class FilledTextFields extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '1', value: 'http://'};

    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.props.onInputChange(target.name, target.value);
  }

  render() {
    const { classes } = this.props;
    const cameraID = this.props.name;
    const url = this.props.value;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <label> Camera ID </label>
        <input
          id="filled-name"
          label="Camera ID"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
          variant="filled"
        />



        <label> URL </label>
        <input
          id="filled-full-width"
          label="URL"
          className={classes.textField}
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="normal"
          variant="filled"
          value={this.state.value}
          onChange={this.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Selector1/>


        <Selector2/>
        <Selector3/>
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);
