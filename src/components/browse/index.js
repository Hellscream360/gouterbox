import React from 'react';
import unknown from '../../img/person-profile.png';

class Browse extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Selection du profil</h1>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card">
                            <img class="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Kevin</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img class="card-img-top" src={unknown} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Benjamin</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img class="card-img-top" src={unknown} alt="" />
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