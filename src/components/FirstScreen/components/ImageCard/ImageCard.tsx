import * as React from "react";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { TImageCardProps } from "../../../../ComponentTypes/types";
import { Box } from "@mui/system";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import BasicModal from "../ModalWindow/ModalWindow";
import { theme } from "../../../../ColorTheme/Theme";

const ImageCard: React.FC<TImageCardProps> = ({
  posterPath,
  productionCompanies,
}) => {
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const [statusModal, setStatusModal] = React.useState<boolean>(false);

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
        sx={{
          width: 300,
          borderRadius: "6px",
          minHeight: "540px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              position: "relative",
              height: "500px",
              "&:hover": { filter: "blur(5px)" },
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={openModal}
            component="img"
            image={`${posterPath}`}
            alt="green iguana"
          />
          {isHovering ? (
            <Box sx={{ position: "absolute", top: "220px", right: "100px" }}>
              <Box sx={{ position: "relative", width: "100%" }}>
                <ArrowDropUpIcon
                  sx={{
                    position: "absolute",
                    color: theme.palette.primary.contrastText,
                    top: "-10px",
                    right: "70px",
                  }}
                />
                <ArrowRightIcon
                  sx={{
                    position: "absolute",
                    color: theme.palette.primary.contrastText,
                    top: "0",
                    right: "60px",
                  }}
                />
                <ArrowDropDownIcon
                  sx={{
                    position: "absolute",
                    color: theme.palette.primary.contrastText,
                    top: "10px",
                    right: "70px",
                  }}
                />
                <ArrowLeftIcon
                  sx={{
                    position: "absolute",
                    color: theme.palette.primary.contrastText,
                    top: "0",
                    right: "80px",
                  }}
                />
              </Box>

              <Typography sx={{ color: theme.palette.primary.contrastText }}>
                Expands
              </Typography>
            </Box>
          ) : null}

          <Box
            sx={{
              width: "100%",
              height: "50px",
              background: theme.palette.primary.main,
            }}
          >
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
                <img
                  style={{ width: "35px", height: "34px", borderRadius: "4px" }}
                  src={`${productionCompanies[0].logo_path}`}
                  alt="card-img"
                />
                <Box sx={{ ml: "10px" }}>
                  <Typography
                    sx={{
                      lineHeight: "0",
                      color: theme.palette.primary.contrastText,
                    }}
                    variant="caption"
                    component="span"
                  >
                    Now Streaming
                  </Typography>
                  <Typography
                    sx={{ color: theme.palette.primary.contrastText }}
                  >
                    Watch Now
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
      {statusModal && (
        <BasicModal
          modalImage={posterPath}
          statusModal={statusModal}
          setStatusModal={setStatusModal}
        />
      )}
    </>
  );
};
export default ImageCard;
