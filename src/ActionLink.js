import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from './actions';

class ActionLink extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    getData() {
        console.log('api call');
        this.props.dispatch(userActions.getAPIData());
    }
    render() {
        console.log('this.props', this.props)
        return (
            <div>
                {this.props && this.props.Apiuse &&
                    <h6>Loading Data</h6>
                }
                {this.props && !this.props.Apiuse &&
                    <React.Fragment>
                        <p>Child Component</p>
                        <h6>{this.props.myprops}</h6>
                        <button onClick={this.getData}>Get Data</button>
                    </React.Fragment>
                }
            </div>

        );
    }

}

function mapStateToProps({ sampleReducer }) {
    const { incomingData, Apiuse } = sampleReducer;
    return {
        incomingData,
        Apiuse
    };
}

export default connect(mapStateToProps)(ActionLink);