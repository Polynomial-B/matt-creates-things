import '../Nav.css'
import { useState } from 'react';

function Nav() {

    const getTheme = () => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log(prefersDark)
        return prefersDark ? 'dark' : 'light';
      };

    const [isDark, setIsDark] = useState(getTheme)
    console.log()

    return <>
        <nav>
            <button>EN/ES</button>
            <span>&#9790;</span>
        </nav>
    </>
}

export default Nav;