
import Pizza from "../../model/pizza";
import {
  Box,

  Card,

  CardContent,
  Chip,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import photo from "./chevre-miel.jpg";


type propsP = {
  pizza: Pizza;
};
const CardPizza = ({ pizza }: propsP) => {
  return (
    <div>
      <Card sx={{  margin: "20px" }}>
        <Box sx={{ display: "flex" }}>
          <Box >
            <img src={photo} alt={pizza.name}  />
          </Box>
          <Box  sx={{width:"50%"}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pizza.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pizza.description}
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{marginTop:'20px'}} >
            <Stack direction="row" spacing={7}>
              <Chip label={`${pizza.price} €`} color="success" size="medium" />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Input
                type="number"
                defaultValue={0}
                slotProps={{
                  input: {
                    min: 1,
                    max: 10,
                    step: 1,
                  },
                }}
              />
            </Stack>
          </Box>

        </Box>
      </Card>
    </div>
  );
};

export default CardPizza;
