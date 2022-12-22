import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import admin from "../../api/admin";

const Forms = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState();
  const [password, setPassword] = useState('');

  const AddAdmin = async () => {
    if ( name == '' || password == '' || fullName == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
    else {
        try {
            const res = await admin.postAddAdmin({
                username: name,
                password: password,
                fullName: fullName,
            });
            if (res.success === false) toast.error("Tài khoản đã tồn tại !");
            else {
                toast.success("Tạo admin thành công !");
                navigate('/');
            }
        }
        catch (err) {
            toast.error('Không thể hỗ trợ tạo !');
        }
    }
}

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
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Tên sử dụng</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="nhập địa chỉ khách hàng"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Mật khẩu</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="nhập mật khẩu"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

                <Button className="btn" color="success" onClick={AddAdmin}>
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
