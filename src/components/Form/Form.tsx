import * as React from "react";
import { TForm } from "./types";
import { COLOR } from "../../ColorTheme/Theme";
import { style, stylesForm, stylesImg } from "./styles";
import { TAddedFilm } from "../../ComponentTypes/types";
import { Button, Stack, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { addFilm } from "../../store/reducers/fIlmSlice/filmSlice";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Form: React.FC<TForm> = ({ open, handleClose }) => {
  const dispatch = useAppDispatch();

  const inputRef = React.useRef(null);

  const form = useForm<TAddedFilm>({
    mode: "onBlur",
  });

  const { handleSubmit, reset, control, register, setValue, watch } = form;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!(files instanceof FileList) || !files[0]) {
      return;
    }
    const reader = new FileReader();

    reader.onload = async () => {
      // @ts-ignore
      setValue("imgUrl", reader.result);
      setValue("imgFile", files);
    };
    reader.readAsDataURL(files[0]);
  };

  const onSubmit: SubmitHandler<TAddedFilm> = (data) => {
    const newDataForm = {
      adult: data.adult,
      Image: data.imgUrl,
      id: data.id,
      overview: data.overview,
      runtime: data.runtime,
      title: data.title,
      voteCount: data.voteCount,
    };

    if (newDataForm) {
      dispatch(addFilm(newDataForm));
    }
    reset();
  };

  const url = watch("imgUrl");

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Add New Film
          </Typography>

          <FormProvider {...form}>
            <form style={stylesForm} onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 2 }}>
                <Controller
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} defaultChecked={false} />}
                      label="adult"
                    />
                  )}
                  name="adult"
                  control={control}
                />
              </Box>
              {/* <Box sx={{ mb: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    position: "relative",
                    "&.MuiButton-root": {
                      color: COLOR.black,
                      borderColor: COLOR.black,
                      fontSize: 14,
                      cursor: "pointer",
                    },
                  }}
                >
                  Add Image
                  <Controller
                    name="backdropPath"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        sx={{
                          width: "50%",
                          height: "100%",
                          position: "absolute",
                          top: "0",
                          left: "100px",
                          opacity: "0",
                        }}
                        variant="standard"
                        type="file"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                    rules={{ required: "backdropPath required" }}
                  />
                </Button>
              </Box> */}
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    position: "relative",
                    "&.MuiButton-root": {
                      color: COLOR.black,
                      borderColor: COLOR.black,
                      fontSize: 14,
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box component="label">
                    <input
                      {...register("imgFile")}
                      id="imgFile"
                      accept="image/*"
                      ref={inputRef}
                      onChange={handleChange}
                      type="file"
                      hidden
                    />
                    Add Image
                  </Box>
                </Button>
                {url && <img style={stylesImg} src={url} alt="added-film" />}
              </Box>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="id"
                  control={control}
                  defaultValue={0}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      label="id"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "id required" }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="overview"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      label="overview"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "overview required" }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Controller
                  name="runtime"
                  control={control}
                  defaultValue={0}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      label="runtime"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "runtime required" }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Controller
                  name="title"
                  defaultValue=""
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      label="title"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "title required" }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Controller
                  name="voteCount"
                  defaultValue={0}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      label="voteCount"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "voteCount required" }}
                />
              </Box>
              <Stack
                width="100%"
                sx={{ mt: 5 }}
                direction="row"
                justifyContent="space-between"
              >
                <Button variant="contained" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Add Film
                </Button>
              </Stack>
            </form>
          </FormProvider>
        </Box>
      </Modal>
    </Box>
  );
};
export default Form;
