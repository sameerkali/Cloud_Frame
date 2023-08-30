"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResults } from "../app/gallery/page";
import { FullHeart } from "@/components/icons/FullHeart";
import { ImageMenu } from "./image-menu";

export function CloudinaryImage(
  props:{
    _imagedata: SearchResults;
    onUnheart?: (unheartedResource: SearchResults) => void;
  }& Omit<CldImageProps, 'src'>) {
  const [transition, startTransition] = useTransition();
  const { _imagedata, onUnheart } = props;
  const [isFavorited, setIsFavorited] = useState(
    _imagedata.tags.includes("favorite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={_imagedata.public_id} />
      {isFavorited
        ? <FullHeart
            onClick={() => {
              onUnheart?.(_imagedata)
              setIsFavorited(false);
              startTransition(() => {
                setAsFavoriteAction(_imagedata.public_id, false);
              });
            }}
            className="absolute top-2 left-2   text-red-600 hover:text-white cursor-pointer "
          />
        : <Heart
            onClick={() => {
              setIsFavorited(true);
              startTransition(() => {
                setAsFavoriteAction(_imagedata.public_id, true);
              });
            }}
            className="absolute top-2 left-2 hover:text-red-600 cursor-pointer "
          />}

          <ImageMenu image={_imagedata}/>
    </div>
  );
}
