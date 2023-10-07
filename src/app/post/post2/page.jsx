import Image from "next/image";
import Link from "next/link";

export default function Post2() {
    return(
        <div>
            <h1>POST-2</h1>
            <div>
            <figure>
                    <Image  src="/img/smile-4028053_640.jpg" width={320} height={320} alt="Sorriso"/>
                    <figcaption><Link href="/">Go back to home page.</Link></figcaption>
                </figure>
            </div>
        </div>
    )
}