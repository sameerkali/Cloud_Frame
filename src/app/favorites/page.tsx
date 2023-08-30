// import cloudinary from "cloudinary";
// import { SearchResult } from "../gallery/page";
// import { ForceRefresh } from "@/components/force-refresh";
// import FavoritesList from "./favorites-list";

// export default async function FavoritesPage() {
//   const results = (await cloudinary.v2.search
//     .expression("resource_type:image AND tags=favorite")
//     .sort_by("created_at", "desc")
//     .with_field("tags")
//     .max_results(30)
//     .execute()) as { resources: SearchResult[] };

//   return (
//     <section>
//       <ForceRefresh />

//       <div className="flex flex-col gap-8">
//         <div className="flex justify-between">
//           <h1 className="text-4xl font-bold">Favorite Images</h1>
//         </div>

//         <FavoritesList initialResources={results.resources} />
//       </div>
//     </section>
//   );
// }


import { CloudinaryImage } from "../gallery/cloudinary-image";
import cloudinary from "cloudinary";
import { SearchResults } from "../gallery/page";
import { ForceRefresh } from "@/components/ui/force-refresh";

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  return (
    <section>
      <ForceRefresh/>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold"> Favorite Images</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map(result =>
            <CloudinaryImage
            path="/favorite"
              width="400"
              height="300"
              key={result.public_id}
              _imagedata={result}
              src={result.public_id}
              alt="image description"
            />
          )}
        </div>
      </div>
    </section>
  );
}
