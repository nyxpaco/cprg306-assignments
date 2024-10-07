import Link from "next/link";
import NewItem from "./new-item";


export default function page() {
    return (
        <main className="m-4">
            <Link href="/" className="m-2 underline hover:text-pink-600">Back to Weekly Assignments!</Link>
            <NewItem />
        </main>
    );
}
