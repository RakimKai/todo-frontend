import useTodos from "../../hooks/useTodos";

const Pagination = () => {
  const { totalPages, getAllItems, currentPage } = useTodos();

  const Pages = () => {
    let arr = [];

    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }

    return (
      <div className="flex gap-x-2">
        {arr.map((el, index) => {
          return (
            <p
              className={`${el == currentPage && "font-bold"} cursor-pointer`}
              key={index}
              onClick={() => {
                getAllItems(3, el);
              }}
            >
              {el}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Pages />
    </div>
  );
};

export default Pagination;
