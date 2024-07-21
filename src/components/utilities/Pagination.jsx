export default function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlerPrevButton = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      scrollTop();
    }
  };
  const handlerNextButton = () => {
    if (page < lastPage) {
      setPage((prev) => prev + 1);
      scrollTop();
    }
  };

  const handlerFirstPageButton = () => {
    setPage(1);
    scrollTop();
  };

  const handlerLastPageButton = () => {
    setPage(lastPage);
    scrollTop();
  };
  return (
    <div className="my-4">
      <div className="flex justify-center gap-3 p-2 text-center">
        {page > 1 && (
          <button
            className="p-1 text-white transition-all border rounded-md hover:text-primary bg-primary border-primary hover:bg-white"
            onClick={handlerFirstPageButton}
          >
            First Page
          </button>
        )}

        <button
          className="p-1 text-white transition-all border rounded-md hover:text-primary bg-primary border-primary hover:bg-white"
          onClick={handlerPrevButton}
        >
          Prev
        </button>
        <p className="pt-2">
          {page} of {lastPage}
        </p>
        <button
          className="p-1 text-white transition-all border rounded-md hover:text-primary bg-primary border-primary hover:bg-white"
          onClick={handlerNextButton}
        >
          Next
        </button>

        <button
          className="p-1 text-white transition-all border rounded-md hover:text-primary bg-primary border-primary hover:bg-white"
          onClick={handlerLastPageButton}
        >
          Last Page
        </button>
      </div>
    </div>
  );
}
