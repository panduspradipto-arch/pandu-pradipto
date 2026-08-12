/**
 * About page copy.
 *
 * `statement` and the first narrative passage are the APPROVED homepage About
 * copy, reused verbatim so the two surfaces speak with one voice.
 *
 * The remaining passages are DRAFT — written from that approved copy and from
 * confirmed facts only, for review in the owner's own voice. They make no claim
 * about any client, campaign, result, award, or statistic.
 */

export const about = {
  eyebrow: "Behind the Work",

  /** Approved homepage wording. */
  statement: "I develop the idea and I'm on set making it happen.",

  passages: [
    {
      label: "Practice",
      /*
       * First sentence is the CV's own positioning line, converted to first
       * person. The CV is the sole source of truth for biography — do not
       * reword it from portfolio projects or client relationships.
       *
       * Second sentence is the approved homepage About copy, retained because
       * the CV supports it: agencies (Dentsu, VMLY&R, Dwisapta, Maleo FCN),
       * production houses (Cerahati, Seven Sunday Film), brands (ULA, GovTech).
       */
      body: "I'm a creative professional with 15+ years of experience in advertising, production house, and social media management. I've worked inside agencies and directly with brands and production crews — equally comfortable developing the idea and being on set making it happen.",
    },
    {
      label: "Approach",
      body: "I'd rather solve a problem in pre-production than in post. That means writing direction that survives a real schedule, planning coverage against the edit, and staying on set to protect the idea once the day starts moving.",
    },
    {
      label: "Now",
      /** Derived from the approved homepage line about AI. */
      body: "Lately I've been folding AI-enhanced production into that process as a working method, not a gimmick — a way to test more ideas before the shoot, not a shortcut around it.",
    },
  ],

  /** The four positions the practice sits between. Supplied by the owner. */
  intersection: [
    "Creative Thinking",
    "Production Execution",
    "Visual Storytelling",
    "Technology",
  ],
} as const;
