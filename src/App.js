import React, { Component } from "react";
import { FormGroup, Input, Form, Table } from "reactstrap";
import axios from "axios";

export default class App extends Component {
  state = {
    data: []
  };

  submitValues = e => {
    e.preventDefault();
    console.log(e.target.value);

    let value = document.getElementById("exampleSelect").value;
    console.log(value);

    axios.post(`http://localhost:5000/total/${value}`).then(res => {
      this.setState({ data: res.data });
    });
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios
      .get("http://localhost:5000/total")
      .then(res => {
        // console.log(res.data);
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <Form inline onChange={this.submitValues}>
              <FormGroup className="col-sm-9">
                <Input
                  className="col-sm-3"
                  type="select"
                  name="select"
                  id="exampleSelect"
                >
                  <option>Mech</option>
                  <option>CSE</option>
                  <option>ECE</option>
                  <option>EEE</option>
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>
        <hr />
        <div>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Section</th>
                <th>College</th>
                <th>Mobile Number</th>
                <th>Mother Name</th>
                <th>Father Name</th>
                <th>Age</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                const {
                  _id,
                  name,
                  department,
                  section,
                  college,
                  mobile_number,
                  mother_name,
                  father_name,
                  age,
                  height,
                  weight,
                  gender
                } = item;
                return (
                  <tr key={_id}>
                    <td>{_id}</td>
                    <td>{name}</td>
                    <td>{department}</td>
                    <td>{section}</td>
                    <td>{college}</td>
                    <td>{mobile_number}</td>
                    <td>{mother_name}</td>
                    <td>{father_name}</td>
                    <td>{age}</td>
                    <td>{height}</td>
                    <td>{weight}</td>
                    <td>{gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
