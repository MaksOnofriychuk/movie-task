import * as React from "react";
import { FormControl, OutlinedInput } from "@mui/material";
import { TModal } from "../../../../ComponentTypes/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { theme } from "../../../../ColorTheme/Theme";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  height: "640px",
  display: "flex",
};

const ModalWindow: React.FC<TModal> = ({
  statusModal,
  setStatusModal,
  modalImage,
}) => {
  const handleClose = () => setStatusModal(false);

  return (
    <div>
      <Modal
        sx={{ borderRadius: "6px" }}
        open={statusModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              backgroundColor: "rgb(187, 177, 177)",
            }}
            id="modal-modal"
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                style={{ width: "100%", height: "100%", borderRadius: "6px" }}
                src={`${modalImage}`}
                alt="modal-img"
              />
            </Box>
          </Box>
          <Box sx={{ width: "50%", height: "100%" }} id="modal-modal">
            <Box sx={{ p: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
              >
                <CloseIcon onClick={handleClose} />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 10,
                }}
              >
                <ThumbDownIcon sx={{ fontSize: 18, cursor: "pointer" }} />
                <ThumbUpIcon sx={{ fontSize: 18, cursor: "pointer" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  mt: 5,
                }}
              >
                <Typography variant="caption" component="span">
                  Info
                </Typography>
                <LockOpenIcon sx={{ fontSize: 16 }} />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: 1,
                  border: 0.5,
                  borderColor: theme.palette.primary.light,
                  mt: 3,
                  mb: 2,
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="caption" component="span" sx={{ mr: 1 }}>
                  Primary?
                </Typography>
                <HighlightOffIcon sx={{ fontSize: 16, cursor: "pointer" }} />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{ fontWeight: "light" }}
                  variant="caption"
                  component="div"
                >
                  Added By
                </Typography>
                <Typography variant="caption" component="div">
                  JoeSSS
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{ fontWeight: "light" }}
                  variant="caption"
                  component="div"
                >
                  Size
                </Typography>
                <Typography variant="caption" component="div">
                  2000x3000
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" component="div">
                  Language
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    cursor: "pointer",
                    width: "100%",
                    height: "30px",
                    background: "rgb(181, 177, 177)",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: theme.palette.primary.contrastText, p: 1 }}
                  >
                    English
                  </Typography>
                  <ArrowDropDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box sx={{ mt: 4, borderBottom: "1px solid grey", pb: 1 }}>
                  <Typography
                    sx={{ fontWeight: "light", fontSize: 14 }}
                    variant="caption"
                    component="div"
                  >
                    Tagged People
                  </Typography>
                </Box>
                <Box
                  sx={{ mt: 3 }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <FormControl sx={{ width: "100%", height: "100%" }}>
                    <OutlinedInput placeholder="Search" />
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalWindow;
