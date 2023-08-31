"use client";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export default function DemoShareDocument() {
  return (
    <>
    <Card className="mb-10"> 
      <CardHeader>
        <CardTitle>Cloud Frame Memories</CardTitle>
        <CardDescription>
        Cloudframe is a Next.js and Tailwind CSS app with Cloudinary API that lets you store, edit, and organize your images with AI-powered features. You can add images to favorites, create albums, and even use AI to automatically tag your images or suggest edits. Cloudframe is the perfect way to keep your images organized and accessible.
        </CardDescription>
        <CardDescription>
          Developed by
          <a style={{color: '#8AFF8A'}} target="_blank" href="https://github.com/sameerkali/">
            {" "}@sameerkali
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input value="https://sameers-portfolio.vercel.app/" readOnly />
          <Button variant="default" className="shrink-0">
            <a target="_blank" href="https://sameers-portfolio.vercel.app/">
              Portfolio
            </a>
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Other Cool Projects</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>
                    <Image
                      src="/filmsloth.png"
                      width="100"
                      height="100"
                      alt="icon of this photo album app"
                    />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Film Sloth</p>
                  <p className="text-sm text-muted-foreground">
                  FilmSloth is an 🔍🔎 app that helps you discover 🎞️ hidden gems in cinema. It does this by providing you with ℹ️ information about lesser-known films, as well as 💡 insights into the cinematic process. FilmSloth is 💯 intuitive and easy to use, making it the 🔥 perfect way to explore the world of cinema.
                  </p>
                </div>
                <Button variant="default" className="shrink-0">
                  <a
                    target="_blank"
                    href="https://filmsloth.netlify.app/"
                  >
                    Live
                  </a>
                </Button>
                <Button variant="secondary" className="shrink-0">
                  <a
                    target="_blank"
                    href="https://github.com/sameerkali/FilmSloth"
                  >
                    Code
                  </a>
                </Button>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------ */}

            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>
                    <Image
                      src="/cv.png"
                      width="55"
                      height="55"
                      alt="icon of this photo album app"
                    />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Indie Gems Portal</p>
                  <p className="text-sm text-muted-foreground">
                  Discover games on 🎮 Indie Gems Portal. Hunt by genre, platform, release date, and ⭐ ratings. Its a treasure map for your kind of games, making exploration exciting! 🗺️🕹️
                  
                  </p>
                </div>
                <Button variant="default" className="shrink-0">
                  <a
                    target="_blank"
                    href="https://indie-gems-portal.vercel.app/"
                  >
                    Live
                  </a>
                </Button>
                <Button variant="secondary" className="shrink-0">
                  <a
                    target="_blank"
                    href="https://github.com/sameerkali/Indie_Gems_Portal"
                  >
                    Code
                  </a>
                </Button>
              </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>
                    <Image
                      src="/galaxy.png"
                      width="100"
                      height="100"
                      alt="icon of this photo album app"
                    />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">SpaceVoyage [under construction]</p>
                  <p className="text-sm text-muted-foreground">
                  In SpaceVoyage: Cosmic Rocketry, embark on a thrilling space exploration journey with the ability to launch rockets to distant Kepler planets within the universe. Unleash your curiosity as you explore uncharted territories, encounter wonders of the cosmos, and undertake a celestial odyssey of discovery.
                  </p>
                </div>
                <Button variant="destructive" className="shrink-0">
                  <a
                    href="/profile"
                  >
                    Live
                  </a>
                </Button>
                <Button variant="secondary" className="shrink-0">
                  <a
                    target="_blank"
                    href="https://github.com/sameerkali/SpaceVoyage"
                  >
                    Code
                  </a>
                </Button>
              </div>
              {/* ----------------------------------------------------------------------------- */}
            </div><div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>
                    <Image
                      src="/music.png"
                      width="55"
                      height="55"
                      alt="icon of this photo album app"
                    />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Portfolio with Music</p>
                  <p className="text-sm text-muted-foreground">
                  My personal portfolio is a React18 website that showcases my work in web development. It features a responsive design, a clean interface, and a modern soundscape.
                  </p>
                </div>
                <Button variant="default" className="shrink-0">
                  <a
                    target="_blank"
                    href="https://sameer69.netlify.app/"
                  >
                    Live
                  </a>
                </Button>
                <Button variant="secondary" className="shrink-0">
                  <a
                    target="_blank"
                    href="https://github.com/sameerkali/portfolio02"
                  >
                    Code
                  </a>
                </Button>
              </div>
            </div>  
          </div>
        </div>
      </CardContent>
    </Card>
    <Footer/>
      </>
  );
}
