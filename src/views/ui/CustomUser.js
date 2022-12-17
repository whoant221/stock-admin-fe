import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText, Table
} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import inforUser from "../../api/admin";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";


const tableData = [
  {
    avatar: user1,
    name: "ACB",
    adress: "Ngân hàng thương mại cổ phần đầu tư và phát triển việt nam",
    project: "234",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "BID",
    adress: "Tập đoàn xăng dầu Việt Nam",
    project: "4567",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "BVH",
    adress: "Tập đoàn Bảo Việt",
    project: "8907",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "CTG",
    adress: "Công ty cổ phần tập đoàn Hòa Phát",
    project: "809",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "FPT",
    adress: "Công ty cổ phần PFT",
    project: "54363",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];
const Cards = () => {
  
  const navigate = useNavigate();
  const [layout1, setLayout1] = useState('none');
  const [layout2, setLayout2] = useState('');
  const [assets, setAssets] = useState();
  const [assetsLock, setAssetsLock] = useState();
  const [sumAssets, setSumAssets] = useState();
  const [listStock, setListStock] = useState();

  // let coinVND = Intl.NumberFormat("vi-US", {
  //     style: "currency",
  //     currency: "VND",
  // });

  // useEffect(() => {
  //     const money = async ()  =>{
  //         try{
  //             const data = await inforUser.getListAssets()
  //             const findStock = data?.data?.assets.findIndex(items => items.name === 'VND');
  //             setAssets(coinVND.format(data?.data.assets[findStock].free_asset));
  //             setAssetsLock(coinVND.format(data?.data.assets[findStock].locked_asset));
  //             setSumAssets(coinVND.format(
  //                 Number.parseInt(data?.data.assets[findStock].free_asset) + 
  //                 Number.parseInt(data?.data.assets[findStock].locked_asset)
  //             ));

  //             setListStock(data.data.assets);

  //             // setListRender(listStock.splice(findStock, 1))
  //         }
  //         catch (err) {
  //             alert(err);
  //         }
  //     }
  //     money()
  // }, []);


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
                {tableData.map((tdata, index) => (
                  <tr key={index} className="border-top cursor" onClick={()=>{navigate('/customstock')}}>
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <img
                          src={tdata.avatar}
                          className="rounded-circle"
                          alt="avatar"
                          width="45"
                          height="45"
                        />
                        <div className="ms-3">
                          <h6 className="mb-0">{tdata.name}</h6>
                          <span className="text-muted font-05 name">{tdata.adress}</span>
                        </div>
                      </div>
                    </td>
                    <td>{tdata.project}</td>
                    {/* <td>{tdata.status}</td>
                    <td>{tdata.weeks}</td>
                    <td>{tdata.budget}</td> */}
                    <td>
                      {
                        tdata.status === "pending" 
                        ? ( <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span> ) 
                        : tdata.status === "holt" 
                        ? ( <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>) 
                        : ( <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>)
                      }
                    </td>
                    <td>{tdata.budget}</td>
                    <td>{tdata.budget}</td>
                    <td>{tdata.budget}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>

        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
