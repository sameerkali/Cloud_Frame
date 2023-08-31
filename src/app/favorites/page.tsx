import { CloudinaryImage } from "../../components/cloudinary-image";
import cloudinary from "cloudinary";
import { SearchResults } from "../gallery/page";
import { ForceRefresh } from "@/components/ui/force-refresh";
import FavoritesList from "./favorites-list";
import { Footer } from "@/components/footer";

export default async function FavoritesPage() {
   const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(200)
    .execute()) as { resources: SearchResults[] };

  return (
    <>
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold"> Favorite Images</h1>
        </div>
        
        <FavoritesList initialResources={results.resources} />
      </div>
    </section>
    <Footer/>
    </>
  );
}
