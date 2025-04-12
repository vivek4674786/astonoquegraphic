import Logo from './Logo';
import Navbar from './Navbar'; // Adjust the path as necessary

export default function Header() {
    return (
        <header className='flex bg-gray-100 justify-between items-center'>
            <div className='w-1/2'>
              <Logo />
            </div>
            <div className='w-1/2'>
              <Navbar />
            </div>
        </header>
    );
}

