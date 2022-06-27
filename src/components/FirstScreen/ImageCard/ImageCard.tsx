import * as React from "react";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../../hooks/redux";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import BasicModal from "../ModalWindow/ModalWindow";
import "./imageCard.scss";

const ImageCard = () => {
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const [statusModal, setStatusModal] = React.useState<boolean>(false);
  const { film } = useAppSelector((state) => state.filmReducer);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const openModal = () => {
    setStatusModal(true);
  };

  return (
    <>
      <Card
        className="first__screen-card"
        sx={{ width: 300 }}
        style={{ minHeight: "540px", borderRadius: "6px" }}
      >
        <CardActionArea>
          <CardMedia
            className="card__image"
            sx={{ position: "relative", height: "500px" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={openModal}
            component="img"
            image={`${process.env.React_App_Image_Base_Path}/${film?.poster_path}`}
            alt="green iguana"
          />
          {isHovering ? (
            <Box style={{ position: "absolute", top: "220px", right: "100px" }}>
              <Box style={{ position: "relative", width: "100%" }}>
                <ArrowDropUpIcon
                  style={{
                    position: "absolute",
                    color: "#fff",
                    top: "-10px",
                    right: "70px",
                  }}
                />
                <ArrowRightIcon
                  style={{
                    position: "absolute",
                    color: "#fff",
                    top: "0",
                    right: "60px",
                  }}
                />
                <ArrowDropDownIcon
                  style={{
                    position: "absolute",
                    color: "#fff",
                    top: "10px",
                    right: "70px",
                  }}
                />
                <ArrowLeftIcon
                  style={{
                    position: "absolute",
                    color: "#fff",
                    top: "0",
                    right: "80px",
                  }}
                />
              </Box>

              <Typography style={{ color: "#fff" }}>Expands</Typography>
            </Box>
          ) : null}

          <Box
            style={{
              width: "100%",
              height: "50px",
              background: "#203445",
            }}
          >
            <Box>
              <Box className="firstScreen__bottom">
                <img
                  className="bottom__image"
                  src={`${process.env.React_App_Image_Base_Path}/${film?.production_companies[0].logo_path}`}
                  alt="card-img"
                />
                <Box className="bottom__text">
                  <Typography
                    style={{ lineHeight: "0", color: "#fff" }}
                    variant="caption"
                    component="span"
                  >
                    Now Streaming
                  </Typography>
                  <Typography style={{ color: "#fff" }}>Watch Now</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
      {statusModal && (
        <BasicModal
          modalImage={film?.poster_path}
          statusModal={statusModal}
          setStatusModal={setStatusModal}
        />
      )}
    </>
  );
};
export default ImageCard;
