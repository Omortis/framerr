import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

// export default [
//   index("routes/kv_data.tsx"),
//   route("r2_text", "routes/r2_text.tsx",)
// ] satisfies RouteConfig;

export default [
  index("routes/home.tsx"),
  layout("routes/viewer.tsx", [
    route("r2_text", "routes/r2_text.tsx"),
    route("r2_image", "routes/r2_image.tsx"),
    route("kv_data", "routes/kv_data.tsx"),
  ]),

] satisfies RouteConfig;
