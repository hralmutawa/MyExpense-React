import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import StudentRow from "./StudentRow";
import { Link, Redirect } from "react-router-dom";
class StudentsList extends Component {
  componentDidMount() {
    this.props.fetchStudentsList();
  }
  state = {
    id: 0
  };
  render() {
    let { students , loading} = this.props.studentReducer
    let studentRow;
    if (loading) {
      studentRow = <div />;
    } else {
      console.log("students ==> ", students)
      studentRow = students.filter(student => student.grade === `Grade ${this.props.match.params.Grade}`).map(student => (
        <StudentRow key={student.id} student={student} />
      ));
      console.log("studentRow ==> ", studentRow)
    }
    return (
      <div>
        <div>List of student</div>
        <Link to={"/add/student"}>
          <td>add student</td>
        </Link>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Grade </th>
              <th scope="col">Card </th>
            </tr>
          </thead>
          {studentRow}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer,
    studentReducer: state.studentReducer
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);
