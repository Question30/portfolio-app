import { Link } from 'react-scroll';

export default function Nav() {
    return (
        <nav className=' z-10 flex flex-row justify-end bg-greenish-blue text-primary h-12 fixed w-full flex-wrap'>
            <h1 className='mr-auto ml-2 text-xl font-bold my-auto'>Alexander Gomez</h1>
            <Link className='mx-2 my-auto' to="home" smooth={true} offset={0} duration={1000}>Home</Link>
            <Link className='mx-2 my-auto' to="about" smooth={true} offset={-48} duration={1000}>About</Link>
            <Link className='mx-2 my-auto' to="projects" smooth={true} offset={-48} duration={1000}>Projects</Link>
            <Link className='mx-2 my-auto' to="pokemon" smooth={true} offset={-48} duration={1000}>Pokemon</Link>
            <Link className='mx-2 my-auto' to="contact" smooth={true} offset={-48} duration={1000}>Contact</Link>

        </nav>
    )
}