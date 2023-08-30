import React, { useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Grid,
  styled
} from "@mui/material";

const AppContainer = styled(Container)({
  paddingTop: "2rem",
  textAlign: "center"
});

const Title = styled(Typography)({
  marginBottom: "1rem"
});

const Explanation = styled(Typography)({
  marginBottom: "2rem"
});

const FormSelect = styled(FormControl)({
  minWidth: "180px",
  marginBottom: "1.5rem"
});

const TimeDisplay = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  backgroundColor: "#f5f5f5",
  padding: "1rem",
  borderRadius: "4px"
});

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [koreanTime, setKoreanTime] = useState("");

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);

    // Time zone mappings for selected countries
    const timeZoneMappings = {
      USA: "America/New_York",
      UK: "Europe/London",
      Japan: "Asia/Tokyo",
      Australia: "Australia/Sydney"
    };

    const selectedTimeZone = timeZoneMappings[selectedCountry];
    if (selectedTimeZone) {
      const currentKoreanTime = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul"
      });
      const selectedCountryTime = new Date().toLocaleString("ko-KR", {
        timeZone: selectedTimeZone
      });
      setKoreanTime(
        `${selectedCountryTime} (Korean Time: ${currentKoreanTime})`
      );
    } else {
      setKoreanTime("");
    }
  };

  return (
    <AppContainer>
      <Title variant="h4">Time Zone Converter</Title>
      <Explanation variant="body1" paragraph>
        A web page that shows the time of a country in Korean time.
      </Explanation>
      <FormSelect variant="outlined">
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          label="Select a country"
        >
          <MenuItem value="">Select a country</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
          <MenuItem value="Japan">Japan</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
        </Select>
      </FormSelect>
      <Grid container justifyContent="center">
        <Grid item>
          <TimeDisplay variant="body1">{koreanTime}</TimeDisplay>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default App;
