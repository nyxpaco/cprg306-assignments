"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main className="m-4 bg-pink-50 rounded-lg p-6">
            <h1 className="m-2 text-2xl font-bold text-pink-700">🌸 Authentication 🌸</h1>
            <div className="m-2">
                {user ? (
                    <div>
                        <p className="text-pink-800 font-medium">Welcome, {user.displayName}!</p>
                        <button
                            className="bg-pink-500 hover:bg-pink-600 text-white font-bold my-2 py-2 px-4 rounded shadow-lg"
                            onClick={firebaseSignOut}
                        >
                            🌷 Sign Out 🌷
                        </button>
                        <div>
                            <Link
                                href=".\week-9\shopping-list"
                                className="underline text-pink-800 hover:text-pink-600 font-medium"
                            >
                                💖 View Shopping List 💖
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <button
                            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded shadow-lg"
                            onClick={gitHubSignIn}
                        >
                            🌸 Sign In with GitHub 🌸
                        </button>
                    </>
                )}
            </div>
        </main>
    );
}