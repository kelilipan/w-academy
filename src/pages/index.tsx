import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Main from "@/Layouts/Main";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <Main withFooter>
      <section className="text-center py-[120px] bg-slate-100">
        <h1 className="font-bold text-8xl">w-academy</h1>
        <p className="text-lg">Learn programming with pain.</p>
        <Button className="mt-4" asChild size="lg">
          <Link href="/courses">
            Learn, now! <FaArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>
      <section className="py-12 text-center container">
        <h2 className="font-bold text-2xl">What they say?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Card className="text-center shadow-sm">
            <CardHeader className="flex items-center">
              <Avatar className="w-28 h-28">
                <AvatarImage
                  src="https://github.com/kelilipan.png"
                  alt="@kelilipan"
                />
                <AvatarFallback>WI</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                illo consectetur ratione, sequi quia aspernatur dolores! Ea
                fugit saepe laborum? Nulla fugit dicta sunt natus esse amet
                praesentium. Nesciunt, labore.
              </p>
              <p className="italic font-bold text-lg text-gray-600">Wisesa</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm">
            <CardHeader className="flex items-center">
              <Avatar className="w-28 h-28">
                <AvatarImage
                  src="https://github.com/kelilipan.png"
                  alt="@kelilipan"
                />
                <AvatarFallback>WI</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                illo consectetur ratione, sequi quia aspernatur dolores! Ea
                fugit saepe laborum? Nulla fugit dicta sunt natus esse amet
                praesentium. Nesciunt, labore.
              </p>
              <p className="italic font-bold text-lg text-gray-600">Wisesa</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm">
            <CardHeader className="flex items-center">
              <Avatar className="w-28 h-28">
                <AvatarImage
                  src="https://github.com/kelilipan.png"
                  alt="@kelilipan"
                />
                <AvatarFallback>WI</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                illo consectetur ratione, sequi quia aspernatur dolores! Ea
                fugit saepe laborum? Nulla fugit dicta sunt natus esse amet
                praesentium. Nesciunt, labore.
              </p>
              <p className="italic font-bold text-lg text-gray-600">Wisesa</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Main>
  );
}
