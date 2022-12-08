import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  { title: "Đặt lệnh mua", icon: "bi bi-bell", color: "primary", date: "6 minute ago", },
  { title: "Đặt lệnh bán", icon: "bi bi-person", color: "info", date: "6 minute ago", },
  { title: "Mở tài khoản thành công", icon: "bi bi-hdd", color: "danger", date: "6 minute ago", },
  { title: "Mua thành công", icon: "bi bi-bag-check", color: "success", date: "6 minute ago", },
  { title: "Hủy lệnh thành công", icon: "bi bi-bell", color: "dark", date: "6 minute ago", },
  { title: "Đóng tài khoản #3302", icon: "bi bi-hdd", color: "warning", date: "6 minute ago",},
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Thông báo</CardTitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
