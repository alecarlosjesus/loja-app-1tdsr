import Link from "next/link";

export default function Home(){

  return(
    <div>
       <h1>Home</h1>
        <ul>
          <li><Link href="/post">POST</Link></li>
          <li><Link href="/post/post1">POST-1</Link></li>
          <li><Link href="/post/post2">POST-2</Link></li>
        </ul>     
    </div>
  )
}