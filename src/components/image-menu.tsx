import { FolderPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Menu } from "./icons/menu";
import AddToAlbumDialog from "./add-to-album";
import { SearchResults } from "@/app/gallery/page";

export function ImageMenu({image} : {image: SearchResults}) {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 p-0 h-8">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog
            image={image}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
