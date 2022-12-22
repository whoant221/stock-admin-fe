import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText,} from "reactstrap";
import { useEffect, useState } from 'react';
import admin from "../../api/admin";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const Badges = () => {
    const navigate = useNavigate();

    const [SIC, setSIC] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [notifi, setnotifi] = useState();


    const AddStock = async () => {
      if ( SIC == '' || name == '' || price == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
      else {
          try{
              const res = await admin.postAddStock({
                  name: name,
                  symbol: SIC,
                  initial_price: price,
              });
              if (res.success === false) setnotifi(res.errorMessage)
              else {
                  toast.success(`${res.data.message}`);
                  navigate('/');
              }
          }
          catch (err) {
              toast.error(`${err.response.data.errorMessage}`);
          }
      }
    }


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
                            type="text"
                            onChange={(e) => setSIC(e.target.value)}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Tên ngành</Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="nhập tên ngành"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Giá chào sàn (x1,000)</Label>
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="nhập giá chào sàn (x1,000)"
                          type="text"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </FormGroup>
  
                        <Button className="btn" color="success" onClick={AddStock}>
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
  