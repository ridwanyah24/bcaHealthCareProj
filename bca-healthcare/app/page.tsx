
import { Suspense } from "react";
import ServiceCat from "./ui/dashboard/servicecat";
import Nav from "./ui/nav";
import GettingStarted from "./ui/dashboard/getttingstarted";
import ServiceCatSkeleton from "./ui/skeletons/servicecatskelton";
import Dash from "./ui/dashboard/dash";



export default function Home() {
  return (
    <div>
      <Nav/>
      <Dash/>
    </div>
  );
}
