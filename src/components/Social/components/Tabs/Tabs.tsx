import * as React from "react";
import { COLOR } from "../../../../ColorTheme/Theme";
import { TTabPanelProps } from "../../../../ComponentTypes/types";
import { Comments } from "./data";
import { useAppSelector } from "../../../../hooks/redux";
import {
  croppingContent,
  isPathCheck,
  transformReviewResponseDate,
} from "../../../../utils/helpersMovie";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import UserComment from "../UserComment/UserComment";

function TabPanel(props: TTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SocialTabs() {
  const { reviews } = useAppSelector((state) => state.filmReducer);
  const [selectReview, setSelectReview] = React.useState(0);
  const [value, setValue] = React.useState(0);

  if (!reviews.length) {
    return (
      <Box>
        <Typography>...Loading</Typography>
      </Box>
    );
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const changeReview = () => {
    if (selectReview === reviews.length - 1) {
      setSelectReview(0);
    } else {
      setSelectReview(selectReview + 1);
    }
  };

  const reviewPhoto = isPathCheck(
    reviews[selectReview].authorDetails.avatarPath
  );

  const reviewDate = transformReviewResponseDate(
    reviews[selectReview].createdAt
  );

  const ReviewContent = croppingContent(reviews[selectReview].content);

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              background: "#000",
              color: COLOR.black,
              height: "5px",
            },
          }}
        >
          <Tab
            sx={{
              color: COLOR.black,
              "&.Mui-selected": { color: COLOR.black },
            }}
            onClick={changeReview}
            label={`Reviews ${reviews.length}`}
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: COLOR.black,
              "&.Mui-selected": { color: COLOR.black },
            }}
            label="Discussions 12"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box
          sx={{
            minHeight: "220px",
            width: "108%",
            position: "relative",
            top: "0",
            right: "114px",
            boxShadow: "0px 0px 3px #000",
            borderRadius: "6px",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                mr: 3,
                width: "80px",
                height: "80px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                src={reviewPhoto}
                alt="review"
              />
            </Box>

            <Box>
              <Box
                sx={{ display: "flex", alignItems: "center", fontSize: "700" }}
              >
                <Typography variant="h6" sx={{ mr: 2 }}>
                  A review by {reviews[selectReview].author}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    pr: 2,
                    width: "50px",
                    height: "23px",
                    background: COLOR.black,
                    borderRadius: "6px",
                  }}
                >
                  <StarBorderIcon
                    htmlColor="#fff"
                    inheritViewBox={false}
                    sx={{
                      "&.MuiSvgIcon-root": {
                        color: COLOR.white,
                        borderColor: COLOR.white,
                        fontSize: "20px",
                        mr: "2px",
                      },
                    }}
                  />

                  <Typography
                    sx={{
                      color: COLOR.white,
                      fontSize: "16px",
                      display: "inline-block",
                    }}
                  >
                    {reviews[selectReview].authorDetails.rating}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="caption" sx={{ pb: 5, color: "grey" }}>
                Written by CinemaSerf on {reviewDate}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  maxWidth: "800px",
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                {ReviewContent}...
                <Typography
                  sx={{
                    textDecoration: "underline",
                    fontWeight: "700",
                    fontSize: "14px",
                    display: "inline-block",
                  }}
                  variant="caption"
                >
                  read the rest.
                </Typography>
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center" }}
              ></Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            position: "relative",
            top: "0",
            left: "-114px",
            mt: 4,
            fontWeight: "700",
          }}
        >
          Read All Reviews
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "240px",
            width: "108%",
            position: "relative",
            top: "0",
            right: "114px",
          }}
        >
          {Comments &&
            Comments.map((comment) => {
              return <UserComment key={comment.id} {...comment} />;
            })}
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            position: "relative",
            top: "0",
            left: "-114px",
            mt: 4,
            fontWeight: "700",
          }}
        >
          Go to Discussions
        </Typography>
      </TabPanel>
    </Box>
  );
}
