import React from 'react';
import unknown from '../../img/person-profile.png';
import { Link, withRouter, Route } from "react-router-dom";
import * as routes from "../../constants/routes";

class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      } 

    handleClick = event => {
        event.preventDefault();
        console.log(this.idDiv.id);
        const id = this.idDiv.id;
        console.log(id);
        //change url
        window.location= "/my-account"
        //this.props.history.push(`/landing`)
       
        
        //window.location = "";
    };
    
    render() {
        return (
            <div className="container">
                <h1>Selection du profil</h1>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="card" id="1" onClick={e => this.handleClick(e)} ref={div => {this.idDiv=div}}>
                            <img className="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Kevin</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img className="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Benjamin</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img className="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Alan</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Alan</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    
}


export default Browse;