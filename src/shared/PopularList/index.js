import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import MaskedText from "../MaskedText";

const PopularList = (props) => {
  const [items, setItems] = useState();

  const theme = useTheme()

  useEffect(() => {
    // dummy fetching data
    setItems([
      {
        id: "14w",
        title: "Et omnis aut id",
        description: "Et omnis aut id. Aut eaque est quaerat. ",
        src: "https://picsum.photos/200/300",
      },
      {
        id: "14a",
        title: "Et omnis aut id",
        description: "Et omnis aut id. Aut eaque est quaerat. ",
        src: "https://picsum.photos/200/300",
      },
      {
        id: "14s",
        title: "Et omnis aut id",
        description: "Et omnis aut id. Aut eaque est quaerat. ",
        src: "https://picsum.photos/200/300",
      },
      {
        id: "144",
        title: "Et omnis aut id",
        description: "Et omnis aut id. Aut eaque est quaerat. ",
        src: "https://picsum.photos/200/300",
      },
      {
        id: "878",
        title: "Et omnis aut id",
        description: "Et omnis aut id. Aut eaque est quaerat. ",
        src: "https://picsum.photos/200/300",
      },
    ]);
  }, []);
  return (
    <Box maxWidth={"30em"} display={"grid"} gap={4}>
        <Typography variant="h3" fontSize={'32px'}>
        Popular at the 
       <MaskedText>moment</MaskedText>
        </Typography>
      {items && items.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            src={item.src}
          />
        );
      })}
    </Box>
  );
};

export default PopularList;