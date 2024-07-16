import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Syllabus = () => {
  return (
    <section id="syllabus" className="mt-6">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-lg">
            1. Introduction
          </AccordionTrigger>
          <AccordionContent>
            <p>
              You will learn Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </p>
            <Button className="mt-4" asChild>
              <Link href="/course/javascript/exercise/hello-world">
                Learn <FaArrowRight className="ml-2" />
              </Link>
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-lg">
            2. More Introduction
          </AccordionTrigger>
          <AccordionContent>
            <p>
              You will learn Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </p>
            <Button className="mt-4" asChild>
              <Link href="/course/javascript/exercise/hello-world">
                Learn <FaArrowRight className="ml-2" />
              </Link>
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-lg">
            3. More More Introduction
          </AccordionTrigger>
          <AccordionContent>
            <p>
              You will learn Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </p>
            <Button className="mt-4" asChild>
              <Link href="/course/javascript/exercise/hello-world">
                Learn <FaArrowRight className="ml-2" />
              </Link>
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Syllabus;
