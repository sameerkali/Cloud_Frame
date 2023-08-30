"use client";

import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { SearchResults } from "@/app/gallery/page";

export default function AlbumGrid({ images }: { images: SearchResults[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResults) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            _imagedata={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
