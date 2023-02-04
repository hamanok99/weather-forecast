import { Box } from "@mui/material";

type WeatherProps = {
  title?: string;
  weather?: string;
};

export const Weather = ({ title = "", weather = "" }: WeatherProps) => {
  return (
    <>
      <Box
        sx={{
          margin: "10px 10px 0px 10px",
          fontWeight: "bold"
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          backgroundColor: "#ccc",
          margin: "0px 10px",
          height: "60px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <span>{weather}</span>
      </Box>
    </>
  );
};
