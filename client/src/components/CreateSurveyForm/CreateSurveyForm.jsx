// import './CreateSurveyForm.scss';
import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { createSurveyStart } from "../../redux/survey/survey-actions";

// JS Rendering CSS
import {
  CreateSurveyFormWrapper,
  CreateSurveyFormTitle,
  CreateSurveyFormForm
} from "./CreateSurveyFormStyles";

const CreateSurveyForm = ({ createSurveyStart, history }) => {
  const [campaignInfo, setCampaignInfo] = useState({
    campaignName: "",
    campaignDescription: "",
    campaignBody: "",
    campaignParticipants: ""
  });

  const {
    campaignName,
    campaignDescription,
    campaignBody,
    campaignParticipants
  } = campaignInfo;

  const onInputChange = e => {
    const { name, value } = e.target;
    setCampaignInfo({ ...campaignInfo, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    createSurveyStart({
      name: campaignName,
      description: campaignDescription,
      body: campaignBody,
      participants: campaignParticipants
    });
    setCampaignInfo({
      campaignName: "",
      campaignDescription: "",
      campaignBody: "",
      campaignParticipants: ""
    });
    history.push("/surveys");
  };

  return (
    <CreateSurveyFormWrapper>
      <CreateSurveyFormTitle>Create new Campaign:</CreateSurveyFormTitle>
      <CreateSurveyFormForm onSubmit={e => onSubmit(e)}>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={campaignName}
          label="Name"
          name="campaignName"
          type="text"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={campaignDescription}
          label="Description"
          name="campaignDescription"
          type="text"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={campaignBody}
          label="Body"
          name="campaignBody"
          type="text"
          required
        />
        <TextInput
          required
          rows="6"
          onChange={e => onInputChange(e)}
          name="campaignParticipants"
          value={campaignParticipants}
          max="300"
          placeholder="*Insert up to ten email addresses separated by comma."
        />
        <Button type="submit" description="Create New Campaign" />
      </CreateSurveyFormForm>
    </CreateSurveyFormWrapper>
  );
};

export default connect(null, { createSurveyStart })(
  withRouter(CreateSurveyForm)
);
