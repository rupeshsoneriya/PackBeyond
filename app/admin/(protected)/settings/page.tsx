"use client";

import { useState, type FormEvent } from "react";

export default function AdminSettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation don't match.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to update password.");
      }

      setSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update password."
      );
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-kanit text-[15px] text-[#1e1e24] focus:border-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/15";
  const labelClass = "font-montserrat text-[14px] font-semibold text-[#1e1e24]";

  return (
    <div>
      <h1 className="font-montserrat text-[28px] font-bold text-[#1e1e24]">
        Change Password
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex max-w-sm flex-col gap-5"
      >
        <label className="block">
          <span className={labelClass}>Current Password</span>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>New Password</span>
          <input
            type="password"
            required
            minLength={8}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Confirm New Password</span>
          <input
            type="password"
            required
            minLength={8}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={inputClass}
          />
        </label>

        {error && (
          <p className="font-kanit text-[14px] text-red-600">{error}</p>
        )}
        {success && (
          <p className="font-kanit text-[14px] text-green-600">
            Password updated successfully.
          </p>
        )}

        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-[#ff6b35] px-6 py-3 font-montserrat text-[14px] font-semibold text-white transition hover:bg-[#ff5722] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}
