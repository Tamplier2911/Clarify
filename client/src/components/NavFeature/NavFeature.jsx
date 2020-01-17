import React from "react";

import {
  NavFeatureWrapper,
  ContainerUl,
  DecorationDiv,
  FeatureItem,
  FeatureLink
} from "./NavFeatureStyles";

const NavFeature = ({ featureName, featureLinks }) => {
  return (
    <NavFeatureWrapper>
      {featureName}
      <DecorationDiv />
      <ContainerUl>
        {featureLinks.map(({ id, name, svg, linkTo }) => {
          // const { id, name, svg, linkTo } = link;
          return (
            <FeatureItem key={id}>
              <FeatureLink to={linkTo}>
                {/* {svg.render()}  if passed as component */}
                {svg}
                {name}
              </FeatureLink>
            </FeatureItem>
          );
        })}
      </ContainerUl>
    </NavFeatureWrapper>
  );
};

export default NavFeature;
