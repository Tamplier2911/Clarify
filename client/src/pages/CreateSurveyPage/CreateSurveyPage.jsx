// import "./CreateSurveyPage.scss";
import React, { useState } from "react";

import StripeButton from "../../components/StripeButton/StripeButton";

import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";

// JS rendering CSS
import {
  CreateSurveyForm,
  CreateSurveyTitle,
  CreateSurveyFormWrapper,
  CreateSurveyPageContainer,
  CreateSurveyCreditWrapper,
  CreateSurveyDescriptor,
  CreateSurveyBulletPoint
} from "./CreateSurveyPageStyles";

const CreateSurveyPage = () => {
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
  return (
    <CreateSurveyPageContainer>
      <CreateSurveyFormWrapper>
        <CreateSurveyTitle>Create new Campaign:</CreateSurveyTitle>
        <CreateSurveyForm onSubmit={e => onSubmit(e)}>
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
        </CreateSurveyForm>
      </CreateSurveyFormWrapper>
      <CreateSurveyCreditWrapper>
        <CreateSurveyTitle>Add credits to your account:</CreateSurveyTitle>
        <CreateSurveyFormWrapper>
          <CreateSurveyDescriptor>
            <CreateSurveyBulletPoint />
            In order to create Campaign, you need to have some credits.
          </CreateSurveyDescriptor>
          <CreateSurveyDescriptor>
            <CreateSurveyBulletPoint />
            Credits can be purchased with credit card.
          </CreateSurveyDescriptor>
        </CreateSurveyFormWrapper>
        <StripeButton price={100} />
      </CreateSurveyCreditWrapper>
    </CreateSurveyPageContainer>
  );
};

export default CreateSurveyPage;
