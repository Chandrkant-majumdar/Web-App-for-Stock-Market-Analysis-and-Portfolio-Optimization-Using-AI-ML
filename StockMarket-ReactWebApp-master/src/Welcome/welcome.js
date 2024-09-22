import React, { useState } from "react";
import Nav from "../Components/Navbar/Navbar";
import Header from "../Components/Header/header";
import Features from "../Components/FeatureSection/features";
import Footer from "../Components/Footer/Footer";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import LoginDialog from "../Components/Login/login";
import RegisterDialog from "../Components/Signup/Registration";

function WelcomePage() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false);

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  const handleOpenRegisterDialog = () => {
    setOpenRegisterDialog(true);
  };

  const handleCloseRegisterDialog = () => {
    setOpenRegisterDialog(false);
  };

  return (
    <>
      <Nav
        brandText="Stock Market"
        menuItems={[
          { text: "Login", onClick: handleOpenLoginDialog },
          { text: "Register", onClick: handleOpenRegisterDialog },
        ]}
      />
      <Header />
      <Features />
      <Footer />
      <Dialog
        open={openLoginDialog}
        onClose={handleCloseLoginDialog}
        PaperProps={{
          style: {
            marginTop: 0,
            paddingTop: 0,
          },
        }}
      >
        <DialogContent>
          <LoginDialog onClose={handleCloseLoginDialog} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={openRegisterDialog}
        onClose={handleCloseRegisterDialog}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          style: {
            marginTop: 0,
            paddingTop: 0,
          },
        }}
      >
        <DialogContent>
          <RegisterDialog onClose={handleCloseRegisterDialog} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default WelcomePage;
