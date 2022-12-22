import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText, Table
} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import admin from "../../api/admin";




const Cards = () => {
  
  const navigate = useNavigate();
  const [layout1, setLayout1] = useState('none');
  const [layout2, setLayout2] = useState('');
  const [assets, setAssets] = useState();
  const [assetsLock, setAssetsLock] = useState();
  const [sumAssets, setSumAssets] = useState();
  const [listStock, setListStock] = useState();

  const [report, setReport] = useState([]);

  useEffect(() => {
    const money = async ()  =>{
      try{
        const data = await admin.getAssets()
        setReport(data.data.assets);
      }
      catch (err) {
        window.location.reload();
      }
    }
    money()
  }, []);
  console.log(report);

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0"> 
            <Row>
              <Col xs="6" sm="2" onClick={()=> {
                setLayout1('none')
                setLayout2('')
              }}>
                Tài sản người dùng 
              </Col>
              <Col xs="6" sm="2" onClick={()=> {
                setLayout1('block')
                setLayout2('none')
              }}>
                Cập nhật thông tin
              </Col>
            </Row>

          </CardTitle>

          <CardBody style={{display: layout1}}>
            <Row className="mt-3" >
              
              <Col xs="6" sm="4">
                <div className="align-items-center p-2 ms-3">
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

                  <FormGroup>
                    <Label for="exampleFile">Avatar</Label>
                    <Input id="exampleFile" name="file" type="file" />
                    <FormText>
                      Chọn file ảnh để hiển thị ảnh đại diện
                    </FormText>
                  </FormGroup>
                    <Button className="btn" color="success">
                      Lưu
                    </Button>
                </Form>
              </Col>

            </Row>

            
          </CardBody>

          <CardBody style={{display: layout2}}>
            <Table className="no-wrap mt-3 align-middle" responsive borderless >
              <thead>
              <tr>
                  <th>Cổ phiếu</th>
                  <th>Tổng giá cổ phiếu sở hữu</th>
                  <th>Giá sở hữu</th>
                  <th>Giá khóa</th>
                </tr>
              </thead>

              <tbody>

                  <tr className="border-top cursor" onClick={()=>{navigate('/customstock')}}>
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h6 className="mb-0">ACB</h6>
                          <span className="text-muted font-05 name">Ngần hàng ACB</span>
                        </div>
                      </div>
                    </td>
                    <td>894</td>
                    <td>1000023</td>
                    <td>435252</td>
                  </tr>
     
              </tbody>
            </Table>
          </CardBody>

        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
