import type { Route } from "./+types/kv_data";

import { NavLink, Outlet } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Viewer" },
    { name: "description", content: "Testing cloudflare bindings." },
  ];
}
export default function KVData({ loaderData }: Route.ComponentProps) {

  const message = loaderData;

  return (
    <>
      <Outlet />
    </>
  )
}