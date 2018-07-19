import React from "react";
import { connect } from 'react-redux'
import { formActions } from "../containers/Forms/Form.actions"
import { InputContainer } from "../containers/Forms/Inputs/Input.container"
import SubmitComponent from "../containers/Forms/Buttons/SubmitButton.component"
import BackButton from "../containers/Forms/Buttons/BackButton"
import { profileActions } from "./Profile.actions";

class EditProfile extends React.Component {

    sendDataToStore(e) {
        e.preventDefault()
        console.log('sendDataBlah - ', this.props.form);
        const profileEdit = this.props.form.formState.input;
        this.props.change(profileEdit)
        this.props.clearForm()
      }

    render() {
      console.log(this.props.location);
        let editProfileForm = Object.values(this.props.form.formProps).map((inputProps, index) => {
          if(inputProps.name !== 'password') {
            return (<div key={index} >
              <InputContainer
                label={inputProps.label}
                name={inputProps.name}
                errMsg=''
                type={inputProps.type}
                value={this.props.form.formState.input[inputProps.name]}
                onBlur={() => this.props.handleBlur(inputProps.name)}
                onChange={e => this.props.handleChange(inputProps.name, e.target.value)}
              />
              <br/>
            </div>) 
          }else{
            return null
          }
          
        })
        

        const submitButton = (<SubmitComponent text='Submit Changes'/>)
        const backButton = (<BackButton text='Go Back'/>)

        
        return (
          <div >
            <div >
              <style type='text/css'>
                {`.padding {
                    padding: 3em;
                  }
                  .padding-bottom{
                    margin-bottom: 2.1em;
                }`}
              </style>
            </div>
            <div className='padding padding-bottom'>
            <h2>EDIT PROFILE DETAILS</h2>
            <br/>
              <form
                onSubmit={(e) => this.sendDataToStore(e)}>
                {editProfileForm}
                {submitButton}
                {backButton}
              </form>
            </div>
          </div>
        );
      }
    }
    
const mapStateToProps = (state) => {
  const {  user, form, profile } = state;
  return {
    user,
    form,
    profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (field, edit) => {
      dispatch(profileActions.changeData(field, edit))
    },
    handleChange: (variableName, targetValue) => {
        dispatch(formActions.handleInputChange(variableName, targetValue))
    },
    handleBlur: (fieldName, props) => {
    dispatch(formActions.handleBlur(fieldName))
    },
    clearForm: () => {
    dispatch(formActions.clearForm())
    }
  }
}

export default   connect(mapStateToProps, mapDispatchToProps)(EditProfile)