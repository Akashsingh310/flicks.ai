import { SignUp } from '@clerk/nextjs'
import { Video, Wand2, Share2, Zap } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-12 text-gray-200">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="mt-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Flicks.ai
            </h1>
            <p className="mt-2 text-xl text-gray-400 font-semibold">AI Short Video Generator</p>
          </div>
          <div className="mt-10 space-y-6">
            <div className="rounded-xl shadow-2xl overflow-hidden bg-gray-900 bg-opacity-50 backdrop-blur-lg border border-gray-800">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">Join Flicks.ai Today</h2>
                <p className="mb-6 text-gray-300 text-lg leading-relaxed">
                  Sign up now to unlock the power of AI-generated short videos and transform your content creation process.
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    { icon: Zap, text: "Get started with AI video creation in minutes" },
                    { icon: Video, text: "Access a wide range of professional video templates" },
                    { icon: Wand2, text: "Customize every aspect of your videos effortlessly" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <item.icon className="h-5 w-5 mr-3 text-blue-400" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
        <SignUp 
          appearance={{
            baseTheme: 'dark',
            elements: {
              formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
              footerActionLink: 'text-blue-400 hover:text-blue-300',
              card: 'bg-gray-900 border border-gray-800 shadow-xl',
              headerTitle: 'text-gray-100',
              headerSubtitle: 'text-gray-400',
              formFieldLabel: 'text-gray-300',
              formFieldInput: 'bg-gray-800 border-gray-700 text-gray-200',
              dividerLine: 'bg-gray-800',
              dividerText: 'text-gray-500',
              socialButtonsBlockButton: 'border-gray-700 hover:bg-gray-800',
              socialButtonsBlockButtonText: 'text-gray-300',
              formFieldAction: 'text-blue-400 hover:text-blue-300',
              footer: 'text-gray-400',
            }
          }}
          redirectUrl="/onboarding"
        />
      </div>
    </div>
  )
}

