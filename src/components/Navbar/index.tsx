import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 border-b-2 bg-white z-50">
      <div className="flex gap-4">
        <Link href="/">
          <Image
            src="/vercel.svg"
            width={141}
            height={32}
            alt="Vercel's logo"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          w-academy
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {/* @todo: using internal router */}
                  <li>
                    <Link href="/course/typescript" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          Typescript
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/course/react" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          React.JS
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/course/javascript" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          Javascript
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Button asChild className="mt-2">
                      <Link href="/courses">
                        Explore courses <FaArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="https://github.com/kelilipan/w-academy"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Source Code
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/kelilipan.png" alt="@kelilipan" />
        <AvatarFallback>WI</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;
