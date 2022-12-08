import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

const Forms = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Mở tài khoản
          </CardTitle>
          <CardBody>
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
                <Label for="examplePassword">Số tài khoản ngân hàng</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="nhập số tài khoản ngân hàng"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Ngày sinh</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="nhập ngày sinh"
                  type="password"
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
                  Tạo user
                </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
