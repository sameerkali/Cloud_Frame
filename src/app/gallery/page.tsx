// import { CloudinaryImage } from "./cloudinary-image";
// import UploadButton from "./upload-button";
// import cloudinary from "cloudinary";

// export type SearchResults = {
//   public_id: string;
//   tags: string[];
// };
// export default async function GalleryPage() {
//   const results = (await cloudinary.v2.search
//     .expression("resource_type:image")
//     .sort_by("created_at", "desc")
//     .with_field("tags")
//     .max_results(30)
//     .execute()) as { resources: SearchResults[] };
//   //grid
//   const MAX_COLUMNS = 4;
//   function getColumns(colIndex: number) {
//     return results.resources.filter(
//       (resource, idx) => idx % MAX_COLUMNS === colIndex
//     );
//   }

//   return (
//     <section>
//       <div className="flex flex-col gap-8">
//         <div className="flex justify-between">
//           <h1 className="text-4xl font-bold"> Gallery</h1>
//           <UploadButton />
//         </div>
//         <div className="grid grid-cols-4 gap-4">
//           {/* grid */}
//           {[
//             getColumns(0),
//             getColumns(1),
//             getColumns(2),
//             getColumns(3)
//           ].map((column, idx) =>
//             <div key={idx} className="flex flex-col gap-4">
//               {column.map(result =>
//                 <CloudinaryImage
//                   width="400"
//                   height="300"
//                   key={result.public_id}
//                   _imagedata={result}
//                   alt="image description"
//                 />
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "./cloudinary-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";

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
        <ImageGrid images={results.resources} />
      </div>
    </section>
  );
}
