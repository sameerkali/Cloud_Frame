"use client";

import { useEffect, useState } from "react";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { ImageGrid } from "@/components/image-grid";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid images={resources} 
    getImage={(_imagedata: SearchResult) => {
      return (
        <CloudinaryImage
          key={_imagedata.public_id}
          _imagedata={_imagedata}
          width="400"
          height="300"
          alt="an image of something"
          onUnheart={(unheartedResource) => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            );
          }}
        />
      );
    }}
    />
  );
}