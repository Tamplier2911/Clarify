import React from "react";

import Survey from "../../components/Survey/Survey";

// JS Rendering CSS
import {
  SurveyCampaignsContainer,
  SurveyCampaignContainerBackup,
  SurveyCampaignNotYet
} from "./SurveyCampaignsStyles";

const SurveyCampaigns = ({ data }) => {
  return data.length ? (
    <SurveyCampaignsContainer>
      {data.map(survey => {
        return (
          <Survey
            surveyId={survey._id}
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
  ) : (
    <SurveyCampaignContainerBackup>
      <SurveyCampaignNotYet>
        You don't have any surveys yet.
      </SurveyCampaignNotYet>
    </SurveyCampaignContainerBackup>
  );
};

export default SurveyCampaigns;
