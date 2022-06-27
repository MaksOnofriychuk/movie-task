import * as React from "react";
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
      className="CircularProgress"
      sx={{ position: "relative", display: "inline-flex" }}
    >
      <CircularProgress
        style={{
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
          background: "#203445",
          borderRadius: "50%",
        }}
      >
        <Typography
          style={{ color: "#fff" }}
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface ICircularStatic {
  valuePercent: number;
}

export const CircularStatic: React.FC<ICircularStatic> = ({ valuePercent }) => {
  const [progress] = React.useState(valuePercent);

  return <CircularProgressWithLabel value={progress} />;
};
