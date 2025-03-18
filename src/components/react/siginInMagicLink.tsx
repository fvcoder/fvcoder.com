import { authClient } from "../../lib/auth-client";

export function SignInMagicLink() {
  return (
    <div>
      <h1
        onClick={() => {
          authClient.signIn
            .magicLink({
              email: "fvcoder1@gmail.com",
            })
            .then(console.log)
            .catch(console.error);
        }}
      >
        Sign in with magic link
      </h1>
    </div>
  );
}
