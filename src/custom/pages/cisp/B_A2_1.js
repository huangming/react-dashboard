import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import s from '../../../pages/tables/Static.module.scss';

class B_A2_1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
      ],
    };

    this.checkAll = this.checkAll.bind(this);
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(' ');
    return `${date.toLocaleString('en-us', { month: 'long' })} ${this.dateSet[2]}, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    const { checkboxes1, checkboxes2, checkboxes3 } = this.state;
    if(checkbox === "checkboxes1") {
      const checkedBox1 = checkboxes1[id] = ev.target.checked;
      this.setState({
        checkedBox1
      }) 
    } else if (checkbox === "checkboxes2") {
      const checkedBox2 = checkboxes2[id] = ev.target.checked;
      this.setState({
        checkedBox2,
      })      
    } else {
      const checkedBox3 = checkboxes3[id] = ev.target.checked;
      this.setState({
        checkedBox3
      })  
    }


    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>CISP</BreadcrumbItem>
          <BreadcrumbItem active>B-A2-1</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title mb-lg">A2-1<span className="fw-semi-bold">客户资产状况表</span></h1>
        <Row>
          <Col lg={12}>
            <Widget
              title={<h5>特别关注客户</h5>} settings close
            >
              <div className="table-responsive">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td><a href="#">ottoto@example.com</a></td>
                      <td><Badge color="gray" className="text-gray" pill>Pending</Badge></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td><a href="#">fat.thor@example.com</a></td>
                      <td><Badge color="gray" className="text-gray-light" pill>Unconfirmed</Badge></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td><a href="#">larry@example.com</a></td>
                      <td><Badge color="gray" className="text-gray" pill>New</Badge></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter</td>
                      <td>Horadnia</td>
                      <td><a href="#">peter@example.com</a></td>
                      <td><Badge color="gray" className="text-gray-light" pill>Active</Badge></td>
                    </tr>
                  </tbody>
                  {/* eslint-enable */}
                </Table>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }

}

export default B_A2_1;
