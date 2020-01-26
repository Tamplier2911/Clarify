import React from "react";

import Survey from "../../components/Survey/Survey";

// JS Rendering CSS
import { SurveyCampaignsContainer } from "./SurveyCampaignsStyles";

const SurveyCampaigns = ({ surveys }) => {
  return (
    <SurveyCampaignsContainer>
      {surveys.map(survey => {
        return (
          <Survey
            name={survey.name}
            description={survey.description}
            range={{ start: survey.negativeFeed, end: survey.positiveFeed }}
            participants={survey.participantsEnrolled}
            date={new Date(survey.createdAt).toLocaleString("en-us", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
            key={survey._id}
          />
        );
      })}
    </SurveyCampaignsContainer>
  );
};

export default SurveyCampaigns;
