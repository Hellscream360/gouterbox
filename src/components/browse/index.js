import React from 'react';
import unknown from '../../img/person-profile.png';

class Browse extends React.Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log("click");
        }
        
        return (
            <div className="container">
                <h1>{this.props.name}, Selectionne ton profil</h1>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card" onClick={ handleClick }>
                            <img className="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Kevin</h5>
                            </div>
                        </div>
                    </div>    
                    <div className="col-4">
                        <div className="card">
                            <img className="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Benjamin</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
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