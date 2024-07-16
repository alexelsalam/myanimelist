import { Card, CardBody, Link } from "@nextui-org/react";
import { sosmeds } from "./Icons";

const Sosmed = () => {
  return (
    <div className="flex justify-center gap-4">
      {sosmeds.map((sosmed, index) => {
        return (
          <Card key={index} className="max-w-[300px]">
            <CardBody className="">
              <Link
                className="flex gap-2 text-black"
                isExternal
                href="https://twitter.com/myanimelist"
                showAnchorIcon
              >
                {sosmed.icon}
                <p className="text-lg font-semibold ">
                  {sosmed.tittle}
                </p>
              </Link>
              <p>{sosmed.description}</p>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Sosmed;
