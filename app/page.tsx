"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isFarcaster, setIsFarcaster] = useState(false);

  useEffect(() => {
    // Check kung may Farcaster SDK sa window
    if (typeof window !== "undefined" && (window as any).farcaster) {
      setIsFarcaster(true);
    }
  }, []);

  if (!isFarcaster) {
    // ✅ DEMO MODE (browser test)
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">🚀 Base Farcaster MiniApp (Demo)</h1>
        <p className="text-gray-700 mb-6">
          Wala kang Farcaster SDK dito, kaya naka-demo mode ka.
        </p>
        <button
          onClick={() => alert("Test button clicked!")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Test Button
        </button>
      </main>
    );
  }

  // ✅ REAL FARCASTER MODE (kapag nasa app)
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
      <h1 className="text-2xl font-bold mb-4">🎉 Farcaster MiniApp Active</h1>
      <p className="text-gray-700 mb-6">
        Nakita ang Farcaster SDK. Gamitin mo na siya dito.
      </p>
      <button
        onClick={() => {
          (window as any).farcaster?.openUrl("https://warpcast.com");
        }}
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Open Warpcast
      </button>
    </main>
  );
}
