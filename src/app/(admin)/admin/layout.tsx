import "@/app/globals.css";

import { ReactNode } from 'react';
import { auth, signOut } from '@/auth';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth()

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl">Admin Dashboard</h1>
        </header>
        <main className="p-4">
          {session ? (
            <div className="mb-4">
              <p>
                Logged in as {session.user?.name || 'Unknown User'}
              </p>
              <form
                action={async () => {
                  "use server"
                  await signOut()
                }}
              >
                <button className="p-0 text-blue-600">
                  Sign Out
                </button>
    </form>
            </div>
          ) : (
            <p className="mb-4 text-red-600">Not authenticated</p>
          )}
          {children}
        </main>
      </body>
    </html>
  );
}
