import { Download } from "lucide-react";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminSubmissionsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-montserrat text-[28px] font-bold text-[#1e1e24]">
            Quote Requests
          </h1>
          <p className="mt-1 font-kanit text-[15px] text-black/45">
            {submissions.length} submission
            {submissions.length === 1 ? "" : "s"}
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- this downloads a file, not a page route */}
        <a
          href="/api/admin/submissions/export"
          className="flex items-center gap-2 rounded-full bg-[#ff6b35] px-5 py-3 font-montserrat text-[14px] font-semibold text-white transition hover:bg-[#ff5722]"
        >
          <Download size={16} />
          Export CSV
        </a>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-black/10 bg-white">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b border-black/10 font-montserrat text-[13px] font-semibold text-black/45">
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Contact</th>
              <th className="px-5 py-4">Location</th>
              <th className="px-5 py-4">Needs</th>
              <th className="px-5 py-4">Quantity</th>
              <th className="px-5 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr
                key={submission.id}
                className="border-b border-black/5 font-kanit text-[14px] text-[#1e1e24] last:border-0"
              >
                <td className="whitespace-nowrap px-5 py-4 text-black/45">
                  {new Date(submission.createdAt).toLocaleDateString()}
                </td>
                <td className="px-5 py-4">
                  <p className="font-medium">{submission.fullName}</p>
                  {submission.company && (
                    <p className="text-black/45">{submission.company}</p>
                  )}
                </td>
                <td className="px-5 py-4">
                  <p>{submission.mobile}</p>
                  {submission.email && (
                    <p className="text-black/45">{submission.email}</p>
                  )}
                </td>
                <td className="px-5 py-4">{submission.location}</td>
                <td className="max-w-[220px] px-5 py-4">{submission.needs}</td>
                <td className="px-5 py-4">{submission.quantity}</td>
                <td className="px-5 py-4">
                  <DeleteButton
                    endpoint={`/api/admin/submissions/${submission.id}`}
                    confirmLabel={`Delete request from ${submission.fullName}?`}
                  />
                </td>
              </tr>
            ))}

            {submissions.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-5 py-10 text-center font-kanit text-[15px] text-black/45"
                >
                  No quote requests yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
