import React, { Component } from 'react';
import { Image } from '../../components';
import { CommenTable } from '../components';

export default class ImageView extends Component{
    render(){
        return (
            <div>
                <h3>Image fluid</h3>
                <div className="card card-block">
                    <Image fluid src="http://placehold.it/2500x350"/>
                </div>
                <h3>Image shape</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-4">
                            <Image rounded src="http://placehold.it/200x200"/>
                        </div>
                        <div className="col-sm-4">
                            <Image circle src="http://placehold.it/200x200"/>
                        </div>
                        <div className="col-sm-4">
                            <Image thumbnail src="http://placehold.it/200x200"/>
                        </div>
                    </div>
                </div>
                <h3>API</h3>
                <CommenTable
                    data = {[
                        ['fluid', '图片是否自适应', 'bool', 'false'],
                        ['rounded', '图片是否圆角', 'bool', 'false'],
                        ['circle', '图片是否为圆形', 'bool', 'false'],
                        ['thumbnail', '图片是否为缩略图', 'bool', 'false'],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}