import React from "react";


class FormPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lastName: "", age: ""}
    }

    changeInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    
    clearInput = (e) => {
        e.preventDefault(); 
        
        this.setState({
            lastName: "",
            age: "",
        });
        
    }

    submit = () => {
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h1>Form Page</h1>
                <input type="text"
                       placeholder="Введите фамилию"
                       onChange={this.changeInput}
                       name="lastName"
                       value={this.state.lastName}

                       
                />

                <input type="number"
                       placeholder="Введите возраст"
                       onChange={this.changeInput}
                       name="age"
                       value={this.state.age}
                />
                <button onClick={this.submit}>post</button>
                <button onClick={this.clearInput}>clear</button>
            </div>
        )
    }
}

export default FormPage;