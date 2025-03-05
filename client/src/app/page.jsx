import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GoogleIcon, FacebookIcon, NotionCube } from "../lib/icons"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex w-full max-w-5xl">
        {/* Left side - Notion cube */}
        <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
          <div className="p-8 flex flex-col items-center">
            <NotionCube className="w-48 h-48 text-gray-900" />
            <h2 className="text-2xl font-bold mt-6 text-gray-800">Welcome to Notify</h2>
            <p className="text-gray-600 text-center mt-2">All-in-one workspace</p>
          </div>
        </div>

        {/* Right side - login form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Think it. Make it.</h1>
              <p className="text-muted-foreground">Log in to your Notion account</p>
            </div>

            {/* Social login buttons in a row */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-11 text-sm font-normal">
                <GoogleIcon className="mr-2 h-5 w-5" />
                <span>Google</span>
              </Button>

              <Button variant="outline" className="h-11 text-sm font-normal">
                <FacebookIcon className="mr-2 h-5 w-5 text-blue-600" />
                <span>Facebook</span>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email address..." className="h-11" />
                <p className="text-xs text-muted-foreground">
                  Use an organization email to easily collaborate with teammates
                </p>
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600 h-11">Continue</Button>
            </div>

            <div className="text-xs text-center text-muted-foreground">
              <p>
                Your name and photo are displayed to users who invite you to a workspace using your email. By
                continuing, you acknowledge that you understand and agree to the{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

