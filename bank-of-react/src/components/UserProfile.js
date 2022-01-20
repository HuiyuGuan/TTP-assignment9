import React, {Component} from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

class UserProfile extends Component {
    render(){
        return(
            <div>
                <h1>User Profile</h1>
                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <button><Link to="/">Back to Home Page</Link></button>
            </div>
        );
    }
}

export default UserProfile;