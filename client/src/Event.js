/**
 * Created by kate on 10/21/17.
 */
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500'
];

export default class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            pointing: false
        };
    }

    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div>
                <img onMouseEnter={()=> this.setState({pointing:true})}
                     onMouseLeave={()=> this.setState({pointing:false})}
                    onClick={() => this.setState({ isOpen: true })}
               src={images[1]} style={{width:this.state.pointing?"110%":"100%", height:this.state.pointing?"110%":"100%",
                    cursor:"pointer", transition:"width 0.2s linear,opacity 0.2s linear", opacity: this.state.pointing?1:0.8,
                    }} >

                </img>

                {isOpen &&
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() => this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })}
                    onMoveNextRequest={() => this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })}
                />
                }
            </div>
        );
    }
}