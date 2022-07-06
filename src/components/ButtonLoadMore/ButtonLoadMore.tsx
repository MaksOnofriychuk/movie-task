import {FC, MouseEventHandler} from 'react';
import {Button} from "@mui/material";

interface Props {
  title: string;
  func: MouseEventHandler<HTMLButtonElement>;
}

const ButtonLoadMore: FC<Props> = ({title, func}) => {
  return (
    <Button
      variant="contained"
      onClick={func}
      sx={{
        color: "white",
        backgroundColor: "#01B4E4",
        width: "100%",
        maxWidth: '1150px',
        fontSize: '25px',
        textTransform: 'none',
        '&:hover': {
          color: 'black',
          backgroundColor: "#01B4E4"
        },
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonLoadMore;
