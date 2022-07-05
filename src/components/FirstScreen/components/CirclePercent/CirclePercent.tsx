import * as React from "react";
import { COLOR } from "../../../../ColorTheme/Theme";
import { TCircularStatic } from "../../../../ComponentTypes/types";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        cursor: "pointer",
        transition: "all 0.5s ease-in-out",
        "&:hover": { transform: "scale(1.2)" },
      }}
    >
      <CircularProgress
        sx={{
          color: "yellow",
          zIndex: "10",
        }}
        variant="determinate"
        {...props}
      />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1",
          background: COLOR.main,
          borderRadius: "50%",
        }}
      >
        <Typography
          sx={{ color: COLOR.white }}
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export const CircularStatic: React.FC<TCircularStatic> = ({ valuePercent }) => {
  return <CircularProgressWithLabel value={valuePercent} />;
};
