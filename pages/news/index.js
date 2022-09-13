import { Fragment } from 'react';
import Link from 'next/link';

function HomePage() {

    return (
    <Fragment>
    <h1>News Page</h1>
    <ul>
        <li>
        <Link href="/news/nextjs-is-a-great-framework">
            Next JS is a Great Framework
        </Link>
        </li>
        <li>Something Else</li>

    </ul>
    </Fragment>
    )
}

export default HomePage;