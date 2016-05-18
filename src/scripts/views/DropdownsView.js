import React, { Component } from 'react';
import { Card, Row, Col, Button, Dropdown } from  '../components';


export default class DropdownsView extends Component{
    render(){
        let menus = [{
            name: 'First menu'
        }, {
            name: 'Second menu'

        },{
            name: 'Third menu',
            active: true

        },'-', {
            disabled: true,
            name: 'Fourth menu'
        }];

        return (
            <div>
                <h3>Image fluid</h3>
                <Card block>
                    <Dropdown menus={menus}>
                        <button className="btn btn-primary dropdown-toggle" type="button">
                            Dropdown
                        </button>
                    </Dropdown>
                </Card>
            </div>
        );
    }
}