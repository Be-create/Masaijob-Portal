import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Adminjoblisting } from "./joblisting";
import Jobpost from "./jobpost";
import { Navbar } from "./navbar";
import Cookies from "universal-cookie";
import { updatestate } from "../redux/action";
import { useDispatch } from "react-redux";
import { Alert, Button, Snackbar } from "@mui/material";

export const Adminpage = () => {
  let navigate = useNavigate();
  const cookies = new Cookies();
  let dispatch = useDispatch();
  let [alert, setAlert] = React.useState(true);
  let [toastDisplay, setToastDisplay] = useState(false);
  let [toastMessage, setToastMessage] = useState("");
  // {let [data,setdata]= useState([])}
  useEffect(() => {
    let token = cookies.get("token");
    if (token) {
      try {
        fetch(` https://masaijobserver1.onrender.com/api/job`, {
          headers: {
            Authorization: `${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            //console.log(res.data)
            if (res.data.length !== 0) {
              dispatch(updatestate(res.data));
            } else {
              dispatch(updatestate(["NoData"]));
            }
            //console.log(temp)
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/register");
    }
  }, []);
  return (
    <div>
      <Snackbar
        open={toastDisplay}
        onClose={() => setToastDisplay(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToastDisplay(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
      <Navbar />
      <Routes>
        <Route
          path="/formpage"
          element={
            <Jobpost
              setToastDisplay={setToastDisplay}
              setToastMessage={setToastMessage}
            />
          }
        />
        <Route path="/jobs" element={<Adminjoblisting />} />
      </Routes>
    </div>
  );
};
