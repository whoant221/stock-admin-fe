import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText,
} from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";

const Badges = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            
            <Row>
              <Col xs="6" sm="2">
                Cập nhật cổ phiếu
              </Col>
              <Col xs="6" sm="2">
                Cập nhật cổ phiếu
              </Col>
            </Row>

          </CardTitle>
          
          <CardBody>
            <Row className="mt-3">
              <Col xs="6" sm="4">
                <div className="align-items-center p-2 ms-3">
                  <img
                    src={user1}
                    className="avata"
                    alt="avatar"
                    width="200"
                    height="200"
                  />
                  <div className="mt-2">
                    <h6 className="mb-1">Phúc Thanh</h6>
                    <div className="text-muted font-05">Địa chỉ: 144A Chi Lăng p12 Thành Phố Vũng Tàu</div>
                    <div className="text-muted font-05">Số điện thoại 0962571879</div>
                  </div>

                  <Button className="btn mt-3" color="danger">
                    Đóng tài khoản
                  </Button>
                </div>

              </Col>

              <Col
                sm="12"
                md={{
                  size: 8,
                }}
              >
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Họ và tên</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="nhập họ tên khách hàng"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Số điện thoại</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="nhập số điện thoại khách hàng"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Địa chỉ</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="nhập địa chỉ khách hàng"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Mật khẩu</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="nhập mật khẩu"
                      type="password"
                    />
                  </FormGroup>

                    <Button className="btn" color="success">
                      Lưu
                    </Button>
                </Form>
              </Col>

            </Row>
        </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Badges;
