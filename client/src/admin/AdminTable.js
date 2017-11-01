/**
 * Created by kate on 10/22/17.
 */
import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default class AdminTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: [1],
        };

        this.isSelected = this.isSelected.bind(this)
        this.handleRowSelection = this.handleRowSelection.bind(this)
    }
    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };


    render() {
console.log("RECEIVED")
        console.log(Object.values(this.props.body))

        return (
            <Table onRowSelection={this.handleRowSelection}>
                <TableHeader>
                    <TableRow>
                        { this.props.header.map((r,i) => (
                        <TableHeaderColumn>{r}</TableHeaderColumn>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>{
                console.log("BODY:" + Object.values(this.props.body))}
                    {
                   this.props.body.map((row,i) =>(
                    <TableRow selected={this.isSelected(i)}>
                        {  Object.values(row).map((v,l) => (
                            <TableRowColumn>{v}</TableRowColumn>)) }

                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }

}