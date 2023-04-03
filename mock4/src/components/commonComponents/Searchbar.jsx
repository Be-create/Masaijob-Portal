import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch, useSelector } from "react-redux";
import { updatestate } from "../redux/action";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function Searchbar(props) {
  const { setToastDisplay, setToastMessage, setSeverity } = props;
  let [input, setinput] = React.useState("");
  let [alert, setAlert] = React.useState(false);
  let data = useSelector((state) => state.jobs);
  let dispatch = useDispatch();
  function Search() {
    let temp = data.filter((key) => key.companyname === input);
    if (temp.length !== 0) dispatch(updatestate(temp));
    else {
      setSeverity("error");
      setToastMessage("Nothing Found :(");
      setToastDisplay(true);
    }
  }

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "80%",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, borderRadius: "20%" }}
        placeholder="Search something ..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => Search()}
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
