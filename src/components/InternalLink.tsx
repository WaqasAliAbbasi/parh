import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as RebassLink } from "rebass";

export const InternalLink = (props: any) => (
  <RebassLink {...props} variant="nav" as={RouterLink} />
);
