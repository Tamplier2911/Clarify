import React from "react";

import {
  ContainerUl,
  DecorationDiv,
  FeatureItem,
  FeatureLink
} from "./NavFeatureStyles";

const NavFeature = ({ featureName, featureLinks }) => {
  return (
    <ContainerUl>
      {featureName}
      <DecorationDiv />
      {featureLinks.map(({ id, name, svg, linkTo }) => {
        // const { id, name, svg, linkTo } = link;
        return (
          <FeatureItem key={id}>
            <FeatureLink href={linkTo}>
              {/* {svg.render()}  if passed as component */}
              {svg}
              {name}
            </FeatureLink>
          </FeatureItem>
        );
      })}
    </ContainerUl>
  );
};

export default NavFeature;
