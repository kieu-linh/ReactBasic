import React from "react";

class ChildComponents extends React.Component {
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
        console.log(this.props);
        let { name, age } = this.props;
        return (
            <>
                <div>
                    <h1>Child Component: {name} - {age}</h1>
                </div>
            </>


        )
    }
}

export default ChildComponents;