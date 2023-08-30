"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setAsFavoriteAction(
  _publicid: string,
  isFavorite: boolean,
  path: string,
) {
  if (isFavorite) {
    // console.log("removing fav from " + _publicid);
    await cloudinary.v2.uploader.add_tag("favorite", [_publicid]);
  } else {
    // console.log(" add to fav  " + _publicid);
    await cloudinary.v2.uploader.remove_tag("favorite", [_publicid]);
  }
  await new Promise(resolve => setTimeout(resolve, 1500))
  revalidatePath(path);
}
