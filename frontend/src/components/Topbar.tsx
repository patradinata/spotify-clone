import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import SignInOAuthButtons from "./SignInOAuthButtons ";
import { Link } from "react-router-dom";

const Topbar = () => {
  const isAdmin = false;
  return (
    <div className="flex justify-between items-center sticky p-4 top-0 bg-zinc-900/70 backdrop-blur-lg z-20">
      <div className="flex items-center gap-2">Spotify</div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2" />
            Admin Dashboard
          </Link>
        )}

        <SignedIn>
          <SignOutButton />
        </SignedIn>

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>
      </div>
    </div>
  );
};

export default Topbar;
