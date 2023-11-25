"use client"
import Empty from "../components/Tables/Empty";
export default function Example() {

  return (
    <>
      <p className="text-gray-700 text-2xl mb-7 font-bold">Storefront Overview</p>
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
      </div>
     <Empty/>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
    </>
  );
}
