import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={"/SSG"}>SSG</Link>
                </li>
                <li>
                    <Link href={"/ISR"}>ISR</Link>
                </li>
                <li>
                    <Link href={"/SSR"}>SSR</Link>
                </li>
                <li>
                    <Link href={"/CSR"}>CSR</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;