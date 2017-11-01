/**
 * Created by kate on 6/6/17.
 */
import React from 'react';
const styleSH = {

    backgroundColor: 'white',
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px 0',
    width: '120%',
    marginLeft: '-12.5%',
    marginTop: '10%',
    marginBottom: '5%',
    color: 'rgb(65,65,65)',

}


const SH = {
    paddingLeft: '10%',
    paddingTop: '1%',
    paddingBottom: '1%',
}
const SHead = (props) => (

    <div style={styleSH}>
        <h1 style={SH}>{props.header}</h1>
    </div>
);
export default SHead;
