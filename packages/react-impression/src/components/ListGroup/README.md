### Example

**Simple Content**

```js
<Row>
  <Col>
    <h5>Normal</h5>
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem active>Lorem ipsum dolor.</ListGroupItem>
      <ListGroupItem>Lorem ipsum dolor sit.</ListGroupItem>
      <ListGroupItem disabled>Lorem ipsum.</ListGroupItem>
      <ListGroupItem>Lorem ipsum dolor sit.</ListGroupItem>
    </ListGroup>
  </Col>
  <Col>
    <h5>Tags</h5>
    <ListGroup>
      <ListGroupItem>
        <Tag theme="default" className="pull-right" shape="pill">1</Tag>
        lorem
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="warning" className="pull-right" shape="pill">2</Tag>
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="danger" className="pull-right" shape="pill">3</Tag>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="success" className="pull-right" shape="pill">4</Tag>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem>
        <Tag theme="primary" className="pull-right" shape="pill">5</Tag>
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  </Col>
  <Col>
    <h5>Link</h5>
    <ListGroup>
      <ListGroupItem href="javascript:void(0)">Lorem ipsum dolor.</ListGroupItem>
      <ListGroupItem href="javascript:void(0)">Lorem ipsum dolor sit.</ListGroupItem>
      <ListGroupItem href="javascript:void(0)" active>
        Lorem ipsum dolor sit amet.
      </ListGroupItem>
      <ListGroupItem href="javascript:void(0)">Lorem ipsum dolor.</ListGroupItem>
      <ListGroupItem href="javascript:void(0)">Lorem ipsum.</ListGroupItem>
    </ListGroup>
  </Col>
</Row>
```

**Custom Content**

```js
<Row>
  <Col col="6">
      <ListGroup>
        <ListGroupItem href="javascript:void(0)">
          <h5>List group item heading</h5>
          <div>
              Donec id elit non mi porta gravida at eget metus.
              Maecenas sed diam eget risus varius blandit.
          </div>
        </ListGroupItem>
        <ListGroupItem href="javascript:void(0)">
          <h5>List group item heading</h5>
          <div>
              Donec id elit non mi porta gravida at eget metus.
              Maecenas sed diam eget risus varius blandit.
          </div>
        </ListGroupItem>
        <ListGroupItem href="javascript:void(0)" active>
          <h5>List group item heading</h5>
          <div>
              Donec id elit non mi porta gravida at eget metus.
              Maecenas sed diam eget risus varius blandit.
          </div>
        </ListGroupItem>
        <ListGroupItem href="javascript:void(0)" disabled>
          <h5>List group item heading</h5>
          <div>
              Donec id elit non mi porta gravida at eget metus.
              Maecenas sed diam eget risus varius blandit.
          </div>
        </ListGroupItem>
      </ListGroup>
  </Col>
</Row>
```
