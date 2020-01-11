import "./CreateSurveyPage.scss";
import React from "react";

import StripeButton from "../../components/StripeButton/StripeButton";

const CreateSurveyPage = () => {
  return (
    <div className="createSurveyPage">
      <div className="createSurveyPage__title">
        Replenish account and order new Campaign:
      </div>
      <StripeButton price={100} />
    </div>
  );
};

export default CreateSurveyPage;
