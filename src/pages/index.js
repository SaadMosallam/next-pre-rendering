import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h3><Link href="/posts">Posts</Link></h3>
      </header>
      <h1>Next Pre-rendering</h1>     
    </>
  )
}
