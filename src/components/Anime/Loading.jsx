import { Skeleton } from "@nextui-org/react";

const LoadingImg = () => {
  return (
    <div className="mr-4">
      <div className="py-2">
        <Skeleton className="md:w-[168px] w-[101px] h-36 md:h-60 rounded-lg" />
      </div>
      <div className="mb-3">
        <Skeleton className="w-full h-4 mb-2 rounded-lg" />
        <Skeleton className="w-2/4 h-4 m-auto rounded-lg" />
      </div>
    </div>
  );
};

const LoadingVideo = () => {
  return (
    <div className="mr-4">
      <div className="py-2">
        <Skeleton className="md:w-[300px] w-[101px] h-36 md:h-60 rounded-lg" />
      </div>
      <div className="mb-3">
        <Skeleton className="w-full h-4 mb-2 rounded-lg" />
        <Skeleton className="w-2/4 h-4 m-auto rounded-lg" />
      </div>
    </div>
  );
};

export { LoadingImg, LoadingVideo };
