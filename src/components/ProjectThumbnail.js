import Col       from 'react-bootstrap/Col'
import Card      from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import { Link } from 'react-router-dom'

export default function GridThumbnail({ project }) {
  return (
    <>
      <Col md={6} lg={4} xl={3}>
        <Link to={`/Archive/${project.id}`} style={{textDecoration:"none"}}>
          <Card>
            <Card.Img variant="top" src={ project.thumbnail } alt={`${project.name} thumbnail`} loading="lazy"/>
            <Card.Body className="pb-2">
              <Card.Title className="">{ project.name }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ project.authors.map(name => ` ${name}`) + `, ${project.date}`}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <ListGroup.Item className="text-primary">{ project.tags.map(tag => `#${tag} `) }</ListGroup.Item>
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    </>
  )
}


