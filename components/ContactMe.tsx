import React, { forwardRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Snackbar, Alert, AlertProps } from "@mui/material";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const ContactMe = (props: Props) => {
  const [alert, setAlert] = useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    axios.post("https://eoumzbx6ov5eerv.m.pipedream.net", formData);
    reset();
    setAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-1 justify-evenly mx-auto items-center text-black">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="decoration-[#7dc9fc]/50 underline">
            Let&apos;s talk
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#7dc9fc] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+48739908026</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#7dc9fc] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Skoczów</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#7dc9fc] h-7 w-7 animate-pulse" />
            <p className="text-2xl">1sikora.pawel@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject", { required: true })}
            placeholder="subject"
            className="contactInputY"
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="message"
            className="contactInputY"
          />
          <button
            type="submit"
            className="bg-[#36a9f7] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
          <Snackbar
            open={alert}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <SnackbarAlert onClose={handleClose} severity="success">
              Message has been sent
            </SnackbarAlert>
          </Snackbar>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
