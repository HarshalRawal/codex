import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Chrome, Github, ArrowRight, Shield } from "lucide-react"
import { signIn } from "@/auth"

/**
 * Initiates a server-side sign-in using the Google OAuth provider.
 *
 * This server action calls `signIn("google")` to start the OAuth flow (typically causing a redirect to Google's consent page).
 *
 * @returns A promise that resolves when the signIn call completes.
 */
async function handleGoogleSignIn() {
  "use server"
  await signIn("google")
}

/**
 * Initiates a server-side sign-in flow with GitHub.
 *
 * This server action (`"use server"`) calls the authentication helper to start the GitHub OAuth flow.
 *
 * @returns A promise that resolves when the sign-in request has been dispatched.
 */
async function handleGithubSignIn() {
  "use server"
  await signIn("github")
}

const SignInFormClient = () => {
  return (
    <Card className="w-full border border-slate-800/50 shadow-2xl bg-slate-900/80 backdrop-blur-md">
      <CardHeader className="space-y-3 pb-6">
        <div className="flex items-center justify-center mb-2">
          <div className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50">
            <Shield className="h-6 w-6 text-slate-300" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-center text-balance text-white">Sign In</CardTitle>
        <CardDescription className="text-center text-base text-pretty text-slate-400">
          Choose your preferred method to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 px-6">
        <form action={handleGoogleSignIn}>
          <Button
            type="submit"
            variant="outline"
            size="lg"
            className="w-full h-12 text-base font-medium border-2 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-200 group bg-slate-800/30 text-white"
          >
            <Chrome className="mr-3 h-5 w-5 text-[#4285F4]" />
            <span className="flex-1 text-left">Continue with Google</span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900 px-3 text-slate-500 font-medium">Or</span>
          </div>
        </div>

        <form action={handleGithubSignIn}>
          <Button
            type="submit"
            variant="outline"
            size="lg"
            className="w-full h-12 text-base font-medium border-2 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-200 group bg-slate-800/30 text-white"
          >
            <Github className="mr-3 h-5 w-5" />
            <span className="flex-1 text-left">Continue with GitHub</span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Button>
        </form>

        <div className="pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/40 border border-slate-700/30 rounded-lg p-3">
            <Shield className="h-4 w-4 text-emerald-500" />
            <span>Your data is protected with enterprise-grade security</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-6 pb-6">
        <p className="text-xs text-center text-slate-500 w-full leading-relaxed text-pretty">
          By signing in, you agree to our{" "}
          <a href="#" className="underline hover:text-slate-300 transition-colors font-medium text-slate-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-slate-300 transition-colors font-medium text-slate-400">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  )
}

export default SignInFormClient
