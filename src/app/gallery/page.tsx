
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "../../components/cloudinary-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import GalleryGrid from "./gallery-grid";

export type SearchResults = {
  public_id: string;
  tags: string[];
};
export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold"> Gallery</h1>
          <UploadButton />
        </div>
        <GalleryGrid images={results.resources}/>
      </div>
    </section>
  );
}
