/**
 * Created by kate on 6/4/17.
 */
import React, {Component, PropTypes} from 'react';

class Carousel extends Component {
    constructor() {
        super()

        this.state = {
            currentlySelectedPage: 0,
            opacity: 1
        }


        window.addEventListener("resize", this.update)
        this.changePage = this.changePage.bind(this)
        this.handleWhatEver = this.handleWhatEver.bind(this)
this.handleOpacity = this.handleOpacity.bind(this)
        this.handleOpacity2 = this.handleOpacity2.bind(this)
    }

    static propTypes = {
        items: PropTypes.array, //.isRequired, //bool, func
        type: PropTypes.oneOf(["one", "two"]),
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        }),
        users: PropTypes.arrayOf(
            PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number}
        )),
        something: PropTypes.number
    }



handleWhatEver(event)
{
    console.log("a","b");
    this.setState({
        something:event.target.value
    })
}

    handleWhatEver2(event)
    {
        event.preventDefault() // prevent refreshing page
        console.log("a","b");
        this.setState({
            something:event.target.value
        })
    }

    handleOpacity()
    { console.log("a","entered");
        console.log("a",this.state.opacity);

        this.setState({
            opacity: 1
        })

        console.log("a",this.state.opacity);
    }
    handleOpacity2()
    {
        this.setState({
            opacity: 0.5
        })
    }

changePage(i)
{
    this.setState({currentlySelectedPage: i})
}
componentWillMount()
{

}

componentDidMount()
{

}

render()
{
    const imgStyle = {
        display: "inline",
       opacity:this.state.opacity ,
    transform : 'translate('+this.state.opacity*10+'px, '+this.state.opacity*10+'px)',
        transition: 'transform 1s linear'}



    return (
        <div className="something" style={{width: "100px", display: 'flex', justifyContent:'flex-end'}}
        ref = {(div)=> this.testDiv = div}
        >
            <img onMouseEnter={this.handleOpacity} onMouseLeave={this.handleOpacity2} style={imgStyle} src="https://pp.userapi.com/c637216/v637216133/3424a/c3DwkBKxF_Q.jpg"/>

        </div>
    );
}
}
export default Carousel;