import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import pic1 from "../img/pic002.png";
import pic2 from "../img/pic_0178.png";
import pic3 from "../img/pic_0712.png";
import pic4 from "../img/pic_1919.png";
import pic5 from "../img/pic170.png";
import pic6 from "../img/pic238.png";
import pic7 from "../img/pic064.png";
import pic8 from "../img/bach.png";
/* import pic9 from "../img/pic_4282.png" */
import pic10 from "../img/pic_1911.png";
import pic11 from "../img/blue.png";
import pic12 from "../img/pic111.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <ImageList
          variant="quilted"
          cols={4}
          rowWidth={200}
          style={{ paddingBottom: 100 }}
        >
          {itemData.map(item => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}

const itemData = [
  {
    img: pic1,
    title: "wood",
    rows: 2,
    cols: 2,
  },
  {
    img: pic5,
    title: "evening sun",
  },
  {
    img: pic4,
    title: "juicy green",
  },
  {
    img: pic6,
    title: "evening sun 2",
    cols: 2,
  },
  {
    img: pic2,
    title: "view2",
    cols: 2,
  },
  {
    img: pic3,
    title: "bridge over creek",
    rows: 2,
    cols: 2,
  },
  {
    img: pic7,
    title: "dead tree with a view",
  },
  {
    img: pic8,
    title: "bridge over creek",
  },
  {
    img: pic10,
    title: "slightly sloping on the bike",
    rows: 2,
    cols: 2,
  },
  {
    img: pic11,
    title: "blue mountains",
    cols: 2,
    rows: 2,
  },
  {
    img: pic12,
    title: "shadowy and sunny valley",
    cols: 4,
    rows: 3,
  },
];
