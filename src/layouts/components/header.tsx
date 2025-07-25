import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScroll(scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup khi unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn('flex items-center justify-between gap-3 px-4 py-2 transition-all md:px-8', {
        'bg-white/80 shadow-sm': isScroll,
      })}
    >
      <Link to="/">
        <img src="/img/logo.png" alt="Chinese HSK" title="Chinese HSK" className="h-12 md:h-16" />
      </Link>

      <SignedOut>
        <SignInButton>
          <Button>Đăng nhập</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{ elements: { avatarBox: 'size-10!' } }} />
      </SignedIn>
    </div>
  );
};

export default Header;
