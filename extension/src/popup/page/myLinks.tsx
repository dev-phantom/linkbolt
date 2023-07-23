import DashboardLayout from "../../layout/dashboardLayout";
import NullData from "../components/atoms/nullData";
import { Link, goTo } from "react-chrome-extension-router";
import Add_new_link from "./links/add_link";
import { useFetch } from "../../utils/request";
import { Fragment, useEffect, useState } from "react";
import DisplayLink from "../components/molecules/dashboard/links/link_box";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateUserTotalLinks } from "../../redux/slice/linkSlice";

const MyLinks = () => {
  const [links, setLinks] = useState([]);
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  const goToLink = () => goTo(Add_new_link);
  const { data } = useFetch("/user/links", isAuthenticated);
  useEffect(() => {
    setLinks(data?.data);
    dispatch(updateUserTotalLinks(links?.length));
  }, [data, links]);

  const add_link = (
    <div
      onClick={goToLink}
      className="flex  justify-center rounded-full  my-[1em] px-2 py-2 bg-primary h-[60px] w-[60px] cursor-pointer"
    >
      <h1 className="text-4xl text-white">+</h1>
    </div>
  );
  return (
    <DashboardLayout>
      <div className="my-8">
        <h3 className="my-4 font-bold">My saved links</h3>
        {links?.length === 0 ? (
          <NullData name="links" />
        ) : (
          <>
            {links?.map((items: any, index) => {
              return (
                <Fragment key={index}>
                  <DisplayLink
                    name={items?.name}
                    url={items?.url}
                    id={items?.id}
                  />
                </Fragment>
              );
            })}
          </>
        )}
      </div>

      {add_link}
    </DashboardLayout>
  );
};
export default MyLinks;
