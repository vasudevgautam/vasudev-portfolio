import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiAward,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiExternalLink,
  FiTrendingUp,
} from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const profiles = [
  {
    name: "Codeforces",
    username: "vasu.gautam",
    url: "https://codeforces.com/profile/vasu.gautam",
    icon: FiCode,
    type: "codeforces",
  },
  {
    name: "LeetCode",
    username: "4AdYkgfUy1",
    url: "https://leetcode.com/u/4AdYkgfUy1/",
    icon: FiCode,
    type: "leetcode",
  },
  {
    name: "CodeChef",
    username: "vasudev_gautam",
    url: "https://www.codechef.com/users/vasudev_gautam",
    icon: FiAward,
    type: "codechef",
  },
  {
    name: "GeeksforGeeks",
    username: "vasudevkuwwwm",
    url: "https://www.geeksforgeeks.org/profile/vasudevkuwwwm?tab=activity",
    icon: FiActivity,
    type: "gfg",
  },
];

function CodingActivity() {
  const [stats, setStats] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submissionError, setSubmissionError] = useState(false);

  useEffect(() => {
    async function fetchCodingData() {
      setLoading(true);

      try {
        const [profileResponse, submissionResponse] = await Promise.all([
          fetch(
            `https://codeforces.com/api/user.info?handles=vasu.gautam`
          ),
          fetch(
            `https://codeforces.com/api/user.status?handle=vasu.gautam&from=1&count=1000`
          ),
        ]);

        const profileJson = await profileResponse.json();
        const submissionJson = await submissionResponse.json();

        if (
          profileJson.status === "OK" &&
          profileJson.result?.length > 0
        ) {
          const user = profileJson.result[0];

          setStats({
            codeforces: {
              rating: user.rating ?? "Unrated",
              maxRating: user.maxRating ?? "—",
              rank: user.rank ?? "Unrated",
              maxRank: user.maxRank ?? "—",
            },
          });
        }

        if (
          submissionJson.status === "OK" &&
          Array.isArray(submissionJson.result)
        ) {
          setSubmissions(submissionJson.result);
          setSubmissionError(false);
        } else {
          setSubmissionError(true);
        }
      } catch (error) {
        console.error("Coding activity error:", error);
        setSubmissionError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCodingData();
  }, []);

  return (
    <section
      id="coding"
      className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Competitive Programming"
            title="Coding Activity"
            description="A live view of my competitive programming activity and recent submissions."
          />
        </Reveal>

        {/* Platform Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {profiles.map((profile, index) => (
            <Reveal key={profile.name} delay={index * 0.08}>
              <CodingCard
                profile={profile}
                stats={
                  profile.type === "codeforces"
                    ? stats.codeforces
                    : undefined
                }
                loading={loading}
              />
            </Reveal>
          ))}
        </div>

        {/* Codeforces Activity Heatmap */}
        <Reveal delay={0.15}>
          <ActivityHeatmap
            submissions={submissions}
            loading={loading}
            error={submissionError}
          />
        </Reveal>

        {/* Recent Submissions */}
        <Reveal delay={0.2}>
          <RecentSubmissions
            submissions={submissions}
            loading={loading}
            error={submissionError}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   PLATFORM CARD
========================================================= */

function CodingCard({ profile, stats, loading }) {
  const Icon = profile.icon;

  const getStats = () => {
    if (profile.type === "codeforces") {
      return [
        {
          label: "Current Rating",
          value: stats?.rating ?? "—",
          icon: FiTrendingUp,
        },
        {
          label: "Max Rating",
          value: stats?.maxRating ?? "—",
          icon: FiAward,
        },
        {
          label: "Rank",
          value: stats?.rank ?? "—",
          icon: FiCheckCircle,
        },
      ];
    }

    if (profile.type === "leetcode") {
      return [
        {
          label: "Profile",
          value: "LeetCode",
          icon: FiCode,
        },
        {
          label: "Activity",
          value: "Live",
          icon: FiActivity,
        },
      ];
    }

    if (profile.type === "codechef") {
      return [
        {
          label: "Profile",
          value: "CodeChef",
          icon: FiAward,
        },
        {
          label: "Activity",
          value: "Live",
          icon: FiActivity,
        },
      ];
    }

    return [
      {
        label: "Profile",
        value: "GFG",
        icon: FiCode,
      },
      {
        label: "Activity",
        value: "Live",
        icon: FiActivity,
      },
    ];
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-7"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <Icon size={23} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {profile.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                @{profile.username}
              </p>
            </div>
          </div>

          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${profile.name} profile`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-gray-500 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <FiExternalLink size={16} />
          </a>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {getStats().map((item) => {
            const StatIcon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-center gap-2 text-gray-500">
                  <StatIcon size={14} />
                  <span className="text-xs">{item.label}</span>
                </div>

                <div className="mt-2 min-h-7">
                  {loading ? (
                    <div className="h-6 w-16 animate-pulse rounded bg-white/10" />
                  ) : (
                    <p className="truncate text-lg font-bold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
        >
          View Profile
          <FiExternalLink size={15} />
        </a>
      </div>
    </motion.article>
  );
}

/* =========================================================
   ACTIVITY HEATMAP
========================================================= */

function ActivityHeatmap({ submissions, loading, error }) {
  const heatmap = useMemo(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364);

    const activity = {};

    submissions.forEach((submission) => {
      const date = new Date(submission.creationTimeSeconds * 1000);

      date.setHours(0, 0, 0, 0);

      if (date < startDate || date > today) {
        return;
      }

      const key = getDateKey(date);

      activity[key] = (activity[key] || 0) + 1;
    });

    const days = [];

    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);

      date.setDate(startDate.getDate() + i);

      const key = getDateKey(date);

      days.push({
        date,
        key,
        count: activity[key] || 0,
      });
    }

    return days;
  }, [submissions]);

  const totalSubmissions = heatmap.reduce(
    (total, day) => total + day.count,
    0
  );

  const activeDays = heatmap.filter((day) => day.count > 0).length;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FiActivity className="text-blue-400" size={20} />

            <h3 className="text-xl font-bold text-white">
              Coding Activity
            </h3>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Codeforces submissions over the last year
          </p>
        </div>

        {!loading && !error && (
          <div className="flex gap-5 text-sm">
            <div>
              <span className="font-bold text-white">
                {totalSubmissions}
              </span>{" "}
              <span className="text-gray-500">submissions</span>
            </div>

            <div>
              <span className="font-bold text-white">
                {activeDays}
              </span>{" "}
              <span className="text-gray-500">active days</span>
            </div>
          </div>
        )}
      </div>

      {loading ? (
        <div className="mt-8 h-32 animate-pulse rounded-xl bg-white/5" />
      ) : error ? (
        <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm text-yellow-400">
          Unable to load live Codeforces activity right now.
        </div>
      ) : (
        <>
          <div className="mt-8 overflow-x-auto pb-3">
            <div className="min-w-190">
              <div className="mb-2 flex justify-between px-1 text-xs text-gray-600">
                <span>Less</span>

                <div className="flex items-center gap-1">
                  <span className="mr-1">More</span>
                  <HeatLegend />
                </div>
              </div>

              <div className="grid grid-flow-col grid-rows-7 gap-1">
                {heatmap.map((day) => (
                  <div
                    key={day.key}
                    title={`${day.count} submission${
                      day.count === 1 ? "" : "s"
                    } on ${formatDate(day.date)}`}
                    className={`h-3 w-3 rounded-[3px] transition-transform hover:scale-125 ${
                      getHeatClass(day.count)
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-600">
            Activity is calculated from Codeforces submissions.
          </div>
        </>
      )}
    </div>
  );
}

function HeatLegend() {
  return (
    <div className="flex items-center gap-1">
      <span className="h-3 w-3 rounded-[3px] bg-white/5" />
      <span className="h-3 w-3 rounded-[3px] bg-blue-900/60" />
      <span className="h-3 w-3 rounded-[3px] bg-blue-700/70" />
      <span className="h-3 w-3 rounded-[3px] bg-blue-500/80" />
      <span className="h-3 w-3 rounded-[3px] bg-blue-400" />
    </div>
  );
}

/* =========================================================
   RECENT SUBMISSIONS
========================================================= */

function RecentSubmissions({ submissions, loading, error }) {
  const recent = submissions.slice(0, 6);

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FiClock className="text-blue-400" size={20} />

            <h3 className="text-xl font-bold text-white">
              Recent Submissions
            </h3>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Latest Codeforces activity
          </p>
        </div>

        <a
          href="https://codeforces.com/profile/vasu.gautam"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300 sm:flex"
        >
          View all
          <FiExternalLink size={14} />
        </a>
      </div>

      {loading ? (
        <div className="mt-6 space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-16 animate-pulse rounded-xl bg-white/5"
            />
          ))}
        </div>
      ) : error ? (
        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm text-yellow-400">
          Recent submissions are temporarily unavailable.
        </div>
      ) : recent.length === 0 ? (
        <div className="mt-6 rounded-xl border border-white/10 p-5 text-sm text-gray-500">
          No recent submissions found.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {recent.map((submission, index) => (
            <SubmissionRow
              key={`${submission.id}-${index}`}
              submission={submission}
            />
          ))}
        </div>
      )}

      <a
        href="https://codeforces.com/profile/vasu.gautam"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400 sm:hidden"
      >
        View Codeforces Profile
        <FiExternalLink size={15} />
      </a>
    </div>
  );
}

