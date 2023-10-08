import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div>
            Page Not Found!
            <p>Please go back to the <Link href="/">home page</Link>.</p>
        </div>
    )
}