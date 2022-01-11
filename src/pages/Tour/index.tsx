import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ImageCollage from "../../components/compose/ImageCollage";
import CustomizedAccordions from "../../components/core/Accordion";
import BasicModal from "../../components/core/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vehas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="body1" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          voluptatibus expedita reprehenderit modi, hic, deserunt excepturi
          nihil dolorum illum enim sed quo quod et optio ratione aliquam aut
          sapiente possimus totam vitae asperiores eaque autem dolor. Quia autem
          rerum voluptas?
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
