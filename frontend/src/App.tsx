import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <div>
      <header>
        <SignedOut>
          <SignInButton>
            <Button>Sign In dulu bang</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
}

export default App;
