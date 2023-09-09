/* eslint-disable react/prop-types */
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { CardFooter } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ThemeCard(session) {
  return (
    <Card className="flex flex-row min-h-[10vh] sm:min-w-full min-w-[80vw]" as={Link} to={`/sessions`}>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="none"
          src="/code-square.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-gray-400">{session.name}</p>
        </div>
      </CardHeader>
      <CardBody>
        <small>{ session.description}</small>
      </CardBody>
      <CardFooter>
      
      </CardFooter>
    </Card>
  );
}