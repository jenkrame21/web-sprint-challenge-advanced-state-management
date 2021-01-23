import React from 'react';
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.

class Smurf extends React.Component {

    render() {
        //Task List:
        //1. Access smurf to be displayed through props.
        const { smurf } = this.props;

        //2. Display the name, position, nickname and description of the provided smurf as needed.
        return(
            <div data-testid="smurf" className="card">
                <h5>Name: </h5>
                <p>{smurf.name}</p>

                <h5>Position: </h5>
                <p>{smurf.position}</p>

                <h5>Nickname: </h5>
                <p>{smurf.nickname}</p>

                <h5>Description: </h5>
                <p>{smurf.description}</p>
            </div>
        )
    }
};

export default Smurf;



