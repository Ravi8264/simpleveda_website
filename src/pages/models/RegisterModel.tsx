// import React from "react";
import {
  Modal,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RegisterModal = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] max-w-[90vw] p-0 rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[radial-gradient(#f3a95c,#dc7d4c)] overflow-visible">
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-[#3b1d06] w-8 h-8 z-[100] rounded-full"
          style={{ position: "absolute" }}
          sx={{
            backgroundColor: "#3b1d06",
            "&:hover": {
              backgroundColor: "#3b1d06",
              transform: "none",
            },
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <CloseIcon className="text-[18px]" />
        </IconButton>

        {/* Logo */}
        <div className="pt-5 pb-2">
          <img
            src="https://simplevedas.com/wp-content/uploads/2022/03/Simple-Vedas-Registration-page-logo.png"
            alt="Simple Vedas Logo"
            className="w-[130px] block mx-auto"
          />
        </div>

        {/* Form Container */}
        <div className="px-5 md:px-8 pb-5">
          {/* First Name & Last Name Row */}
          <div className="flex gap-3 mb-3">
            <div className="flex-1">
              <div className="text-left mb-0.5">
                <span className="text-[#3b1d06] text-xs font-semibold">
                  First Name <span className="text-[#d32f2f]">*</span>
                </span>
              </div>
              <TextField
                fullWidth
                placeholder=""
                variant="outlined"
                className="bg-white rounded-md [&_.MuiOutlinedInput-root]:h-[42px] [&_.MuiOutlinedInput-root]:text-[14px] [&_.MuiOutlinedInput-root_fieldset]:border-0 [&_.MuiOutlinedInput-input]:py-2 [&_.MuiOutlinedInput-input]:px-3"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused": {
                      outline: "none",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    "&:focus": {
                      outline: "none",
                    },
                  },
                }}
              />
            </div>

            <div className="flex-1">
              <div className="text-left mb-0.5">
                <span className="text-[#3b1d06] text-xs font-semibold">
                  Last Name <span className="text-[#d32f2f]">*</span>
                </span>
              </div>
              <TextField
                fullWidth
                placeholder=""
                variant="outlined"
                className="bg-white rounded-md [&_.MuiOutlinedInput-root]:h-[42px] [&_.MuiOutlinedInput-root]:text-[14px] [&_.MuiOutlinedInput-root_fieldset]:border-0 [&_.MuiOutlinedInput-input]:py-2 [&_.MuiOutlinedInput-input]:px-3"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused": {
                      outline: "none",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    "&:focus": {
                      outline: "none",
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <div className="text-left mb-0.5">
              <span className="text-[#3b1d06] text-xs font-semibold">
                Email <span className="text-[#d32f2f]">*</span>
              </span>
            </div>
            <TextField
              fullWidth
              type="email"
              placeholder=""
              variant="outlined"
              className="bg-white rounded-md [&_.MuiOutlinedInput-root]:h-[42px] [&_.MuiOutlinedInput-root]:text-[14px] [&_.MuiOutlinedInput-root_fieldset]:border-0 [&_.MuiOutlinedInput-input]:py-2 [&_.MuiOutlinedInput-input]:px-3"
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused": {
                    outline: "none",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  "&:focus": {
                    outline: "none",
                  },
                },
              }}
            />
          </div>

          {/* Select Country & WhatsApp No Row */}
          <div className="flex gap-3 mb-3">
            <div className="flex-1">
              <div className="text-left mb-0.5">
                <span className="text-[#3b1d06] text-xs font-semibold">
                  Select Country <span className="text-[#d32f2f]">*</span>
                </span>
              </div>
              <Select
                fullWidth
                defaultValue="India +91"
                className="bg-white rounded-md h-[42px] text-[14px] [&_.MuiOutlinedInput-notchedOutline]:border-0"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused": {
                    outline: "none",
                  },
                }}
              >
                <MenuItem value="India +91">India +91</MenuItem>
                <MenuItem value="USA +1">USA +1</MenuItem>
                <MenuItem value="UK +44">UK +44</MenuItem>
              </Select>
            </div>

            <div className="flex-1">
              <div className="text-left mb-0.5">
                <span className="text-[#3b1d06] text-xs font-semibold">
                  Whatsapp No. <span className="text-[#d32f2f]">*</span>
                </span>
              </div>
              <TextField
                fullWidth
                placeholder=""
                variant="outlined"
                className="bg-white rounded-md [&_.MuiOutlinedInput-root]:h-[42px] [&_.MuiOutlinedInput-root]:text-[14px] [&_.MuiOutlinedInput-root_fieldset]:border-0 [&_.MuiOutlinedInput-input]:py-2 [&_.MuiOutlinedInput-input]:px-3"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused": {
                      outline: "none",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    "&:focus": {
                      outline: "none",
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="text-left mb-0.5">
              <span className="text-[#3b1d06] text-xs font-semibold">
                Password <span className="text-[#d32f2f]">*</span>
              </span>
            </div>
            <TextField
              fullWidth
              type="password"
              placeholder=""
              variant="outlined"
              className="bg-white rounded-md [&_.MuiOutlinedInput-root]:h-[42px] [&_.MuiOutlinedInput-root]:text-[14px] [&_.MuiOutlinedInput-root_fieldset]:border-0 [&_.MuiOutlinedInput-input]:py-2 [&_.MuiOutlinedInput-input]:px-3"
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused": {
                    outline: "none",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  "&:focus": {
                    outline: "none",
                  },
                },
              }}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <div className="text-left mb-0.5">
              <span className="text-[#3b1d06] text-xs font-semibold">
                Confirm Password <span className="text-[#d32f2f]">*</span>
              </span>
            </div>
            <TextField
              fullWidth
              type="password"
              placeholder=""
              variant="outlined"
              className="bg-white rounded-md [&_.MuiOutlinedInput-root]:h-[42px] [&_.MuiOutlinedInput-root]:text-[14px] [&_.MuiOutlinedInput-root_fieldset]:border-0 [&_.MuiOutlinedInput-input]:py-2 [&_.MuiOutlinedInput-input]:px-3"
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused": {
                    outline: "none",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  "&:focus": {
                    outline: "none",
                  },
                },
              }}
            />
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="mb-3 bg-[#f9f9f9] p-2 rounded-md border border-[#d3d3d3] flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-[#ccc] rounded-sm" />
            <span className="text-xs text-[#555]">I'm not a robot</span>
            <div className="ml-auto">
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Register Button */}
          <Button
            fullWidth
            variant="contained"
            className="bg-[#24100F] normal-case text-[15px] font-bold py-2 rounded-md text-white shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
            sx={{
              backgroundColor: "#24100F",
              color: "#fff",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#24100F",
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;