function SubmissionRow({ submission }) {
  const verdict = submission.verdict || "UNKNOWN";

  const accepted = verdict === "OK";

  const problemName =
    submission.problem?.name || "Unknown Problem";

  const contestId = submission.contestId;
  const index = submission.problem?.index;

  const problemUrl =
    contestId && index
      ? `https://codeforces.com/contest/${contestId}/problem/${index}`
      : "https://codeforces.com/problemset";

  return (
    <motion.a
      href={problemUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-blue-500/20 hover:bg-blue-500/5"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
            accepted
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {accepted ? (
            <FiCheckCircle size={18} />
          ) : (
            <FiCode size={18} />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">
            {problemName}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span>
              {submission.problem?.index || "—"}
            </span>

            <span>•</span>

            <span>
              {formatRelativeTime(
                submission.creationTimeSeconds
              )}
            </span>

            {submission.problem?.rating && (
              <>
                <span>•</span>

                <span>
                  {submission.problem.rating}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className={`hidden shrink-0 rounded-full px-3 py-1 text-xs font-medium sm:block ${
          accepted
            ? "bg-green-500/10 text-green-400"
            : "bg-red-500/10 text-red-400"
        }`}
      >
        {formatVerdict(verdict)}
      </div>
    </motion.a>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(date) {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatRelativeTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const now = new Date();

  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) {
    return "just now";
  }

  if (diff < 3600) {
    return `${Math.floor(diff / 60)}m ago`;
  }

  if (diff < 86400) {
    return `${Math.floor(diff / 3600)}h ago`;
  }

  if (diff < 604800) {
    return `${Math.floor(diff / 86400)}d ago`;
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

function formatVerdict(verdict) {
  return verdict
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getHeatClass(count) {
  if (count === 0) {
    return "bg-white/5";
  }

  if (count === 1) {
    return "bg-blue-900/60";
  }

  if (count <= 3) {
    return "bg-blue-700/70";
  }

  if (count <= 6) {
    return "bg-blue-500/80";
  }

  return "bg-blue-400";
}

export default CodingActivity;