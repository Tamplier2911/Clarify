// import './CreateSurveyForm.scss';
import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import FileInput from "../../components/FileInput/FileInput";
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
    campaignDescription: "",
    campaignBody: "",
    campaignParticipants: null
  });

  const { campaignName, campaignDescription, campaignBody } = campaignInfo;

  const onInputChange = e => {
    const { name, value, files } = e.target;
    if (name === "campaignParticipants") {
      console.log(files[0]);
      // if (files[0] && files[0].type === "text/csv") {
      // .replace(/(?:\r?\n|\r)+/g, ",")
      if (files[0] && files[0].name.endsWith(".csv")) {
        setCampaignInfo({ ...campaignInfo, [name]: files[0] });
      } else {
        alert("File must be in .csv format.");
        setCampaignInfo({ ...campaignInfo, [name]: "" });
      }
    } else {
      setCampaignInfo({ ...campaignInfo, [name]: value });
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    // createNewCampaignStart()
  };

  // name -- headline
  // description -- what about
  // body -- what user see
  // participants -- compa separated file of user emails
  console.log(campaignInfo);
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
        <FileInput
          onInputChange={e => onInputChange(e)}
          label="Upload Participants.csv"
          name="campaignParticipants"
          type="file"
          id="inputform"
          required
        />
        <Button type="submit" description="Create New Campaign" />
      </CreateSurveyFormForm>
    </CreateSurveyFormWrapper>
  );
};

export default CreateSurveyForm;
