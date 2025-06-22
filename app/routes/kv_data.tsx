import type { Route } from "./+types/kv_data";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Data Tests: KV" },
    { name: "description", content: "Testing cloudflare bindings." },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {

  const message = await context.cloudflare.env.CROM.get('BlackCoast');

  if (message === null) {
    return "no data retrieved";
  }

  return message;
}

export default function KVData({ loaderData }: Route.ComponentProps) {

  const message = loaderData;

  return (
    <>
      <h1>KV Data</h1>
      <div>
        <p className="text-viewer">{message}</p>
      </div>
    </>
  )
}