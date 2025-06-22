import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//   index("routes/kv_data.tsx"),
//   route("r2_text", "routes/r2_text.tsx",)
// ] satisfies RouteConfig;

export default [
  index("routes/kv_data.tsx"),
  route("r2_text", "routes/r2_text.tsx",)
] satisfies RouteConfig;
