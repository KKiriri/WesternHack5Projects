import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import { addGrid, modGrid } from '../../reducer';
import { connect } from 'react-redux';
import Grid from './../Grid/Grid';
import Position from './../Position/Position';
//import ColorPicker from './../ColorPicker/ColorPicker';

import { Button, ListGroup } from 'react-bootstrap';
import SteppedLineTo from 'react-lineto';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddGridClick: () => {
      dispatch(addGrid());
    }, onModGrid: (e) => {
      dispatch(modGrid(e));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    grids: state.grids,
    pageIndex: state.activePage
  };
}

class Canvas extends React.Component {
  showUpRooms = ["r1", "r2", "r5"]; //Input For Canvas

  indexHelper = function (index, array) {

  }

  render() {
    console.log(typeof this.props.pageIndex )
    return (
      <div>
        <Button bsStyle="primary" onClick={this.props.onAddGridClick}>Add Room</Button>

        {/* <ColorPicker /> */}

        <ListGroup>
          {this.props.grids.map((grid) => (<Position key={grid.i + "pos"}>{grid.i} - x:{grid.x}, y:{grid.y}, w:{grid.w}, h:{grid.h}</Position>))}
        </ListGroup>

        <ReactGridLayout onLayoutChange={this.props.onModGrid} className="layout" layout={this.props.grids} cols={12}
          rowHeight={30} width={1200} verticalCompact={false}>
          {this.props.grids.map((grid) => (<Grid key={grid.i} className={grid.i} {...grid}> {grid.i} </Grid>))}
        </ReactGridLayout>

        {this.props.pageIndex === 1 ? (this.showUpRooms.map((element, index, array) => (<SteppedLineTo from={array[index]} to={array[index + 1]} borderStyle={"dashed"} />))) : null}

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
