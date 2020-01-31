// import './CreateSurveyForm.scss';
import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

// Redux
import { connect } from "react-redux";
import { createSurveyStart } from "../../redux/survey/survey-actions";

// Emails Validation
import { popModal } from "../../utils/popupUtil";
import { validateEmails } from "../../utils/validateEmails";
import { cleanUpTextArea } from "../../utils/cleanUpTextArea";

// JS Rendering CSS
import {
  CreateSurveyFormWrapper,
  CreateSurveyFormTitle,
  CreateSurveyFormForm
} from "./CreateSurveyFormStyles";

const CreateSurveyForm = ({ createSurveyStart }) => {
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
    await e.preventDefault();
    let failedEmails = validateEmails(campaignParticipants);
    if (!failedEmails.length) {
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
      cleanUpTextArea("create-survey-ta");
    } else {
      popModal(
        "Incorrect Email Addresses!",
        `Following email addresses are not correct: ${failedEmails.join(" ")}`
      );
    }
    // history.push("/surveys");
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
          placeholder="*Insert up to ten email addresses separated by comma, e.g: ex@mple.com, ex@mple.com..."
          id="create-survey-ta"
        />
        <Button type="submit" description="Create New Campaign" />
      </CreateSurveyFormForm>
    </CreateSurveyFormWrapper>
  );
};

export default connect(null, { createSurveyStart })(CreateSurveyForm);
