import React from 'react';
import unknown from '../../img/person-profile.png';
import { Link, withRouter, Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';

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
        const style = {
            height: "10vw",
            width: "10vw"
        }
        return (
            <div className="container">
                <h1>{this.props.name}, Selectionne ton profil</h1>
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
                            <div className="icon">
                            <FontAwesomeIcon className="fa-4x" style ={ style.height } icon={faPlus} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Ajouter un profil</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    
}


export default Browse;