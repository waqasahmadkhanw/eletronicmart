import React, { useState } from "react";
import {
  Camera,
  Upload,
  ImagePlus,
  Loader2,
  Trash2,
} from "lucide-react";

const AvatarUpload = ({
  onUpload,
  loading = false,
  currentAvatar,
}) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    onUpload?.(formData);
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  const image =
    preview ||
    currentAvatar ||
    "https://placehold.co/300x300/e2e8f0/64748b?text=Avatar";

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/20 p-2.5 text-white backdrop-blur">
            <Camera size={22} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              Profile Picture
            </h2>

            <p className="text-sm text-emerald-50">
              Upload a professional profile photo.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="group relative">
            <img
              src={image}
              alt="Avatar"
              className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl ring-4 ring-slate-100 transition duration-300 group-hover:scale-105"
            />

            <label className="absolute bottom-2 right-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-110 hover:bg-blue-700">
              <Camera size={18} />

              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* File Info */}
        {file && (
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-center gap-3">
              <ImagePlus
                size={20}
                className="text-blue-600"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-slate-700">
                  {file.name}
                </p>

                <p className="text-sm text-slate-500">
                  {(file.size / 1024 / 1024).toFixed(2)}
                  MB
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-700">
            Recommended
          </p>

          <ul className="mt-2 space-y-1 text-sm text-slate-500">
            <li>• JPG, PNG or WebP</li>
            <li>• Maximum size: 5 MB</li>
            <li>• Square image (1:1) works best</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleUpload}
            disabled={!file || loading}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Uploading...
              </>
            ) : (
              <>
                <Upload size={18} />
                Upload Avatar
              </>
            )}
          </button>

          {file && (
            <button
              type="button"
              onClick={handleRemove}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 px-6 py-3 font-semibold text-red-600 transition-all duration-300 hover:bg-red-50"
            >
              <Trash2 size={18} />
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;