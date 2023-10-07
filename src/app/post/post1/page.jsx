import Image from "next/image";
import Link from "next/link";

export default function Post1() {
    return(
        <div>
            <h1>POST-1</h1>
            <div>
                <figure>
                    <Image src="/img/post-it-1975179_640.png" width={320} height={320} alt="Post-It"/>
                    <figcaption><Link href="/">Go back to home page.</Link></figcaption>
                </figure>
            </div>
        </div>
    )
}