import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlignLeft,
  ExternalLink,
  Globe,
  ImageIcon,
  Type,
  Video,
  Wand2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FormState {
  title: string;
  imageUrl: string;
  description: string;
  videoUrl: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}

function buildVideoHtml(videoUrl: string): string {
  if (!videoUrl) return "";
  const youtubeEmbed = getYouTubeEmbedUrl(videoUrl);
  if (youtubeEmbed) {
    return `<div style="margin: 0 auto 24px; max-width: 560px;">
      <iframe width="100%" height="315" src="${youtubeEmbed}"
        frameborder="0" allowfullscreen
        style="border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.15);"
      ></iframe>
    </div>`;
  }
  // Treat as direct MP4 or video URL
  return `<div style="margin: 0 auto 24px;">
    <video width="100%" style="max-width:560px; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.15);" controls>
      <source src="${videoUrl}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>`;
}

function buildHtml(
  title: string,
  imageUrl: string,
  description: string,
  videoUrl: string,
): string {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 40px 20px;
        background: #ffffff;
        color: #1a1a1a;
        min-height: 100vh;
      }
      h1 {
        font-size: 2rem;
        margin-bottom: 24px;
        color: #111;
        font-weight: 700;
      }
      img {
        max-width: 300px;
        width: 100%;
        border-radius: 12px;
        margin-bottom: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.12);
      }
      p {
        font-size: 1.05rem;
        line-height: 1.7;
        color: #444;
        max-width: 500px;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <h1>${title || "Untitled Website"}</h1>
    ${buildVideoHtml(videoUrl)}
    ${imageUrl ? `<img src="${imageUrl}" alt="${title}" />` : ""}
    <p>${description || "No description provided."}</p>
  </body>
</html>`;
}

export default function App() {
  const [form, setForm] = useState<FormState>({
    title: "",
    imageUrl: "",
    description: "",
    videoUrl: "",
  });
  const [generatedHtml, setGeneratedHtml] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedHtml(
        buildHtml(form.title, form.imageUrl, form.description, form.videoUrl),
      );
      setIsGenerating(false);
    }, 400);
  };

  const handleReset = () => {
    setForm({ title: "", imageUrl: "", description: "", videoUrl: "" });
    setGeneratedHtml(null);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <Globe className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            SiteForge
          </span>
        </div>
        <div className="ml-auto">
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
            Simple Website Builder
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row gap-0">
        {/* Left Panel — Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full lg:w-[420px] xl:w-[480px] shrink-0 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8 flex flex-col gap-6"
        >
          <div>
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-1">
              Build Your Website
            </h1>
            <p className="text-sm text-muted-foreground">
              Fill in the details and click Generate to preview your site.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="title"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Type className="w-3.5 h-3.5 text-primary" />
                Website Title
              </Label>
              <Input
                id="title"
                data-ocid="builder.input"
                placeholder="e.g. My Awesome Portfolio"
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
              />
            </div>

            {/* Video URL */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="videoUrl"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Video className="w-3.5 h-3.5 text-primary" />
                Video URL
              </Label>
              <Input
                id="videoUrl"
                placeholder="YouTube link or direct MP4 URL"
                value={form.videoUrl}
                onChange={(e) => handleChange("videoUrl", e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
              />
              <p className="text-xs text-muted-foreground">
                Paste a YouTube URL or a direct .mp4 video link.
              </p>
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="imageUrl"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <ImageIcon className="w-3.5 h-3.5 text-primary" />
                Image URL
              </Label>
              <Input
                id="imageUrl"
                data-ocid="builder.search_input"
                placeholder="https://example.com/photo.jpg"
                value={form.imageUrl}
                onChange={(e) => handleChange("imageUrl", e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="desc"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <AlignLeft className="w-3.5 h-3.5 text-primary" />
                Description
              </Label>
              <Textarea
                id="desc"
                data-ocid="builder.textarea"
                placeholder="Describe your website or write some content..."
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={4}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-ring resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-auto pt-2">
            <Button
              data-ocid="builder.primary_button"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="inline-block"
                  >
                    <Wand2 className="w-4 h-4" />
                  </motion.span>
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  Generate Website
                </>
              )}
            </Button>
            {generatedHtml && (
              <Button
                data-ocid="builder.secondary_button"
                variant="outline"
                className="border-border text-muted-foreground hover:text-foreground"
                onClick={handleReset}
              >
                Reset
              </Button>
            )}
          </div>
        </motion.div>

        {/* Right Panel — Preview */}
        <div className="flex-1 flex flex-col p-6 lg:p-8 gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-primary" />
              Live Preview
            </h2>
            {generatedHtml && (
              <span className="text-xs text-primary bg-accent px-2 py-1 rounded-full font-medium">
                ✓ Generated
              </span>
            )}
          </div>

          <div className="flex-1 rounded-xl border border-border overflow-hidden shadow-[0_0_0_1px_oklch(var(--border)),0_8px_40px_-8px_rgba(0,0,0,0.6)] relative min-h-[400px] lg:min-h-0">
            {/* Browser chrome bar */}
            <div className="bg-muted border-b border-border px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="flex-1 bg-background rounded-md px-3 py-1 mx-2 text-xs text-muted-foreground truncate">
                {form.title
                  ? `${form.title.toLowerCase().replace(/\s+/g, "-")}.site`
                  : "preview"}
              </div>
            </div>

            {/* iframe / placeholder */}
            <AnimatePresence mode="wait">
              {generatedHtml ? (
                <motion.iframe
                  key="iframe"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  title="Website Preview"
                  srcDoc={generatedHtml}
                  className="w-full h-full"
                  style={{ minHeight: "380px", border: "none" }}
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  data-ocid="builder.empty_state"
                  className="flex flex-col items-center justify-center h-full min-h-[380px] gap-4 text-center p-8"
                >
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-2">
                    <Globe className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="font-display text-lg font-semibold text-muted-foreground">
                    No Preview Yet
                  </p>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Fill in the form on the left and click{" "}
                    <span className="text-primary font-medium">
                      Generate Website
                    </span>{" "}
                    to see your site come to life here.
                  </p>
                  <div className="flex flex-col gap-2 mt-2 w-full max-w-xs">
                    {[
                      "Website Title",
                      "Video URL",
                      "Image URL",
                      "Description",
                    ].map((label) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-border" />
                        <span className="text-xs text-muted-foreground">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-3 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
