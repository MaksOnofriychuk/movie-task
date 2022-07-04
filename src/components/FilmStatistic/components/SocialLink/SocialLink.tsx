import * as React from "react";
import { Tooltip } from "@mui/material";

interface ISocialLinkProps {
  children: React.ReactElement;
  title: string;
}

const SocialLink: React.FC<ISocialLinkProps> = ({ children, title }) => {
  return (
    <Tooltip sx={{ cursor: "pointer" }} title={title} arrow placement="top">
      {children}
    </Tooltip>
  );
};

export default SocialLink;
