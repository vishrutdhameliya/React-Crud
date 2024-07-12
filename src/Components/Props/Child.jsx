import React from "react";
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
const Child = (props) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{props.Title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.SubTitle}
          </CardSubtitle>
        </CardBody>
        <img alt="Card cap" width="100%" />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Child;
