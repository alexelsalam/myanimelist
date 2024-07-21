import { Card, CardBody, Link } from "@nextui-org/react";
import { sosmeds } from "./Icons";

const Sosmed = () => {
  return (
    <div className="flex items-center justify-center gap-4 ">
      {sosmeds.map((sosmed, index) => {
        return (
          <Card
            key={index}
            className="w-10 h-10 sm:w-56 sm:h-auto lg:w-72"
          >
            <CardBody>
              <Link
                className="overflow-hidden text-black "
                isExternal
                href={sosmed.link}
              >
                {sosmed.icon}
                <p className="hidden font-semibold lg:block sm:block">
                  {sosmed.tittle}
                </p>
              </Link>
              <p className="hidden overflow-hidden lg:text-sm lg:block sm:block sm:text-xs">
                {sosmed.description}
              </p>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Sosmed;
