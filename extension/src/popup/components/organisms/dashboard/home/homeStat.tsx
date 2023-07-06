import { Fragment } from "react";

const HomeStat = () => {
  const data = [
    {
      title: "Links",
      count: 10,
    },
    {
      title: "Links",
      count: 10,
    },
    {
      title: "Links",
      count: 10,
    },
  ];
  return (
    <div className="py-3 px-3 rounded-xl bg-secondary">
      <h3 className="font-500 text-xl ">Good day </h3>
      <h3 className="font-bold text-2xl "> Obiabo Immanuel</h3>

      <h4 className=" mt-5 font-500 text-xl ">Good day </h4>
      <div className="flex justify-between my-2 bg-night  p-3 rounded-lg">
        {data.map((items) => {
          return (
            <Fragment key={Number(items)}>
              <div className="">
                <h4>Links</h4>
                <h1 className="font-bold text-xl">35</h1>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default HomeStat;
