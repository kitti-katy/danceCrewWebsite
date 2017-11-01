/**
 * Created by kate on 10/21/17.
 */
import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

export default class CrewMember extends Component {
    constructor(props){
        super(props)

        this.state = {
            pointing:false
        }

        this.toggleDescription = this.toggleDescription.bind(this)
    }

    toggleDescription(){
        this.setState({pointing:!this.state.pointing})
    }

    render(){
        return (
            <Paper onMouseEnter = {this.toggleDescription}
                   onMouseLeave = {this.toggleDescription}
                style={{...styleDiv, backgroundImage:"url("+this.props.source+")", backgroundSize:"contain", backgroundRepeat:"no-repeat"}} zDepth={1}> <img
                src={this.props.source} style={{width: '100%', opacity:0}}/>
                <div style={{backgroundColor:"white",
                    display:"relative"
                }}>
            <div style = {{ marginTop:this.state.pointing?"-25%":"0%", paddingTop:this.state.pointing?"1%":"0",

             transition:"margin-top 0.4s ease-out,padding-top 0.2s linear"}} >

                <h4 style={{color: '#737373'}}>{this.props.label}</h4>
                {<p style={{visibility:this.state.pointing?"visible":"hidden"}}>desrciption bla bla bla</p>}</div></div>
            </Paper>

        )
    }

}

const styleDiv = {
    textAlign: 'center',
    width:"23.5555555556%",
    color:'#737373',
    backgroundColor:'white',
    height:"325px", overflow:"hidden"
}