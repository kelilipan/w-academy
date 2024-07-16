import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CourseCard = () => {
  return (
    <Link href="/course/javascript">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Javascript</CardTitle>
          <CardDescription>Overatted Language wkw</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src="/js.png" alt="" width={200} height={200} />
        </CardContent>
        <CardFooter>
          <Button className="mt-4">
            Learn <FaArrowRight className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
