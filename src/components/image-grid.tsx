import { SearchResults } from "@/app/gallery/page";
import { CloudinaryImage } from "@/app/gallery/cloudinary-image";

export function ImageGrid({ images }: { images: SearchResults[] }) {
  //grid
  const MAX_COLUMNS = 4;
  function getColumns(colIndex: number) {
    return images.filter(
      (resource, idx) => idx % MAX_COLUMNS === colIndex
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        getColumns(0), getColumns(1), getColumns(2), getColumns(3),
      ].map((column, idx) =>
        <div key={idx} className="flex flex-col gap-4">
          {column.map(result =>
            <CloudinaryImage
              width="400"
              height="300"
              key={result.public_id}
              _imagedata={result}
              alt="image description"
            />
          )}
        </div>
      )}
    </div>
  );
}
