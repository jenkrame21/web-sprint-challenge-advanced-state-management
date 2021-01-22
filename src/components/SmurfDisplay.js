//Task List:
//1. Import in all needed components and library methods.
import React from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import './SmurfDisplay.css';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        //3. Fetch all smurfs when the component first mounts.
        this.props.getSmurfs();
    };

    //4. Render loading text or graphic if the application is currently loading.
    
    //5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.

    render() {
        return (<div>
            {this.props.smurfs.map(smurf => (
                <div className="smurfDisplay">
                    <h5>Name: </h5>
                    <p>{smurf.name}</p>

                    <h5>Position: </h5>
                    <p>{smurf.position}</p>

                    <h5>Nickname: </h5>
                    <p>{smurf.nickname}</p>

                    <h5>Description: </h5>
                    <p>{smurf.description}</p>
                </div>
            ))}
            <Smurf />
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

//2. Connect all needed redux state props and action functions to the component before exporting.
export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);