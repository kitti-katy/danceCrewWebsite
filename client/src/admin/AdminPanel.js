/**
 * Created by kate on 10/22/17.
 */
import React, {Component} from 'react'
import SHead from ".././SHead"
import AdminTable from "./AdminTable"
import AdminHeader from './AdminHeader'
let axios = require('axios')

let table ={
    header: ['id', 'name'],
    body: [['02314','name1']]
}

const styleAll = {

    paddingRight: '10%',
    paddingLeft: '10%',

}

const stylePanel = {

    backgroundColor: 'white',
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: '1px 1px 1px 1px',
    width: '100%',
    color: 'rgb(65,65,65)',
    marginTop: "10%",
    borderRadius:'3px'

}


export default class AdminPanel extends Component{

    constructor(props){
        super(props)

        this.state = {
            header:['id','name','event', 'date', 'description'],
            body:[[]]}

        this.componentDidMount = this.componentDidMount.bind(this)
        this.setBody = this.setBody.bind(this)
    }
setBody(body){
        this.setState({body})
}

componentDidMount(){
    var panel = this
    axios.post('http://localhost:4000/', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
        .then(function (response) {
            panel.setBody(response.data);
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
}


render(){




        return (
            <div style={styleAll}><div style={stylePanel} >
                <AdminHeader header="Events"/>
            <AdminTable header = { this.state.header} body={ this.state.body}/>
            </div>  </div>
        )
}
}