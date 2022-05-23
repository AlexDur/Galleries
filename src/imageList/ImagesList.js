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
import pic13 from "../img/sommerecke.png";
import pic14 from "../img/wiese und aussicht.png";
import pic15 from "../img/turm.png";
import pic16 from "../img/mossemaettle_abfahrt.png";

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
          {itemData.map((item) => (
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
    title: "wald innen",
    rows: 2,
    cols: 2,
  },
  {
    img: pic5,
    title: "abendsonne1",
  },
  {
    img: pic4,
    title: "saftig grün",
  },
  {
    img: pic6,
    title: "abendsonne2evening sun 2",
    cols: 2,
  },
  {
    img: pic15,
    title: "turm",
    cols: 1,
    rows: 2,
  },
  {
    img: pic8,
    title: "bach brücke",
    rows: 2,
    cols: 3,
  },
  {
    img: pic14,
    title: "wiesen mit aussicht",
    cols: 3,
  },
  {
    img: pic10,
    title: "slightly sloping on the bike",
    rows: 1,
    cols: 1,
  },
  {
    img: pic13,
    title: "sommerecke",
  },

  {
    img: pic16,
    title: "abfahrt moosemaetlle",
    cols: 3,
    rows: 2,
  },
];
