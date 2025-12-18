"use client";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Box, Typography } from "@mui/material";

const OtpComponent: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  // Countdown Timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <Box>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        inputType="tel"
        shouldAutoFocus
        renderInput={(props, index) => (
          <input
            {...props}
            placeholder="-"
            style={{
              width: "56px",
              height: "52px",
              margin: index === 0 ? "10px 0 0 0" : "10px 0 0 10px",
              fontSize: "14px",
              borderRadius: "10px",
              backgroundColor: "#F2F9FF",
              color: "#3B3B3B",
              border: "1px solid #B4D9FF",
              textAlign: "center",
              outline: "none",
            }}
          />
        )}
        containerStyle={{ display: "flex", justifyContent: "start" }}
      />

      <Typography variant="h6" sx={{ mt: 2, color: "#041C39" }}>
        Didn’t get a code? <b style={{ color: "#041C39" }}>Resend in</b>
        <strong style={{ color: "#6E6E6E", marginLeft: "5px" }}>
          {`0${Math.floor(timer / 60)}:${
            timer % 60 < 10 ? `0${timer % 60}` : timer % 60
          }`}
          {/* 01:00 */}
        </strong>
      </Typography>
    </Box>
  );
};

export default OtpComponent;
