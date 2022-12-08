import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText,} from "reactstrap";
  const Badges = () => {
    return (
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Tạo cổ phiếu
            </CardTitle>
            <CardBody>
              <Row className="mt-3">
                <Col xs="12">
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail">Mã SIC</Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="nhập mã SIC"
                            type="email"
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Tên ngành</Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="nhập tên ngành"
                            type="email"
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Giá chào sàn (x1,000)</Label>
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="nhập giá chào sàn (x1,000)"
                          type="password"
                        />
                      </FormGroup>
  
                        <Button className="btn" color="success">
                            Tạo cổ phiếu
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
  