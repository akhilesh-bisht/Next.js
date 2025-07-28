import Link from "next/link";
function page() {
  return (
    <>
      <div>hello this is homepage</div>
      <Link href="/blog"> blog</Link>/
    </>
  );
}

export default page;
