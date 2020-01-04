import styled, { css } from "styled-components";

// import { ReactComponent as Logo } from "../../assets/svg/clarify-logo.svg";
// import { ReactComponent as LogOut } from "../../assets/svg/logout.svg";
// import { ReactComponent as LogIn } from "../../assets/svg/google.svg";
// import { ReactComponent as Settings } from "../../assets/svg/settings.svg";

import { ReactComponent as Accounts } from "../../assets/svg/accounts.svg";
import { ReactComponent as Reports } from "../../assets/svg/report.svg";
import { ReactComponent as Profiles } from "../../assets/svg/profiles.svg";
import { ReactComponent as Actions } from "../../assets/svg/actions.svg";
import { ReactComponent as Management } from "../../assets/svg/management.svg";
import { ReactComponent as History } from "../../assets/svg/history.svg";

const svgstyle = css`
  width: 1.6rem;
  height: 1.6rem;
  fill: var(--cl-font);
  margin-right: 1rem;
  transition: fill 0.3s;
`;

export const AccountsSVG = styled(Accounts)`
  ${svgstyle}
`;

export const ReportsSVG = styled(Reports)`
  ${svgstyle}
`;

export const ProfilesSVG = styled(Profiles)`
  ${svgstyle}
`;

export const ActionsSVG = styled(Actions)`
  ${svgstyle}
`;

export const ManagementSVG = styled(Management)`
  ${svgstyle}
`;

export const HistorySVG = styled(History)`
  ${svgstyle}
`;
