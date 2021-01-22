import React from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from './../actions';
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
import './SmurfDisplay.css';

class Smurf extends React.Component {

    // Display new smurfs here
    componentDidMount() {
        this.props.postSmurfs();
    }

    render() {
        //Task List:
        //1. Access smurf to be displayed through props.
        const { smurf } = this.props;

        //2. Display the name, position, nickname and description of the provided smurf as needed.
        return(<div data-testid="smurf" className="card">
            {/* <h5>Name: </h5>
            <p>{smurf.name}</p>
            <h5>Position: </h5>
            <p>{smurf.position}</p>
            <h5>Name: </h5>
            <p>{smurf.name}</p>
            <h5>Name: </h5>
            <p>{smurf.name}</p> */}
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        newSmurf:{
            name: state.name,
            position: state.position,
            nickname: state.nickname,
            description: state.description
        }
    }
}

export default connect(mapStateToProps, { postSmurfs })(Smurf);



