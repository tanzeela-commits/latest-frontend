import { Layout } from "../../components/layout";
import EditForm from "../../views/profile/editform";

const Page = () => {
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const config = {
    headers: {
      Authorization: `Bearer ${JWTtoken}`,
    },
  };

  return (
    <>
      <EditForm />
    </>
  );
};
Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
