import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <div className="foot">
        <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          rowGap="30px"
          columnGap="clamp(20px, 30px, 40px)"
        >
          <Box width="clamp(20%, 30%, 40%)">
            <Typography
              variant="h4"
              fontWeight="bold"
              mb="30px"
              color={shades.secondary[500]}
            >
              Bookerin
            </Typography>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </div>
          </Box>

          <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
              Contacto
            </Typography>
            <Typography mb="30px">Jonay (apellidos)</Typography>
            <Typography mb="30px">Felipe Gómez Fuentes</Typography>
            <Typography mb="30px">Noelia Ibáñez Silvestre </Typography>
          </Box>

        </Box>
      </Box>
    </div>
  );
}

export default Footer;