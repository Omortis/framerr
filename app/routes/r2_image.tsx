import type { Route } from "./+types/r2_image";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Data Tests: R2 image file" },
    { name: "description", content: "Testing cloudflare bindings." },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {

  // Type 'R2ObjectBody | null' is not assignable to type 'R2ObjectBody'.
  // Type 'null' is not assignable to type 'R2ObjectBody'.ts(2322)
  //    vvvvvvv
  const r2Image: R2ObjectBody = await context.cloudflare.env.CROMR2.get('conan.png');

  var image = await r2Image.blob();
  return { data: image };

}

export default function R2Image({ loaderData }: Route.ComponentProps) {

  // Types of property 'arrayBuffer' are incompatible.
  //   Type 'undefined' is not assignable to type '() => Promise<ArrayBuffer>'.ts(2345)
  //                                vvvvvvvvvv
  const image = URL.createObjectURL(loaderData.data);
  // or
  // const image = URL.createObjectURL(loaderData.arrayBuffer);


  return (
    <>
      <h1>R2 Image File</h1>
      <div>
        <img src={image} />
      </div>
    </>
  )
}