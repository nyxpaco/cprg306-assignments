import Link from 'next/link'
export default function page() {
    return(
      <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <li><Link href="./week-2" className="underline text-blue-900 hover:text-blue-600">Week 2</ Link></li>
      <li><Link href="./week-3" className="underline text-blue-900 hover:text-blue-600">Week 3</Link></li>
      </main>
    )
}