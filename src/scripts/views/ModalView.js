import React, { Component } from 'react';
import { Modal, Button } from '../components';

export default class ModalView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Modal>
                                <Modal.Header>
                                    <button type="button" className="close">
                                        &times;
                                    </button>
                                    <h5 className="modal-title">Modal title</h5>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>One fine body&hellip;</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button style="default">Close</Button>
                                    <Button style="primary">Save</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}