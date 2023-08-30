"use server";
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(
  _publicid: string,
  isFavorite: boolean,
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [_publicid]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [_publicid]);
  }
}
