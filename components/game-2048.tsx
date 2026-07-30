"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

type Board = number[][];

export default function Game2048() {
  const [board, setBoard] = useState<Board>([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const createEmpty = (): Board =>
    Array(4).fill(null).map(() => Array(4).fill(0));

  const addRandom = (b: Board): Board => {
    const empty: {r: number; c: number}[] = [];
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 4; c++)
        if (b[r][c] === 0) empty.push({r, c});
    if (empty.length === 0) return b;
    const {r, c} = empty[Math.floor(Math.random() * empty.length)];
    const next = b.map(row => [...row]);
    next[r][c] = Math.random() < 0.9 ? 2 : 4;
    return next;
  };

  const init = useCallback(() => {
    let b = createEmpty();
    b = addRandom(b);
    b = addRandom(b);
    setBoard(b);
    setScore(0);
    const saved = localStorage.getItem("portfolio2048best");
    if (saved) setBest(parseInt(saved));
  }, []);

  useEffect(() => { init(); }, [init]);

  const slideLeft = (row: number[]): [number[], number] => {
    let arr = row.filter(v => v);
    let gained = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] *= 2;
        gained += arr[i];
        arr[i + 1] = 0;
      }
    }
    arr = arr.filter(v => v);
    while (arr.length < 4) arr.push(0);
    return [arr, gained];
  };

  const rotate = (b: Board): Board => {
    const n = createEmpty();
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 4; c++)
        n[c][3 - r] = b[r][c];
    return n;
  };

  const move = useCallback((dir: number) => {
    setBoard(prev => {
      let b = prev.map(r => [...r]);
      for (let i = 0; i < dir; i++) b = rotate(b);
      let moved = false;
      let gained = 0;
      for (let r = 0; r < 4; r++) {
        const [nextRow, g] = slideLeft(b[r]);
        if (nextRow.join(",") !== b[r].join(",")) moved = true;
        b[r] = nextRow;
        gained += g;
      }
      for (let i = dir; i < 4; i++) b = rotate(b);
      if (!moved) return prev;
      b = addRandom(b);
      setScore(s => {
        const ns = s + gained;
        setBest(bst => {
          const nb = Math.max(bst, ns);
          localStorage.setItem("portfolio2048best", String(nb));
          return nb;
        });
        return ns;
      });
      return b;
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const map: Record<string, number> = {
        a: 0, A: 0,
        w: 3, W: 3,
        d: 2, D: 2,
        s: 1, S: 1,
      };
      if (map[e.key] !== undefined) {
        e.preventDefault();
        move(map[e.key]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [move]);

  const cellClass = (val: number) => {
    const base = "w-[60px] h-[60px] bg-[#1a1a1a] rounded flex items-center justify-center text-lg font-bold transition-all";
    const colors: Record<number, string> = {
      2: "text-[#eee]", 4: "text-[#ddd]", 8: "text-[#ffaa00]",
      16: "text-[#ff7700]", 32: "text-[#ff4400]", 64: "text-[#ff0000]",
      128: "text-[#ff00ff] text-sm", 256: "text-[#00ffff] text-sm",
      512: "text-[#00ff00] text-sm", 1024: "text-[#ffff00] text-xs",
      2048: "text-white text-xs drop-shadow-[0_0_8px_#00ff88]",
    };
    return `${base} ${colors[val] || ""}`;
  };

  return (
    <div className="term-box flex flex-col items-center gap-3">
      <div className="term-header">game.2048 --inline</div>
      <div className="flex justify-between w-full text-xs text-gray-500">
        <span>Score: <span className="text-[#00ff88]">{score}</span></span>
        <span>Best: <span className="text-[#00ccff]">{best}</span></span>
      </div>
      <div className="grid grid-cols-4 gap-2 bg-[#111] p-3 rounded-lg border border-[#222]">
        {board.flat().map((val, i) => (
          <div key={i} className={cellClass(val)}>{val || ""}</div>
        ))}
      </div>
      <p className="text-[11px] text-gray-600">Use WASD keys.</p>
      <Button variant="outline" size="sm" onClick={init}
              className="border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black font-mono text-xs">
        restart
      </Button>
    </div>
  );
}