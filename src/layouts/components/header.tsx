import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2 md:px-8">
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
