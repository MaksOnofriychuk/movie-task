import {FC, MouseEventHandler} from 'react';
import {Button} from "@mui/material";

interface Props {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  hoverBgc?: string;
  hoverColor?: string;
  borderRadius?: string;
  disabled?: boolean;
}

const ButtonLoadMore: FC<Props> = ({title, onClick, hoverBgc, hoverColor, borderRadius, disabled}) => {
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
