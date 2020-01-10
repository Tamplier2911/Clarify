import "./SurveysPage.scss";
import React from "react";

import Survey from "../../components/Survey/Survey";

// JS Rendering CSS
import {
  SurveyPageContainer,
  SurveyPageTitle,
  SurveyPageCampaigns
} from "./SurveysPageStyles";

const SurveysPage = () => {
  return (
    <SurveyPageContainer>
      <SurveyPageTitle>Currentlty active survey campaigns:</SurveyPageTitle>
      <SurveyPageCampaigns>
        <Survey
          name="First Campaign"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          range={{ start: 20, end: 80 }}
          participants="9873"
        />
        <Survey
          name="Second Campaign"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum."
          range={{ start: 37, end: 63 }}
          participants="6321"
        />
        <Survey
          name="Second Campaign"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident."
          range={{ start: 37, end: 63 }}
          participants="6321"
        />
      </SurveyPageCampaigns>
    </SurveyPageContainer>
  );
};

export default SurveysPage;
