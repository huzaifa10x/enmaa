import Link from "next/link";
import Footer from "./components/footer";

export default function NotFound() {
    return (
        <>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
            <Footer />
        </>
    )
}