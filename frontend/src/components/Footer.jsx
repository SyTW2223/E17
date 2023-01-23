import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <div className="foot">
        <Box marginTop="80px" padding="40px 0">
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
              Bookerin es una librería online creada como proyecto final para
              la asignatura de Sistemas y Tecnologías Web del itinerario 5 de 
              la Universidad de La Laguna.
            </div>
          </Box>

          <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
              Contacto
            </Typography>
            <Typography mb="30px">Jonay Méndez Márquez</Typography>
            <Typography mb="30px">Felipe Gómez Fuentes</Typography>
            <Typography mb="30px">Noelia Ibáñez Silvestre </Typography>
          </Box>

        </Box>
      </Box>
    </div>
  );
}

export default Footer;