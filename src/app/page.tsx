import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Discover & Share</span>
              <span className="block text-indigo-600">Amazing Recipes</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Find recipes, share your culinary creations, and connect with food enthusiasts from around the world.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/auth/signup"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  href="/auth/login"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to cook with confidence
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Recipe Search</div>
                <div className="mt-2 text-base text-gray-500">
                  Search recipes by ingredients, cuisine type, or dietary preferences.
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">AI-Powered Suggestions</div>
                <div className="mt-2 text-base text-gray-500">
                  Get personalized recipe recommendations based on your preferences.
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Save Favorites</div>
                <div className="mt-2 text-base text-gray-500">
                  Create collections of your favorite recipes for easy access.
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Share Recipes</div>
                <div className="mt-2 text-base text-gray-500">
                  Share your culinary creations with the community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
