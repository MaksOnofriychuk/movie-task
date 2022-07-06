import * as React from "react";
import { Tooltip } from "@mui/material";
import { TSocialLinkProps } from "../../../../ComponentTypes/types";

const SocialLink: React.FC<TSocialLinkProps> = ({ children, title }) => {
  return (
    <Tooltip sx={{ cursor: "pointer" }} title={title} arrow placement="top">
      {children}
    </Tooltip>
  );
};

export default SocialLink;
