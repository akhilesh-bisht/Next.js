import Link from "next/link";
function page() {
  return (
    <>
      <div>hello this is homepage</div>
      <Link href="/blog"> blog </Link>
      <Link href='/artical/braking-newz-123?lang=en'> read in english</Link>
       <Link href='/artical/braking-newz-123?lang=fr'> read in french</Link>
    </>
  );
}

export default page;
