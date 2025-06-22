import type { Route } from "./+types/r2_text";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Data Tests: R2 text file" },
    { name: "description", content: "Testing cloudflare bindings." },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const r2Text = await context.cloudflare.env.CROMR2.get('ghost_city.txt');

  if (r2Text === null) {
    return "no data retrieved";
  }

  var text = await r2Text.text();
  return text;

}

export default function R2Text({ loaderData }: Route.ComponentProps) {

  const r2Text = loaderData;

  return (
    <>
      <h1>R2 Text File</h1>
      <div>
        <p className="text-viewer">{r2Text}</p>
      </div>
    </>
  )
}