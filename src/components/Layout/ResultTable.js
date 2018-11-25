import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FilledTextFields from './textf';

  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class SimpleTable extends React.Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {name: '10', value: ''};
  }

  handleInputChange(name,value) {
    this.setState({name: name,value: value});
  }

  render() {
    const name = this.state.name;
    const value = this.state.value;

    return (
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>cameraID</TableCell>
              <TableCell numeric>target type</TableCell>
              <TableCell numeric>startframe (s)</TableCell>
              <TableCell numeric>endframe (s)</TableCell>
              <TableCell numeric>precision (percent)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow key='sdf'>
                  <TableCell component="th" scope="row">
                    <FilledTextFields
                      onInputChange={this.handleInputChange}
                    />
                    <label
                      value={name}
                      onChange={this.handleInputChange}
                    />
                  </TableCell>
                  <TableCell numeric>Person</TableCell>
                  <TableCell numeric>1</TableCell>
                  <TableCell numeric>2</TableCell>
                  <TableCell numeric>4</TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
