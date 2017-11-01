/**
 * Created by kate on 10/21/17.
 */
import React, {Component, PropTypes} from 'react';
import Scrollchor from 'react-scrollchor';

export default class MyCustomTab extends Component {

    constructor(props){
        super(props)
        this.state = {
          hovered : false
        }
    this.toggleMouseHover = this.toggleMouseHover.bind(this)
    }

        toggleMouseHover(){
        this.setState({hovered:!this.state.hovered})
        }

        render(){

        return  <button style={{...styles,color:this.state.hovered?"purple":"rgb(51,51,51)"}}
                        onMouseEnter={this.toggleMouseHover}
                        onMouseLeave={this.toggleMouseHover}
                        onClick={(e)=> {this.props.changePage(this.props.index)
                        }}> <Scrollchor to={this.props.to}  style={{...styles,color:this.state.hovered?"purple":"rgb(51,51,51)"}}>
            {this.props.label} </Scrollchor> </button>
        }


}

const styles ={all: 'unset', width: '16.6666666667%', textTransform: 'uppercase', display:"inline"}