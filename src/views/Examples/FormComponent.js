import React from "react";
import ChildComponents from "./ChildComponents";

class FormComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault();
        alert('Name: ' + this.state.firstName + this.state.lastName + '\nEmail: ' + this.state.email)
    }
    render() {
        return (
            <>
                <form>
                    <lable htmlFor="fname">First Name</lable> <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /> <br />
                    <lable fhtmlFor="lname">Last Name</lable> <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /> <br />
                    <lable htmlFor="email">Email</lable> <br />
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={(event) => this.handleChangeEmail(event)}
                    /> <br />
                    <input onClick={(event) => this.handleOnClick(event)} type="submit" value="Submit" />
                </form>
                <ChildComponents
                    name={'Linh'}
                    age={20} />
            </>
        )
    }
}

export default FormComponent;