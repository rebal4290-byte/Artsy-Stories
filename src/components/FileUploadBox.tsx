"use client";

import { useState, useRef } from "react";
import { UploadCloud, FileCheck2, X } from "lucide-react";

interface FileUploadBoxProps {
  label?: string;
  hint?: string;
  multiple?: boolean;
}

export default function FileUploadBox({
  label = "Upload files or references",
  hint = "PNG, JPG, or PDF up to 25MB",
  multiple = true,
}: FileUploadBoxProps) {
  const [files, setFiles] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list).map((f) => f.name)]);
  }

  function removeFile(name: string) {
    setFiles((prev) => prev.filter((f) => f !== name));
  }

  return (
    <div>
      <label className="mb-2 block font-display text-sm text-ink">{label}</label>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          addFiles(e.dataTransfer.files);
        }}
        className={`flex flex-col items-center justify-center gap-2 rounded-2xl comic-border border-dashed bg-paper-2/60 px-6 py-10 text-center transition-colors ${
          dragOver ? "bg-sunshine/40" : ""
        }`}
      >
        <UploadCloud className="h-8 w-8 text-ink/60" aria-hidden />
        <p className="text-sm text-ink/70">
          Drag files here, or{" "}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="font-display text-magenta underline"
          >
            browse
          </button>
        </p>
        <p className="text-xs text-ink/45">{hint}</p>
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          className="sr-only"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((f) => (
            <li
              key={f}
              className="flex items-center justify-between gap-2 rounded-xl comic-border bg-white px-3 py-2 text-sm"
            >
              <span className="flex items-center gap-2 truncate">
                <FileCheck2 className="h-4 w-4 shrink-0 text-mint" aria-hidden />
                <span className="truncate">{f}</span>
              </span>
              <button
                type="button"
                onClick={() => removeFile(f)}
                aria-label={`Remove ${f}`}
                className="shrink-0 text-ink/50 hover:text-magenta"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
