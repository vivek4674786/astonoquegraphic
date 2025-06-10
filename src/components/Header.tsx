import Logo from './Logo';
import Navbar from './Navbar'; // Adjust the path as necessary

export default function Header({ headerObject }: { headerObject: any }) {
    return (
        <header className='flex bg-gray-100 justify-between items-center'>
            <div className='w-1/2'>
              <Logo logoName={headerObject?.nameOfTheSite} logoImage={headerObject?.logoImage} />
            </div>
            <div className='w-1/2'>
              <Navbar navbarObject={headerObject?.navBar} />
            </div>
        </header>
    );
}

