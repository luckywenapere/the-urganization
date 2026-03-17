import type { ReactNode } from "react";
import { clsx } from "clsx";
import {
  ArrowRight,
  BellRing,
  Check,
  Clock3,
  Copy,
  FileText,
  ListChecks,
  Users,
} from "lucide-react";

function MockupWindow({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0a1310]">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div>
            <p className="mb-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {title}
            </p>
            <p className="mt-1 mb-0 text-sm text-white/72">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff8d79]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd76d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#b7ff6e]" />
          </div>
        </div>

        <div className="p-5 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

function MockupCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.16)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function StatusPill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "success" | "warning" | "accent";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "default" && "border-white/10 bg-white/[0.05] text-white/72",
        tone === "success" && "border-[#d0ff97]/18 bg-[#b7ff6e]/10 text-[#d8ffab]",
        tone === "warning" && "border-[#ffb47b]/18 bg-[#ffb47b]/10 text-[#ffd1ad]",
        tone === "accent" && "border-[#94c4ff]/18 bg-[#94c4ff]/10 text-[#d7e7ff]",
      )}
    >
      {children}
    </span>
  );
}

function MockupButton({
  children,
  tone = "secondary",
  fullWidth = false,
}: {
  children: ReactNode;
  tone?: "secondary" | "primary";
  fullWidth?: boolean;
}) {
  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium",
        fullWidth && "w-full",
        tone === "secondary" &&
          "border border-white/10 bg-white/[0.04] text-white/78",
        tone === "primary" &&
          "border border-[#d0ff97]/22 bg-[#b7ff6e] text-[#08110a]",
      )}
    >
      {children}
    </button>
  );
}

function MockupField({
  label,
}: {
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
      <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/38">{label}</p>
      <div className="h-5 rounded bg-white/[0.04]" />
    </div>
  );
}

function ChecklistRow({
  label,
  done = false,
}: {
  label: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/7 bg-black/20 px-3.5 py-2.5">
      <p className="mb-0 text-[13px] text-white/82">{label}</p>
      <span className="text-white/72">
        {done ? <Check className="h-4 w-4 text-[#d8ffab]" /> : <Clock3 className="h-4 w-4 text-[#ffd1ad]" />}
      </span>
    </div>
  );
}

function MetadataGroup({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/7 bg-black/20 px-4 py-3">
      <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/38">{label}</p>
      <p className="mb-0 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

function AvatarBadge({
  initials,
}: {
  initials: string;
}) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
      {initials}
    </span>
  );
}

