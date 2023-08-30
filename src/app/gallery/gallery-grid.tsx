"use client";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "../../components/cloudinary-image";    
import { SearchResults } from "./page";

export default function GalleryGrid({images}:{images: SearchResults}) {
  return (
    <ImageGrid
      images={images}
      getImage={(_imagedata: SearchResults) => {
        return (
          <CloudinaryImage
            width="400"
            height="300"
            key={_imagedata.public_id}
            _imagedata={_imagedata}
            alt="image description"
          />
        );
      }}
    />
  );
}
