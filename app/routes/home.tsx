import type { Route } from "./+types/kv_data";

import { NavLink, Outlet } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Testing cloudflare bindings." },
  ];
}
export default function KVData({ loaderData }: Route.ComponentProps) {

  const message = loaderData;

  return (
    <>
      <h1>Home</h1>
      <br /><br />
      <ul>
        <li>
          <NavLink to="kv_data" end>KV Data</NavLink>
        </li>
        <li>
          <NavLink to="r2_text">R2 Text</NavLink>
        </li>
        <li>
          <NavLink to="r2_image">R2 Image</NavLink>
        </li>      </ul>
      <br /><br />
      <Outlet />
    </>
  )
}