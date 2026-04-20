"use client";

import { clsx } from "clsx";
import posthog from "posthog-js";
import {
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ChoiceOption<T extends string> = {
  label: string;
  value: T;
};

type Role =
  | "independent_artist"
  | "artist_manager"
  | "a_and_r"
  | "music_producer"
  | "label_manager_executive";
type TeamSize = "solo" | "two_to_three" | "four_to_six" | "seven_plus";
type ReleaseVolume = "one" | "two_to_four" | "five_plus" | "not_sure";
type PrimaryNeed =
  | "release_playbook"
  | "collaborator_credits"
  | "team_handoff"
  | "all_of_it";

type WaitlistForm = {
  name: string;
  email: string;
  phone: string;
  role: Role | "";
  teamSize: TeamSize | "";
  releaseVolume: ReleaseVolume | "";
  primaryNeed: PrimaryNeed | "";
};

type SubmissionState = "idle" | "submitting" | "success" | "duplicate";

const initialForm: WaitlistForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  teamSize: "",
  releaseVolume: "",
  primaryNeed: "",
};

const roleOptions: ChoiceOption<Role>[] = [
  { label: "Independent Artist", value: "independent_artist" },
  { label: "Artist Manager", value: "artist_manager" },
  { label: "A&R", value: "a_and_r" },
  { label: "Music Producer", value: "music_producer" },
  { label: "Label Manager / Label Executive", value: "label_manager_executive" },
];

const teamSizeOptions: ChoiceOption<TeamSize>[] = [
  { label: "Just me", value: "solo" },
  { label: "2-3 people", value: "two_to_three" },
  { label: "4-6 people", value: "four_to_six" },
  { label: "7+ people", value: "seven_plus" },
];

const releaseVolumeOptions: ChoiceOption<ReleaseVolume>[] = [
  { label: "1 release", value: "one" },
  { label: "2-4 releases", value: "two_to_four" },
  { label: "5+ releases", value: "five_plus" },
  { label: "Still figuring it out", value: "not_sure" },
];

