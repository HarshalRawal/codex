import SignInFormClient from "@/modules/auth/components/sign-in-form-client"
import Image from "next/image"

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side - Hero section with image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 items-center justify-center p-12">
        <div className="text-center text-white space-y-6">
          <div className="relative">
            <Image
              src="/login.svg"
              alt="Welcome illustration"
              height={400}
              width={400}
              className="mx-auto drop-shadow-2xl"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">Welcome Back</h1>
            <p className="text-xl text-slate-300 text-pretty max-w-md">
              Sign in to continue your journey with us and access all your personalized features.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Sign in form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="w-full max-w-md">
          {/* Mobile hero section */}
          <div className="lg:hidden text-center mb-8">
            <Image src="/login.svg" alt="Welcome illustration" height={200} width={200} className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400 text-pretty">Sign in to continue your journey</p>
          </div>

          <SignInFormClient />
        </div>
      </div>
    </div>
  )
}

export default Page
