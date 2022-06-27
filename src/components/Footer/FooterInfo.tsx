import * as React from "react";
import { Box, Typography } from "@mui/material";
import { dataFooter } from "./data";

const FooterInfo = () => {
  return (
    <>
      {dataFooter.map((column, index) => {
        return (
          <Box
            key={column.id}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <>
              <Typography variant="h5" component="span">
                {column.title}
              </Typography>
            </>

            <Box>
              {column.text.map((rowText, i) => {
                return (
                  <Typography
                    key={`${i}${index}`}
                    variant="subtitle2"
                    display="block"
                  >
                    {rowText}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default FooterInfo;
