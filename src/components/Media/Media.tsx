import * as React from "react";
import {FC} from "react";
import {useAppSelector} from "../../hooks/redux";
import {COLOR} from "../../ColorTheme/Theme";
import {TTabMediaPanelProps} from "../../ComponentTypes/types";
import {Container} from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Videos from "./components/Videos/Videos";
import Backdrops from "./components/Backdrops/Backdrops";
import Posters from "./components/Posters/Posters";
import Popular from "./components/Popular/Popular";

const TabPanel:FC<TTabMediaPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Media() {
  const { media } = useAppSelector((state) => state.filmReducer);
  const [value, setValue] = React.useState(0);
  if (!media) {
    return (
      <Box>
        <Typography>...Loading</Typography>
      </Box>
    );
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {media ? (
        <Box sx={{ mt: 4, borderBottom: 1, pb: 5, mb: 4 }}>
          <Typography
            variant="caption"
            sx={{
              display: "inline-block",
              fontSize: "22px",
              position: "relative",
              top: "40px",
              left: "24px",
            }}
          >
            Media
          </Typography>

          <Container>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%" }}>
                <Box>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                      "& .MuiTabs-indicator": {
                        background: COLOR.black,
                        color: COLOR.black,
                        height: "3px",
                      },
                      pl: 14,
                      pb: 2,
                    }}
                  >
                    <Tab
                      sx={{
                        color: COLOR.black,
                        "&.Mui-selected": { color: COLOR.black },
                      }}
                      label="Most Movies"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        color: "#000",
                        "&.Mui-selected": { color: COLOR.black },
                      }}
                      label="Videos 22"
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{
                        color: "#000",
                        "&.Mui-selected": { color: COLOR.black },
                      }}
                      label="Backdrops 21"
                      {...a11yProps(2)}
                    />
                    <Tab
                      sx={{
                        color: "#000",
                        "&.Mui-selected": { color: COLOR.black },
                      }}
                      label="Posters 153"
                      {...a11yProps(3)}
                    />
                  </Tabs>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "260px",
                  }}
                >
                  <TabPanel value={value} index={0}>
                    <Popular media={media} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Videos videos={media.videos} />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Backdrops backdrops={media.backdrops} />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Posters posters={media.posters} />
                  </TabPanel>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      ) : (
        "...Loading"
      )}
    </>
  );
}
