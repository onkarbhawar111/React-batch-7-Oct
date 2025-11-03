import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    console.log("about comp mounted....");

    return () => {
      console.log("about comp unmounted");
    };
  });
  return <>This Is About Page</>;
}

export default AboutPage;
