import { SignedIn, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <header className="card">
      <div className="flex h-8 items-center justify-between">
        <div></div>
        <div className="flex items-center gap-2">
          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: 'size-8!' } }} />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
