// import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LoginModal = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  return (
    <Modal open={open} onClose={handleClose}>
     <Box
        sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "630px",
            maxWidth: "90vw",
            p: 0,
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            background: "radial-gradient(#f3a95c, #dc7d4c)", // ✅ Changed to radial gradient
            textAlign: "center",
            overflow: "hidden",
        }}
        >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#fff",
            background: "#3b1d06",
            width: 36,
            height: 36,
            zIndex: 10,
            "&:hover": { 
              background: "#2a1404",
              transform: "scale(1.05)"
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Logo */}
        <Box sx={{ pt: 5, pb: 3 }}>
          <img
            src="https://simplevedas.com/wp-content/uploads/2022/03/Simple-Vedas-Registration-page-logo.png"
            alt="Simple Vedas Logo"
            style={{
              width: 200,
              display: "block",
              margin: "0 auto",
            }}
          />
        </Box>

        {/* Form Container */}
        <Box sx={{ px: 8, pb: 6 }}>
          <TextField
            fullWidth
            placeholder="Enter username or email address"
            variant="outlined"
            sx={{
              mb: 2.5,
              backgroundColor: "white",
              borderRadius: "6px",
              "& .MuiOutlinedInput-root": {
                height: "50px",
                fontSize: "15px",
                "& fieldset": { 
                  borderColor: "transparent",
                  borderWidth: 0
                },
                "&:hover fieldset": { 
                  borderColor: "transparent" 
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  borderWidth: 0
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "14px 16px",
              },
            }}
          />

          <TextField
            fullWidth
            type="password"
            placeholder="Enter your password"
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "white",
              borderRadius: "6px",
              "& .MuiOutlinedInput-root": {
                height: "50px",
                fontSize: "15px",
                "& fieldset": { 
                  borderColor: "transparent",
                  borderWidth: 0
                },
                "&:hover fieldset": { 
                  borderColor: "transparent" 
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  borderWidth: 0
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "14px 16px",
              },
            }}
          />

          {/* Remember Me */}
          <FormControlLabel
            control={
              <Checkbox 
                sx={{ 
                  color: "#3b1d06",
                  p: 0,
                  mr: 1,
                  '&.Mui-checked': {
                    color: "#17A8E3"
                  }
                }} 
              />
            }
            label="Remember Me"
            sx={{
              color: "#3b1d06",
              mb: 3,
              ml: 0,
              "& .MuiFormControlLabel-label": { 
                fontSize: "15px",
                fontWeight: 500
              },
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#24100f",
              "&:hover": { 
                backgroundColor: "#3b1d06",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
              },
              textTransform: "none",
              fontSize: "17px",
              fontWeight: 600,
              py: 1.5,
              mb: 3.5,
              borderRadius: "6px",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              transition: "all 0.2s ease"
            }}
          >
            Login
          </Button>

          {/* Footer Links */}
          <Box sx={{ textAlign: "center", color: "#3b1d06", fontSize: "15px" }}>
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "#3b1d06",
                fontSize: "15px",
                fontWeight: 500,
                mr: 0.5,
                "&:hover": {
                  color: "#2a1404"
                }
              }}
            >
              Register
            </Link>
            <span style={{ margin: "0 6px", color: "#3b1d06" }}>|</span>
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "#3b1d06",
                fontSize: "15px",
                fontWeight: 500,
                ml: 0.5,
                "&:hover": {
                  color: "#2a1404"
                }
              }}
            >
              Forgot Password
            </Link>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};


export default LoginModal