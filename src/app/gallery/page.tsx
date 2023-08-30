import { CloudinaryImage } from "./Cloudinary-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
type SearchResults = {
  public_id: string;
};
export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as {resources: SearchResults[]};
  // console.log(results);

  return (
    <section>
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold"> Gallery</h1>
        <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
            width="400"
            height="300"
             key={result.public_id}
             src={result.public_id}
             alt="image description"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
