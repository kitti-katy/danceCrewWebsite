import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SHead from './SHead.js'
import Event from "./Event";

const tilesData = [
    {
        img: 'https://pp.userapi.com/c837728/v837728584/40332/yZlXzKPtVJI.jpg',
        title: 'Breakfast',
        author: 'June 21, 2017',
    },
    {
        img: 'https://pp.userapi.com/c837728/v837728584/40356/ooLu6djerTc.jpg',
        title: 'Tasty burger',
        author: 'May 18, 2017',
    },
    {
        img: 'https://pp.userapi.com/c639117/v639117584/22452/R__o-R5abFI.jpg',
        title: 'Camera',
        author: 'May 12, 2017',
    },
    {
        img: 'https://pp.userapi.com/c639516/v639516584/33135/vH2LOEP1yjI.jpg',
        title: 'Morning',
        author: 'April 16, 2017',
    },
    {
        img: 'https://pp.userapi.com/c638024/v638024584/43856/sMypB9EShUI.jpg',
        title: 'Hats',
        author: 'April 1, 2017',
    },
    {
        img: 'https://pp.userapi.com/c638024/v638024584/4383a/2fPSZyYxsvk.jpg',
        title: 'Honey',
        author: 'March 26, 2017',
    },
    {
        img: 'https://pp.userapi.com/c837639/v837639584/2e0ff/O87_iIdNNv0.jpg',
        title: 'Vegetables',
        author: 'January 5, 2017',
    },

];


const Events = () => (<div><SHead header="Events"/>
        <div >

            <GridList
                cellHeight={250}
                cols={3}
            >

                {tilesData.map((tile) => (
                    <GridTile
                        key={tile.img}
                        title={tile.title}
                        subtitle={<span> <b>{tile.author}</b></span>}
                        style={{width: '100%', marginBottom: '51%'}}
                    >

                        <Event/>
                    </GridTile>
                ))}
            </GridList>
        </div>
    </div>
);

export default Events;