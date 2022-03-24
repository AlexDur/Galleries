import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import pic1 from "../img/pic002.png";
import pic2 from "../img/pic_0178.png";
import pic3 from "../img/pic_0712.png";
import pic4 from "../img/pic_1919.png";
import pic5 from "../img/pic170.png";
import pic6 from "../img/pic238.png";
import pic7 from "../img/pic064.png";
import pic8 from "../img/pic238.png";
/* import pic9 from "../img/pic_4282.png" */
import pic10 from "../img/pic_1911.png";
import pic11 from "../img/pic4.png";
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
  );
}

const itemData = [
  {
    img: pic1,
    title: "pic1",
    rows: 2,
    cols: 2,
  },
  {
    img: pic5,
    title: "pic5",
  },
  {
    img: pic4,
    title: "pic4",
  },
  {
    img: pic6,
    title: "pic6",
    cols: 2,
  },
  {
    img: pic2,
    title: "pic2",
    cols: 2,
  },
  {
    img: pic3,
    title: "pic3",
    rows: 2,
    cols: 2,
  },
  {
    img: pic7,
    title: "pic7",
  },
  {
    img: pic8,
    title: "pic8",
  },
  {
    img: pic10,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "pic10",
  },
  {
    img: pic11,
    title: "pic11",
  },
  {
    img: pic12,
    title: "",
    cols: 2,
  },
];
