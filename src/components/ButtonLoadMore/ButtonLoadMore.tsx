import {FC} from 'react';
import {Button} from "@mui/material";
import {ButtonLoadMoreProps} from "../../ComponentTypes/types";

const ButtonLoadMore: FC<ButtonLoadMoreProps> = ({title, onClick, hoverBgc, hoverColor, borderRadius, disabled}) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      sx={{
        color: "white",
        backgroundColor: "#01B4E4",
        width: "100%",
        maxWidth: '1150px',
        fontSize: '20px',
        textTransform: 'none',
        borderRadius: borderRadius,
        marginTop: '20px',
        '&:hover': {
          color: hoverColor,
          backgroundColor: hoverBgc
        },
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.defaultProps = {
  hoverBgc: "#01B4E4",
  hoverColor: "#fff",
}
