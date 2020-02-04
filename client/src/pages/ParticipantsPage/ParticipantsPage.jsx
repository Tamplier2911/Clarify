// import './ParticipantsPage.scss';
import React from "react";

// JS Rendring CSS
import {
  ParticipantPageContainer,
  ParticipantPageHeading,
  ParticipantPageMessage,
  ParticipantPageKarma
} from "./ParticipantsPageStyles";

const ParticipantsPage = () => {
  return (
    <ParticipantPageContainer>
      <ParticipantPageHeading>Thank You!</ParticipantPageHeading>
      <ParticipantPageMessage>
        You have participated in a survey and gained{" "}
        <ParticipantPageKarma>+100</ParticipantPageKarma> to your karma! :)
      </ParticipantPageMessage>
    </ParticipantPageContainer>
  );
};

export default ParticipantsPage;
