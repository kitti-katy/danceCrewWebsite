/**
 * Created by kate on 10/24/17.
 */
import React from 'react';
const styleSH = {

    background: 'linear-gradient(to bottom, gainsboro , #F5F5F5)',
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: '0px 0px 1px 0px',
    width: '100%',
    marginBottom: '5%',
    color: 'rgb(65,65,65)',
    marginTop:'-2.1%',
    borderRadius:'3px',
    display:'flex',
    flexDirection:'column'


}


const SH = {
    paddingLeft: '2.5%',
    paddingTop: '0.5%',
    paddingBottom: '0.5%',
}
const AdminHeader = (props) => (

    <div style={styleSH}>
        <h1 style={SH}>{props.header}</h1>
    </div>
);
export default AdminHeader;
