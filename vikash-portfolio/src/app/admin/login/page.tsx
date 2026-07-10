"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/app/actions/auth";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await loginAction(password);
    if (res.success) {
      router.push("/admin");
    } else {
      setError(res.error || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-surface border border-glass-border rounded-3xl p-8"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="font-display font-black text-2xl text-white">Admin Access</h1>
          <p className="text-text-muted text-sm mt-2">Enter the master password to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
              autoFocus
            />
          </div>

          {error && <div className="text-accent-pink text-sm text-center">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-bg font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
