//Task List:
//1. Import in all needed components and library methods.
import React from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        //3. Fetch all smurfs when the component first mounts.
        this.props.getSmurfs();
    };

    //4. Render loading text or graphic if the application is currently loading.
    //5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
    render() {
        return (
            <div>
                {this.props.appLoading
                ? <h2>Loading Smurf Data...</h2>
                : this.props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} key={smurf.id}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        appLoading: state.appLoading,
        error: state.loadingError
    }
}

//2. Connect all needed redux state props and action functions to the component before exporting.
export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);