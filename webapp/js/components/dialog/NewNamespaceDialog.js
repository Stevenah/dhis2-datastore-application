import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { createAndDisplayValue } from '../../actions/actions'
import { closeNamespaceDialog } from '../../actions/dialogActions';
class NamespaceDialog extends Component {


    constructor(props) {
        super(props);

        this.state = {
            namespaceValue: "",
            keyValue: "",
            namespaceError: "",
            keyError: ""
        };
        this.validate = this.validate.bind(this);
    }

    handleNamespaceInput(event) {
        const val = event.target.value;
        this.setState({
            namespaceError: this.validate(val),
            namespaceValue: event.target.value
        })
    }

    handleKeyInput(event) {
        const val = event.target.value;
        this.setState({
            keyError: this.validate(val),
            keyValue: event.target.value
        });
    }

    handleClose() {
        this.props.closeDialog()
    }

    handleCreate() {
        const {namespaceValue, keyValue} = this.state;
        if (namespaceValue && keyValue) {
            this.props.createNamespace(namespaceValue, keyValue)
        } else {
            this.setState({
                keyError: this.validate(keyValue),
                namespaceError: this.validate(namespaceValue)
            })
        }
    }

    validate(value) {
        return value ? "" : "Invalid Input. Field required";
    }



    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Create"
                primary={true}
                onTouchTap={this.handleCreate.bind(this)}
            />,
        ];
        const fieldStyle = {
            display: 'block',
            width:'100%'
        }
        return (
            <Dialog
                title="New Namespace"
                actions={actions}
                modal={false}
                open={true}
                contentStyle={{maxWidth:'500px'}}
                onRequestClose={this.handleClose.bind(this)}
            >
                <TextField ref="namespace" hintText="Namespace" autoFocus style={fieldStyle}
                           errorText={this.state.namespaceError}
                           onChange={this.handleNamespaceInput.bind(this)}/>
                <TextField ref="key" hintText="Key value" style={fieldStyle}
                           errorText={this.state.keyError}
                           onChange={this.handleKeyInput.bind(this)}/>
            </Dialog>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    closeDialog() {
        dispatch(closeNamespaceDialog())
    },
    createNamespace(namespace,key) {
        return dispatch(createAndDisplayValue(namespace,key))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(NamespaceDialog);

