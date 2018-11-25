import React from 'react';
import { delGrid } from './../../reducer';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onDelGridClick: (id) => {
      dispatch(delGrid(id));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    gridColor: state.gridColor
  };
}

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCamera: false,
      colorForThisGrid: this.props.gridColor
    }
    this.cameraHandler = this.cameraHandler.bind(this);
  }

  cameraHandler = function () {
    this.setState({
      isCamera: !this.state.isCamera,
    });
  }


  render() {
    const GridStyle = {
      grid: {
        backgroundColor: this.state.colorForThisGrid,
        borderRadius: "2.5px",
      },
      removeStyle: {
        position: "absolute",
        right: "2px",
        top: 0,
        cursor: "pointer"
      }
    }

    let id = this.props.i;
    return (
      <div {...this.props} style={{ ...this.props.style, ...GridStyle.grid }}>

        <span style={GridStyle.removeStyle} onClick={this.props.onDelGridClick.bind(this.props, id)}> x </span>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
