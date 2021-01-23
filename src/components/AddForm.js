//Task List:
//1. Add in all necessary import components and library methods.
import React from 'react';
import { connect } from 'react-redux';
import { postSmurf, errorMessage } from '../actions';

//3. Add state holding name, position, nickname and description to component.
const initialState = {
    newSmurf: {
        name: '',
        position: '',
        nickname: '',
        description: ''
    }
};

class AddForm extends React.Component {

    state = initialState;

    //5. Build eventhandler and listener needed to change the state.
    handleChange = e => {
        // console.log("Handle Change: ", e.target.name);
        this.setState({
            ...this.state,
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        });
    };

    //6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postSmurf(this.state.newSmurf);
        this.setState(initialState);
    };

    //4. Build form DOM to include inputs for name, position and description of the component.
    //      - an array of smurfs
    //      - a boolean indicating if the app is loading
    //      - error text
    //      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">

                    <label htmlFor="name">Name:</label><br/>
                    <input
                        onChange={this.handleChange}
                        name="name"
                        id="name"
                        value={this.state.newSmurf.name}
                        required={errorMessage}
                    />

                    <label htmlFor="position">Position:</label><br/>
                    <input
                        onChange={this.handleChange}
                        name="position"
                        id="position"
                        value={this.state.newSmurf.position}
                        required={errorMessage}
                    />

                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input
                        onChange={this.handleChange}
                        name="nickname"
                        id="nickname"
                        value={this.state.newSmurf.nickname}
                        required={errorMessage}
                    />
                    
                    <label htmlFor="description">Description:</label><br/>
                    <input
                        onChange={this.handleChange}
                        name="description"
                        id="description"
                        value={this.state.newSmurf.description}
                        required={errorMessage}
                    />

                </div>

                {/*//7. Ensure that the included alert code only displays when error text is passed in from redux. */}
                {/*//8. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading. */}
                {(this.props.error) &&
                    <div data-testid="errorAlert" className="alert alert-danger" role="alert">
                        Error: {this.props.error}
                    </div>
                }
                <button>Submit Smurf</button>
            </form>
        </section>)
    }
};

const mapStateToProps = state => {
    return {
        error: state.addingError
    }
};


//2. Connect all needed redux state props and action functions to the component before exporting.
export default connect(mapStateToProps, { postSmurf, errorMessage })(AddForm);

//9. Style as necessary.