"use client";

import { useEffect, useState } from "react";

interface Repo {
  name: string;
  author: string;
  languageColor: string | null;
  description: string | null;
  html_url: string;
  language: string | null;
  stars: number;
  forks: number;
}

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch("https://pinned.berrysauce.dev/get/amjoshaghani")
      .then(r => { if (!r.ok) throw new Error("fail"); return r.json(); })
      .then((data: Repo[]) => setRepos(data))
      .catch(() => setErr(true));
  }, []);

  if (err) {
    return (
      <div className="term-box h-full">
        <div className="term-header">github.projects --fetch</div>
        <div className="text-xs text-gray-500 space-y-2">
          <p className="text-red-500">Error: Could not fetch GitHub data.</p>
          <p>Ensure username exists and repos are public.</p>
        </div>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="term-box h-full">
        <div className="term-header">github.projects --fetch</div>
        <div className="text-xs text-gray-200 animate-pulse">Fetching repositories...</div>
      </div>
    );
  }

  return (
    <div className="term-box h-full">
      <div className="term-header">github.projects --fetch</div>
      <div className="space-y-1">
        {repos.map(repo => (
          <div key={repo.name} className="py-2 border-b border-[#1a1a1a] last:border-0">
            <div className="flex justify-between items-baseline">
              <a href={"https://github.com/" + repo.author + "/" + repo.name} target="_blank" rel="noreferrer"
                className="text-[#00ccff] text-sm font-bold hover:underline">
                {repo.name}
              </a>
              <span className={"text-[10px]"} style={{"color": repo.languageColor || "#0f8"}}>{repo.language || "N/A"}</span>
            </div>
            <p className="text-[11px] text-gray-200 mt-1 leading-relaxed">
              {repo.description || "No description available."}
            </p>
            <div className="mt-1.5 text-[10px] text-gray-700 space-x-3">
              <span className="text-yellow-500">stars: {repo.stars}</span>
              <span className="text-red-500">forks: {repo.forks}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}