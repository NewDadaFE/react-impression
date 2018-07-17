### Example

**Basic**

```js
<Row>
  <Col>
    <Card>
      <Card.Block>
        <h4>Title</h4>
        <div>
          Some quick example text to build on the card title and
          make up the bulk of the card&apos;s content.
        </div>
      </Card.Block>
      <Image fluid src='http://placehold.it/350x200' />
      <Card.Block>
        <p>
          Some quick example text to build on the card title and
          make up the bulk of the card&apos;s content.
        </p>
        <Button theme='primary'>More</Button>
      </Card.Block>
    </Card>
  </Col>
  <Col>
    <Card>
      <Image fluid src='http://placehold.it/350x200' />
      <Card.Block>
        <h4>Title</h4>
        <p>
          ome quick example text to build on the card title and make
          up the bulk of the card&apos;s content.
        </p>
        <Button theme='primary'>Detail</Button>
      </Card.Block>
    </Card>
  </Col>
  <Col>
    <Card>
      <Card.Block>
        <p>
          Some quick example text to build on the card title and
          make up the bulk of the card&apos;s content.
        </p>
      </Card.Block>
      <Image fluid src='http://placehold.it/350x200' />
    </Card>
  </Col>
  <Col>
    <Card>
      <Card.Block>
        <p>
          Some quick example text to build on the card title and
          make up the bulk of the card&apos;s content.
        </p>
        <Button theme='primary'>OK</Button>
      </Card.Block>
    </Card>
  </Col>
</Row>
```

**Text align**

```js
<Row>
  <Col>
    <Card>
      <Image fluid src='http://placehold.it/350x200' />
      <Card.Block>
        <h4>Left</h4>
        <p>
          Some quick example text to build on the card title and
          make up the bulk of the card&apos;s content.
        </p>
        <a href='javascript:void(0);'>Card link</a>
        <a href='javascript:void(0);' className='offset-l'>
          Another link
        </a>
      </Card.Block>
    </Card>
  </Col>
  <Col>
    <Card className='text-center'>
      <Image fluid src='http://placehold.it/350x200' />
      <Card.Block>
        <h4>Center</h4>
        <p>
          Some quick example text to build on the card title and
          make up the bulk of the card&apos;s content.
        </p>
        <a href='javascript:void(0);'>Card link</a>
        <a href='javascript:void(0);' className='offset-l'>
          Another link
        </a>
      </Card.Block>
    </Card>
  </Col>
  <Col>
    <Card className='text-right'>
      <Image fluid src='http://placehold.it/350x200' />
      <Card.Block>
        <h4>Right</h4>
        <p>
          Some quick example text to build on the card title and
          make up the bulk of the card&apos;s content.
        </p>
        <a href='javascript:void(0);'>Card link</a>
        <a href='javascript:void(0);' className='offset-l'>
          Another link
        </a>
      </Card.Block>
    </Card>
  </Col>
</Row>
```