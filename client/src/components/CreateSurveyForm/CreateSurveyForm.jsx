// import './CreateSurveyForm.scss';
import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";

// JS Rendering CSS
import {
  CreateSurveyFormWrapper,
  CreateSurveyFormTitle,
  CreateSurveyFormForm
} from "./CreateSurveyFormStyles";

const CreateSurveyForm = () => {
  const [campaignInfo, setCampaignInfo] = useState({
    campaignName: "",
    campaignDescription: ""
  });

  const { campaignName, campaignDescription } = campaignInfo;

  const onInputChange = e => {
    const { name, value } = e.target;
    setCampaignInfo({ ...campaignInfo, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    // createNewCampaignStart()
  };

  // title -- headline
  // description -- what about
  // body -- what user see
  // participants -- compa separated file of user emails

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
        <Button type="submit" description="Create New Campaign" />
      </CreateSurveyFormForm>
    </CreateSurveyFormWrapper>
  );
};

export default CreateSurveyForm;
