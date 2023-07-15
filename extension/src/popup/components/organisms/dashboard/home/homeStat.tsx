import { Fragment } from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../../../../utils/formatNumber";
const HomeStat = () => {
  const { user_links } = useSelector((state: any) => state?.links);
  const data = [
    {
      title: "Links",
      count: formatNumber(user_links?.length),
    },
    {
      title: "Bookmarks",
      count: formatNumber(0),
    },
    {
      title: "Share Links",
      count: formatNumber(0),
    },
  ];
  return (
    <div className="px-3 py-3 rounded-xl bg-secondary">
      <h3 className="text-xl font-500 ">Good day 👋 </h3>
      <h3 className="text-2xl font-bold _mixed_text"> Obiabo Immanuel</h3>

      <h4 className="mt-5 text-xl font-500">Stats</h4>
      <div className="flex justify-between p-3 px-5 my-2 rounded-lg bg-night">
        {data.map((items, index) => {
          return (
            <Fragment key={index}>
              <div className="text-center">
                <h4>{items.title}</h4>
                <h1 className="text-xl font-bold">{items?.count || 0}</h1>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default HomeStat;
