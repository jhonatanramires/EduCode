/* eslint-disable react/prop-types */
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { CardFooter } from "@nextui-org/react";
import Button from './Button'
import { Link } from "react-router-dom";

export default function SessionCard(session) {
  return (
    <Card className="max md:max-w-[32vw]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="none"
          src="/code-square.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{session.name}</p>
        </div>
      </CardHeader>
      <CardBody>
        <small>{ session.description}</small>
      </CardBody>
      <CardFooter>
      <Button as={Link} to={`/sessions/${session.id}`} variant="flat">
        ¡Iniciar!
      </Button>
      </CardFooter>
    </Card>
  );
}