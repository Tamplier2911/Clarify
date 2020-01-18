// import "./CreateSurveyPage.scss";
import React from "react";

import StripeButton from "../../components/StripeButton/StripeButton";
import CreateSurveyForm from "../../components/CreateSurveyForm/CreateSurveyForm";

// JS rendering CSS
import {
  CreateSurveyPageTitle,
  CreateSurveyPageFormWrapper,
  CreateSurveyPageContainer,
  CreateSurveyCreditWrapper,
  CreateSurveyPageDescriptor,
  CreateSurveyPageBulletPoint
} from "./CreateSurveyPageStyles";

const CreateSurveyPage = () => {
  return (
    <CreateSurveyPageContainer>
      <CreateSurveyForm />
      <CreateSurveyCreditWrapper>
        <CreateSurveyPageTitle>
          Add credits to your account:
        </CreateSurveyPageTitle>
        <CreateSurveyPageFormWrapper>
          <CreateSurveyPageDescriptor>
            <CreateSurveyPageBulletPoint />
            In order to create Campaign, you need to have credits on your
            account.
          </CreateSurveyPageDescriptor>
          <CreateSurveyPageDescriptor>
            <CreateSurveyPageBulletPoint />
            Credits can be purchased with credit card.
          </CreateSurveyPageDescriptor>
        </CreateSurveyPageFormWrapper>
        <StripeButton price={100} />
      </CreateSurveyCreditWrapper>
    </CreateSurveyPageContainer>
  );
};

export default CreateSurveyPage;
