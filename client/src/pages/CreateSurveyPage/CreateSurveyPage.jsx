import "./CreateSurveyPage.scss";
import React from "react";

import StripeButton from "../../components/StripeButton/StripeButton";

const CreateSurveyPage = () => {
  return (
    <div className="createSurveyPage">
      <div className="createSurveyPage__title">Create new Campaign:</div>
      <div>
        <form>
          <input type="text" />
          <input type="text" />
          <button type="submit">Create New Campaign</button>
        </form>
      </div>
      <div className="createSurveyPage__title">
        Add credits to your account:
      </div>
      <StripeButton price={100} />
    </div>
  );
};

export default CreateSurveyPage;
