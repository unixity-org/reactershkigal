import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Search Result | Bastun- Business Consulting Next Js Template",
  description: "Search Result | Bastun- Business Consulting Next Js Template",
};
export default async function BlogsDetails({ params }) {
  const { search } = params;

  

  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <h1> SEARCH RESULT FOR : {search} </h1>
    </PageWrapper>
  );
}

