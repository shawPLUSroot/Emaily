import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({label,name})=> {
        return (
            <div key={name} style={{marginBottom:"5px"}}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    
    return (<div className='container'>
        <div className='center'>
            <h5 style={{marginTop:"80px",marginBottom:"20px"}}> Please confirm your entries</h5>
            {reviewFields}
            <div style={{marginTop:"30px"}}>
                <button className='left btn red lighten-4 white-text' onClick={onCancel}>
                    Back
                </button>
                <button 
                    onClick={()=>submitSurvey(formValues,history)}
                className='red btn-flat right white-text'>
                    Send Survey
                    <i className='material-icons right'>email</i>
                </button>
            </div>
        </div>
    </div>); 
};

function mapStateToProps(state){
    
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));