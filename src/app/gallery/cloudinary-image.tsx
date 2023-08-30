"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResults } from "./page";
import { FullHeart } from "@/components/icons/FullHeart";

export function CloudinaryImage(props: any & {_imagedata: SearchResults; path: string}) {
  const [transition, startTransition] = useTransition();
  const {_imagedata} = props;
  const isFavorited = _imagedata.tags.includes('favorite')
  return (
    <div className="relative">
      <CldImage {...props} src={_imagedata.public_id} />
      {isFavorited
        ? <FullHeart
            onClick={() => {
              startTransition(() => {
                setAsFavoriteAction(_imagedata.public_id, false, props.path);
              });
            }}
            className="absolute top-2 right-2   text-red-600 hover:text-white cursor-pointer "
          />
        : <Heart
            onClick={() => {
              startTransition(() => {
                setAsFavoriteAction(_imagedata.public_id, true, props.path);
              });
            }}
            className="absolute top-2 right-2 hover:text-red-600 cursor-pointer "
          />}
    </div>
  );
}
