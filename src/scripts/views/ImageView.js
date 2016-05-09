import React, { Component } from 'react';
import { Image } from '../components';
;
export default class ImageView extends Component{
    render(){
        return (
            <div>
                <h3>Image fluid</h3>
                <div className="card card-block">
                    <Image shape="fluid" src="http://placehold.it/2500x350"/>
                </div>
                <h3>Image shape</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-4">
                            <Image shape="rounded" src="http://placehold.it/200x200"/>
                        </div>
                        <div className="col-sm-4">
                            <Image shape="circle" src="http://placehold.it/200x200"/>
                        </div>
                        <div className="col-sm-4">
                            <Image shape="thubnail" src="http://placehold.it/200x200"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}