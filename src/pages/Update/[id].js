import { useRouter } from "next/router";
// import { Router } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "85%",
  maxWidth: "1020px",
  overflowY: "auto",
  height: "100vh",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

const index = ({ handleClose }) => {
  const [jobname, setjobname] = useState();
  const [shopname, setshopname] = useState();
  const [shoploc, setshoploc] = useState();
  const [workersReq, setworkersReq] = useState();
  const [salary, setsalary] = useState();
  const [timing, settiming] = useState();
  const [postimg, setpostimg] = useState();
  // console.log(postimg)
  const [isVisible, setIsVisible] = useState(true);
  const [age, setage] = useState();
  const [experience, setexperience] = useState();
  const [description, setdescription] = useState();
  // const JWTtoken = window.localStorage.getItem("JWTtoken");/
  const formData = new FormData();
  formData.append("postimg", postimg);
  formData.append("jobname", jobname);
  formData.append("shopname", shopname);
  formData.append("shoploc", shoploc);
  formData.append("workersReq", workersReq);
  formData.append("salary", salary);
  formData.append("timing", timing);
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const config = {
    headers: {
      Authorization: `Bearer ${JWTtoken}`,
    },
  };
  const set = useParams();

  async function updatePic(id) {
    console.log(set);
    // if(!postimg||!jobname||!shopname||!shoploc||!workersReq||!salary||!timing)
    // {
    //   alert("please fill the fields")
    // }
    // else{
    //
    // }
    try {
      const check = await axios.put(
        `http://82.180.132.111/post/${id}`,
        { jobname, shoploc, shopname, workersReq, salary, timing },
        config
      );
      alert("record updated successfully");
      Router.push(`/my_posts`);
      console.log(check);
      // navigate("/session-timed-out");
      // console.log(sendForm);
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function update(id) {
    console.log(set);
    // if(!postimg||!jobname||!shopname||!shoploc||!workersReq||!salary||!timing)
    // {
    //   alert("please fill the fields")
    // }
    // else{
    //
    // }
    try {
      const check = await axios.post(`http:82.180.132.111:4500/setImage/${id}`, formData, config);
      alert("record updated successfully");
      // Router.push(`/my_posts`);
      console.log(check);
      // navigate("/session-timed-out");
      // console.log(sendForm);
    } catch (error) {
      console.log("Error", error);
    }
  }
  const [dataa, setDataa] = useState("");
  const Router = useRouter();
  const id = Router.query.id;
  return (
    <div>
      {isVisible && (
        <Modal
          aria-labelledby="Job-title"
          aria-describedby="job-inputs"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              Update Your Post
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  value={shopname}
                  onChange={(e) => setshopname(e.target.value)}
                  label="Shop Name: "
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Job Title: "
                  value={jobname}
                  onChange={(e) => setjobname(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Timings: "
                  value={timing}
                  onChange={(e) => settiming(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Location: "
                  value={shoploc}
                  onChange={(e) => setshoploc(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Age Required: "
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={salary}
                  onChange={(e) => setsalary(e.target.value)}
                  id="outlined-basic"
                  label="Salary Offered: "
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  value={workersReq}
                  onChange={(e) => setworkersReq(e.target.value)}
                  label="No. of Employee Required: "
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  value={experience}
                  onChange={(e) => setexperience(e.target.value)}
                  label="Experience required: "
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <input type="file" onChange={(e) => setpostimg(e.target.files[0])} />
              </Grid>
              {/* <button onClick={updatePic}>update</button> */}
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Description: "
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="outlined"
                    sx={{ color: "text.disabled", borderColor: "text.disabled" }}
                    onClick={() => setIsVisible(!isVisible, Router.push("/my_posts"))}
                  >
                    {isVisible ? "Close" : ""}
                  </Button>
                  {/* <button onClick={editUserDetails}>post</button> */}
                  <Button variant="contained" onClick={() => update(id, Router.push("/my_posts"))}>
                    update
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default index;