export function HeroCommandCenterMockup() {
  return (
    <MockupWindow
      title="Release Command Center"
      subtitle="Collaborator credits, metadata, and release readiness"
    >
      <div className="grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
        <MockupCard className="xl:col-span-2 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                Release workspace
              </p>
              <h3 className="mb-0 text-2xl font-semibold text-white sm:text-[2rem]">
                Midnight Drive
              </h3>
              <p className="mt-2 mb-0 text-sm text-white/58">Nova</p>
            </div>

            <div className="text-right">
              <StatusPill tone="accent">In progress</StatusPill>
              <p className="mt-3 mb-0 text-xs text-white/46">Updated 4m ago</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/38">
                Release ID
              </p>
              <p className="mb-0 text-sm font-medium text-white">REL-0615</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/38">
                Release date
              </p>
              <p className="mb-0 text-sm font-medium text-white">June 15</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/38">
                Credits
              </p>
              <p className="mb-0 text-sm font-medium text-white">2 waiting</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/38">
                Readiness
              </p>
              <p className="mb-0 text-sm font-medium text-white">66% complete</p>
            </div>
          </div>
        </MockupCard>

        <MockupCard>
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04]">
                <Users className="h-4 w-4 text-[#d7e7ff]" />
              </div>
              <div>
                <p className="mb-0 text-sm font-semibold text-white">Collaborators</p>
                <p className="mt-1 mb-0 text-xs uppercase tracking-[0.18em] text-white/38">
                  Credit collection
                </p>
              </div>
            </div>

            <StatusPill tone="warning">1 pending</StatusPill>
          </div>

          <div className="mb-3 hidden grid-cols-[1.4fr_0.9fr_0.9fr] gap-3 px-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/34 sm:grid">
            <span>Collaborator</span>
            <span>Role</span>
            <span className="text-right">Status</span>
          </div>

          <div className="space-y-2.5">
            {[
              {
                name: "John Doe",
                initials: "JD",
                role: "Producer",
                status: "Submitted",
                detail: "12:07 PM",
                tone: "success" as const,
              },
              {
                name: "Sarah Lee",
                initials: "SL",
                role: "Songwriter",
                status: "Pending",
                detail: "Reminder 2m ago",
                tone: "warning" as const,
              },
              {
                name: "Mike Chen",
                initials: "MC",
                role: "Engineer",
                status: "Submitted",
                detail: "11:42 AM",
                tone: "success" as const,
              },
            ].map((person) => (
              <div
                key={person.name}
                className="grid gap-3 rounded-2xl border border-white/7 bg-black/20 px-3.5 py-3 sm:grid-cols-[1.4fr_0.9fr_0.9fr] sm:items-center"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <AvatarBadge initials={person.initials} />
                  <div className="min-w-0">
                    <p className="mb-0 truncate text-sm font-medium text-white">{person.name}</p>
                    <p className="mt-1 mb-0 text-xs text-white/46">{person.detail}</p>
                  </div>
                </div>

                <p className="mb-0 text-xs uppercase tracking-[0.18em] text-white/44 sm:text-[11px]">
                  {person.role}
                </p>

                <div className="sm:text-right">
                  <StatusPill tone={person.tone}>{person.status}</StatusPill>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <MockupButton>
              <Copy className="h-3.5 w-3.5" />
              Copy link
            </MockupButton>
            <MockupButton>
              <BellRing className="h-3.5 w-3.5" />
              Remind Sarah
            </MockupButton>
          </div>
        </MockupCard>

        <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
          <div className="border-b border-white/8 px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04]">
                  <ListChecks className="h-4 w-4 text-[#d8ffab]" />
                </div>
                <div>
                  <p className="mb-0 text-sm font-semibold text-white">Release Progress</p>
                  <p className="mt-1 mb-0 text-xs uppercase tracking-[0.18em] text-white/38">
                    66% complete
                  </p>
                </div>
              </div>

              <StatusPill tone="success">66%</StatusPill>
            </div>

            <div className="mt-4 h-2 rounded-full bg-white/8">
              <div className="h-2 w-[66%] rounded-full bg-[#b7ff6e]" />
            </div>
          </div>

          <div className="space-y-2.5 border-b border-white/8 px-4 py-4">
            <ChecklistRow label="Add collaborators" done />
            <ChecklistRow label="Collect all credits" />
            <ChecklistRow label="Review metadata" />
            <ChecklistRow label="Ready for distribution" />
          </div>

          <div className="border-b border-white/8 px-4 py-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ffab]">
              Next step
            </p>
            <p className="mb-0 text-sm font-medium leading-6 text-white">
              Waiting for 2 collaborators to submit credits
            </p>
          </div>

          <div className="px-4 py-4">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04]">
                <FileText className="h-4 w-4 text-[#d8ffab]" />
              </div>
              <div>
                <p className="mb-0 text-sm font-semibold text-white">Metadata preview</p>
                <p className="mt-1 mb-0 text-xs uppercase tracking-[0.18em] text-white/38">
                  Structured automatically
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              <MetadataGroup label="Producers" value="John Doe" />
              <MetadataGroup label="Songwriters" value="Sarah Lee" />
              <MetadataGroup label="Engineers" value="Mike Chen" />
            </div>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

export function PublicCreditFormMockup() {
  return (
    <div className="mx-auto w-full max-w-[21rem] rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
      <div className="rounded-[2rem] border border-white/8 bg-[#0a1310] p-4">
        <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/10" />
        <div className="mb-4 flex items-center justify-between px-1 text-[11px] font-medium text-white/45">
          <span>9:41</span>
          <span>Secure link</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Submit your credits
          </p>
          <p className="mb-0 text-sm leading-6 text-white/72">
            You’ve been added as a collaborator on this release
          </p>

          <div className="mt-4 rounded-2xl border border-[#d0ff97]/16 bg-[#b7ff6e]/10 px-4 py-3">
            <p className="mb-0 text-sm font-medium text-white">Midnight Drive • Nova</p>
          </div>

          <div className="mt-4 space-y-3">
            <MockupField label="Legal name" />
            <MockupField label="Artist / stage name" />
            <MockupField label="Role" />
            <MockupField label="Additional details (optional)" />
          </div>

          <div className="mt-5">
            <MockupButton tone="primary" fullWidth>
              Submit Credits
            </MockupButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MetadataPageMockup() {
  return (
    <MockupWindow title="Metadata" subtitle="Structured from collaborator submissions">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <MockupCard>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="mb-0 text-sm font-semibold text-white">Release summary</p>
              <p className="mt-1 mb-0 text-xs uppercase tracking-[0.18em] text-white/38">
                Distribution-ready details • synced 1m ago
              </p>
            </div>

            <StatusPill tone="success">Ready</StatusPill>
          </div>

          <div className="space-y-3">
            <MetadataGroup label="Release title" value="Midnight Drive" />
            <MetadataGroup label="Artist" value="Nova" />
            <MetadataGroup label="Release date" value="June 15" />
            <MetadataGroup label="Metadata status" value="Ready" />
          </div>
        </MockupCard>

        <div className="space-y-4">
          {[
            { title: "Producers", value: "John Doe" },
            { title: "Songwriters", value: "Sarah Lee" },
            { title: "Engineers", value: "Mike Chen" },
          ].map((group) => (
            <MockupCard key={group.title}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {group.title}
              </p>
              <p className="mb-0 text-lg font-medium text-white">{group.value}</p>
            </MockupCard>
          ))}
        </div>
      </div>
    </MockupWindow>
  );
}

export function DirectiveCardMockup() {
  return (
    <MockupWindow title="Directive system" subtitle="Release guidance that moves the work forward">
      <div className="space-y-4">
        <MockupCard className="border-[#d0ff97]/18 bg-[#b7ff6e]/10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ffab]">
            Next step
          </p>
          <p className="mb-0 text-2xl font-semibold leading-tight text-white sm:text-[2rem]">
            Waiting for 2 collaborators to submit credits
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <StatusPill tone="default">Credits phase</StatusPill>
            <StatusPill tone="accent">66% complete</StatusPill>
          </div>

          <div className="mt-5 max-w-[11rem]">
            <MockupButton tone="primary" fullWidth>
              <BellRing className="h-4 w-4" />
              Send Reminder
            </MockupButton>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/38">
              Latest action
            </p>
            <p className="mb-0 text-sm font-medium text-white">
              Reminder queued for Sarah Lee
            </p>
            <p className="mt-1 mb-0 text-xs text-white/46">
              Sent 2 minutes ago. Waiting for response.
            </p>
          </div>
        </MockupCard>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Ready", value: "Add collaborators" },
            { label: "Active blocker", value: "2 pending credits" },
            { label: "After that", value: "Review metadata" },
          ].map((item) => (
            <MockupCard key={item.label} className="p-3.5">
              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/38">
                {item.label}
              </p>
              <p className="mb-0 text-sm font-medium text-white">{item.value}</p>
            </MockupCard>
          ))}
        </div>
      </div>
    </MockupWindow>
  );
}
