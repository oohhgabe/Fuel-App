import React from "react";
import '../components/Account/Account.css'
import styled from "styled-components";

const LoginButton = styled.button `
  font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: orange;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: darkorange;
  }
  &:focus {
    outline: none;
  }
`;

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <LoginButton>Login</LoginButton>
                </div>
            </div>

        );
    }
}