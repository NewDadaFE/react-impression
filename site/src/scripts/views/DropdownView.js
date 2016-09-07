import React, { Component, PropTypes } from 'react';
import { Card, Button, Dropdown, Row, Col, Notification } from '../components/impression';
import { CommenTable, Breadcrumb } from '../components';

export default class DropdownView extends Component {
    static propTypes = {
        routes: PropTypes.array,
    }
    // 菜单点击提醒
    menuClickHandle(message) {
        Notification.info({
            closeable: false,
            title: '菜单点击',
            message: `${message}被点击了！！！`,
        });
    }
    render() {
        return (
            <div>
                <Breadcrumb routes={this.props.routes} />
                <Card block noborder>
                    <h5>Basic</h5>
                    <Row>
                        <Col>
                            <Card block>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <Button theme="primary">Dropdown</Button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单一')}>
                                            菜单一
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单二')}>
                                            菜单二
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单三')}>
                                            菜单三
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuDivider />
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                                            菜单四
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                                            菜单五
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                                            菜单六
                                        </Dropdown.MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card>
                        </Col>
                        <Col>
                            <Card block>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <a href="javascript:void(0);">下拉菜单</a>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单一')}>
                                            菜单一
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单二')}>
                                            菜单二
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单三')}>
                                            菜单三
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuDivider />
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                                            菜单四
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                                            菜单五
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                                            菜单六
                                        </Dropdown.MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card>
                        </Col>
                    </Row>
                    <h5>Disabled</h5>
                    <Row>
                        <Col>
                            <Card block>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <Button theme="primary">Dropdown</Button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu>
                                        <Dropdown.MenuItem disabled onClick={() => this.menuClickHandle('菜单一')}>
                                            菜单一
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem disabled onClick={() => this.menuClickHandle('菜单二')}>
                                            菜单二
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem disabled onClick={() => this.menuClickHandle('菜单三')}>
                                            菜单三
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuDivider />
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                                            菜单四
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                                            菜单五
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                                            菜单六
                                        </Dropdown.MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card>
                        </Col>
                        <Col>
                            <Card block>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <a href="javascript:void(0);">下拉菜单</a>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu>
                                        <Dropdown.MenuItem disabled onClick={() => this.menuClickHandle('菜单一')}>
                                            菜单一
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem disabled onClick={() => this.menuClickHandle('菜单二')}>
                                            菜单二
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem disabled onClick={() => this.menuClickHandle('菜单三')}>
                                            菜单三
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuDivider />
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                                            菜单四
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                                            菜单五
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                                            菜单六
                                        </Dropdown.MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card>
                        </Col>
                    </Row>
                    <h5>Trigger</h5>
                    <Row>
                        <Col>
                            <Card block>
                                <Dropdown trigger="hover">
                                    <Dropdown.Trigger>
                                        <Button theme="primary">Dropdown</Button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单一')}>
                                            菜单一
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单二')}>
                                            菜单二
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单三')}>
                                            菜单三
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuDivider />
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                                            菜单四
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                                            菜单五
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                                            菜单六
                                        </Dropdown.MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card>
                        </Col>
                        <Col>
                            <Card block>
                                <Dropdown trigger="hover">
                                    <Dropdown.Trigger>
                                        <a href="javascript:void(0);">下拉菜单</a>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单一')}>
                                            菜单一
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单二')}>
                                            菜单二
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单三')}>
                                            菜单三
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuDivider />
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                                            菜单四
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                                            菜单五
                                        </Dropdown.MenuItem>
                                        <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                                            菜单六
                                        </Dropdown.MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card>
                        </Col>
                    </Row>
                    <h5>Dropdown API</h5>
                    <CommenTable
                        data={[
                            ['trigger', '设置触发动作，可选值为 click、hover', 'string', 'click'],
                            ['menus', '下拉菜单选项', 'array', ''],
                            ['onClick', '点击回调函数', 'function', ''],
                            ['children', '必填，子节点', 'element', ''],
                        ]}
                    />
                </Card>
                <Notification />
            </div>
        );
    }
}