const primaryNeedOptions: ChoiceOption<PrimaryNeed>[] = [
  { label: "A release playbook", value: "release_playbook" },
  { label: "Collecting credits", value: "collaborator_credits" },
  { label: "Team handoff and tasks", value: "team_handoff" },
  { label: "All of it", value: "all_of_it" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/urganize" },
  { label: "X", href: "https://x.com/urganize" },
  { label: "LinkedIn", href: "https://linkedin.com/company/urganize" },
  { label: "YouTube", href: "https://youtube.com/@urganize" },
  {
    label: "WhatsApp community",
    href: "https://chat.whatsapp.com/DGUGyC2GK3d5v6KPGw5aft",
  },
] as const;

const lastQuestionStep = 6;

const waitlistStepNames = [
  "welcome",
  "name",
  "email_phone",
  "user_type",
  "team_size",
  "release_volume",
  "primary_need",
] as const;

function captureWaitlistEvent(
  event: string,
  properties: Record<string, unknown>,
) {
  try {
    posthog.capture(event, properties);
  } catch (error) {
    console.error("PostHog waitlist event failed:", error);
  }
}

function getWaitlistMetadata(source: string) {
  const params = new URLSearchParams(window.location.search);

  return {
    source,
    pageUrl: window.location.href,
    referrer: document.referrer || undefined,
    userAgent: window.navigator.userAgent,
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
    utmTerm: params.get("utm_term") ?? undefined,
    utmContent: params.get("utm_content") ?? undefined,
    ref: params.get("ref") ?? undefined,
  };
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[+\d\s().-]{7,32}$/.test(phone.trim());
}

export function WaitlistButton({
  className,
  children = "Join the waitlist",
  source,
}: {
  className?: string;
  children?: ReactNode;
  source?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<WaitlistForm>(initialForm);
  const [error, setError] = useState("");
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  const ctaSource = useMemo(() => {
    if (source) {
      return source;
    }

    return typeof children === "string"
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")
      : "waitlist_cta";
  }, [children, source]);

  const progress = Math.round((Math.max(step, 1) / lastQuestionStep) * 100);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const resetForm = () => {
    setStep(0);
    setForm(initialForm);
    setError("");
    setSubmissionState("idle");
  };

  const openModal = () => {
    resetForm();
    setIsOpen(true);
    captureWaitlistEvent("waitlist_opened", {
      source: ctaSource,
    });
  };

  useEffect(() => {
    if (!isOpen || submissionState !== "idle") {
      return;
    }

    captureWaitlistEvent("waitlist_step_viewed", {
      source: ctaSource,
      step,
      step_name: waitlistStepNames[step],
    });
  }, [ctaSource, isOpen, step, submissionState]);

  const updateField = <Key extends keyof WaitlistForm>(
    key: Key,
    value: WaitlistForm[Key],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  };

  const validateStep = () => {
    if (step === 1 && !form.name.trim()) {
      return "Please enter your name.";
    }

    if (step === 2) {
      if (!validateEmail(form.email)) {
        return "Please enter a valid email address.";
      }

      if (!validatePhone(form.phone)) {
        return "Please enter a valid phone number.";
      }
    }

    if (step === 3 && !form.role) {
      return "Please choose what best describes you.";
    }

    if (step === 4 && !form.teamSize) {
      return "Please choose your release team size.";
    }

    if (step === 5 && !form.releaseVolume) {
      return "Please choose your release volume.";
    }

    if (step === 6 && !form.primaryNeed) {
      return "Please choose what you need most.";
    }

    return "";
  };

  const submitWaitlist = async () => {
    setSubmissionState("submitting");
    setError("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          metadata: getWaitlistMetadata(ctaSource),
        }),
      });

      const data = await response.json();

      if (response.status === 409) {
        captureWaitlistEvent("waitlist_duplicate_blocked", {
          source: ctaSource,
          role: form.role,
          team_size: form.teamSize,
          release_volume: form.releaseVolume,
          primary_need: form.primaryNeed,
        });
        setSubmissionState("duplicate");
        return;
      }

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmissionState("idle");
        return;
      }

      captureWaitlistEvent("waitlist_submitted", {
        source: ctaSource,
        role: form.role,
        team_size: form.teamSize,
        release_volume: form.releaseVolume,
        primary_need: form.primaryNeed,
      });
      setSubmissionState("success");
    } catch (submitError) {
      console.error(submitError);
      setError("Connection error. Please try again.");
      setSubmissionState("idle");
    }
  };

  const handleNext = async () => {
    if (step === 0) {
      captureWaitlistEvent("waitlist_step_completed", {
        source: ctaSource,
        step,
        step_name: waitlistStepNames[step],
      });
      setStep(1);
      return;
    }

    const stepError = validateStep();

    if (stepError) {
      setError(stepError);
      return;
    }

    if (step === lastQuestionStep) {
      captureWaitlistEvent("waitlist_step_completed", {
        source: ctaSource,
        step,
        step_name: waitlistStepNames[step],
        role: form.role,
        team_size: form.teamSize,
        release_volume: form.releaseVolume,
        primary_need: form.primaryNeed,
      });
      await submitWaitlist();
      return;
    }

    captureWaitlistEvent("waitlist_step_completed", {
      source: ctaSource,
      step,
      step_name: waitlistStepNames[step],
      role: form.role || undefined,
      team_size: form.teamSize || undefined,
      release_volume: form.releaseVolume || undefined,
      primary_need: form.primaryNeed || undefined,
    });

    setStep((current) => current + 1);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleNext();
  };

  const renderChoiceGroup = <T extends string>(
    options: ChoiceOption<T>[],
    value: T | "",
    onChange: (nextValue: T) => void,
  ) => (
    <div className="mt-8 space-y-3">
      {options.map((option, index) => {
        const isSelected = value === option.value;
        const choiceKey = String.fromCharCode(65 + index);

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={clsx(
              "group flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left text-base font-medium tracking-[-0.01em]",
              isSelected
                ? "border-white bg-white text-black"
                : "border-white/25 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]",
            )}
          >
            <span
              className={clsx(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded border font-mono text-xs",
                isSelected
                  ? "border-black/20 bg-black text-white"
                  : "border-white/25 bg-white/[0.06] text-white/75 group-hover:border-white/60",
              )}
            >
              {choiceKey}
            </span>
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );

  const renderQuestion = () => {
    if (step === 0) {
      return (
        <div className="mx-auto flex min-h-[22rem] max-w-[36rem] flex-col items-center justify-center text-center">
          <p className="font-display text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl">
            Urganize
          </p>
          <p className="mt-5 text-base text-white/80">
            Join the Urganize waitlist
          </p>
          <p className="mt-2 text-sm text-white/50">
            Answer a few quick questions so we can onboard the right teams first.
          </p>
        </div>
      );
    }

    if (step === 1) {
      return (
        <QuestionShell number={1} title="What's your name?">
          <input
            autoFocus
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Type your answer here..."
            autoComplete="name"
            className="mt-8 w-full border-0 border-b border-white/25 bg-transparent px-0 py-4 text-2xl font-medium tracking-[-0.03em] text-white outline-none placeholder:text-white/25 focus:border-white"
          />
        </QuestionShell>
      );
    }

    if (step === 2) {
      return (
        <QuestionShell number={2} title="What's your email and phone number?">
          <div className="mt-8 space-y-6">
            <input
              autoFocus
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="name@example.com"
              autoComplete="email"
              className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-4 text-2xl font-medium tracking-[-0.03em] text-white outline-none placeholder:text-white/25 focus:border-white"
            />
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+234 800 000 0000"
              autoComplete="tel"
              className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-4 text-2xl font-medium tracking-[-0.03em] text-white outline-none placeholder:text-white/25 focus:border-white"
            />
          </div>
        </QuestionShell>
      );
    }

    if (step === 3) {
      return (
        <QuestionShell number={3} title="Which best describes you?">
          {renderChoiceGroup(roleOptions, form.role, (value) =>
            updateField("role", value),
          )}
        </QuestionShell>
      );
    }

    if (step === 4) {
      return (
        <QuestionShell
          number={4}
          title="How big is the team around a typical release?"
        >
          {renderChoiceGroup(teamSizeOptions, form.teamSize, (value) =>
            updateField("teamSize", value),
          )}
        </QuestionShell>
      );
    }

    if (step === 5) {
      return (
        <QuestionShell
          number={5}
          title="How many releases are you planning or managing soon?"
        >
          {renderChoiceGroup(releaseVolumeOptions, form.releaseVolume, (value) =>
            updateField("releaseVolume", value),
          )}
        </QuestionShell>
      );
    }

    return (
      <QuestionShell number={6} title="What do you need Urganize for most?">
        {renderChoiceGroup(primaryNeedOptions, form.primaryNeed, (value) =>
          updateField("primaryNeed", value),
        )}
      </QuestionShell>
    );
  };

  const renderEnding = (kind: "success" | "duplicate") => (
    <div className="mx-auto flex min-h-[28rem] max-w-[40rem] flex-col justify-center text-center">
      <p className="font-display text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl">
        {kind === "success" ? "You're in" : "You're already in"}
      </p>
      <p className="mx-auto mt-6 max-w-[30rem] text-lg leading-8 text-white/75">
        {kind === "success"
          ? "We're onboarding in batches. We'll reach out when your spot is ready."
          : "We already have this email on the waitlist. We'll reach out when your spot is ready."}
      </p>

      <div className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
          Follow and join the community
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 hover:border-white/60 hover:bg-white hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button type="button" onClick={openModal} className={clsx(className)}>
        {children}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Join the Urganize waitlist"
          ref={dialogRef}
          tabIndex={-1}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_32%,rgba(255,255,255,0.10),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.02),transparent_45%,rgba(255,255,255,0.05))]" />

          <div className="relative flex min-h-dvh flex-col px-5 py-5 sm:px-8 sm:py-7">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/70 hover:border-white/50 hover:text-white"
              >
                Close
              </button>
              {submissionState === "idle" && step > 0 && (
                <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-1 items-center justify-center py-8">
              {submissionState === "success" && renderEnding("success")}
              {submissionState === "duplicate" && renderEnding("duplicate")}

              {(submissionState === "idle" ||
                submissionState === "submitting") && (
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-[42rem]"
                  noValidate
                >
                  {renderQuestion()}

                  {error && (
                    <p className="mt-6 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-100">
                      {error}
                    </p>
                  )}

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={submissionState === "submitting"}
                      className="rounded-md bg-white px-6 py-3 text-sm font-bold text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submissionState === "submitting"
                        ? "Submitting..."
                        : step === 0
                          ? "Start"
                          : step === lastQuestionStep
                            ? "Submit"
                            : "OK"}
                    </button>

                    {step > 1 && submissionState !== "submitting" && (
                      <button
                        type="button"
                        onClick={() => {
                          setError("");
                          setStep((current) => current - 1);
                        }}
                        className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/70 hover:border-white/50 hover:text-white"
                      >
                        Back
                      </button>
                    )}

                    {step > 0 && submissionState !== "submitting" && (
                      <span className="text-sm text-white/35">
                        press Enter
                      </span>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function QuestionShell({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-sm text-white/45">{number}*</p>
      <h2 className="mt-2 font-sans text-[1.75rem] font-medium leading-tight tracking-[-0.03em] text-white sm:text-[2.35rem]">
        {title}
      </h2>
      {children}
    </div>
  );
}
