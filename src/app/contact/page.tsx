import type { Metadata } from "next";
import { Mail, Clock, Camera, MessageCircle, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Artsy Stories team — email, social, or the contact form.",
};

export default function ContactPage() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20">
      <SectionHeader
        eyebrow="Contact"
        title="Say hello"
        description="Questions about a project, pricing, or just want to chat about a brief? We're here."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          <div className="rounded-3xl comic-border bg-white p-6 shadow-pop-sm">
            <span className="grid h-11 w-11 place-items-center rounded-2xl comic-border bg-sunshine">
              <Mail className="h-5 w-5 text-ink" aria-hidden />
            </span>
            <h3 className="mt-3 font-display text-lg text-ink">Email Us</h3>
            <p className="mt-1 text-sm text-ink/65">hello@artsystories.studio</p>
          </div>

          <div className="rounded-3xl comic-border bg-white p-6 shadow-pop-sm">
            <span className="grid h-11 w-11 place-items-center rounded-2xl comic-border bg-cyan">
              <Clock className="h-5 w-5 text-ink" aria-hidden />
            </span>
            <h3 className="mt-3 font-display text-lg text-ink">Business Hours</h3>
            <p className="mt-1 text-sm text-ink/65">Monday–Friday, 9am–6pm (GMT+5)</p>
            <p className="text-sm text-ink/65">Weekend replies may take a little longer.</p>
          </div>

          <div className="rounded-3xl comic-border bg-white p-6 shadow-pop-sm">
            <h3 className="font-display text-lg text-ink">Find Us Online</h3>
            <div className="mt-3 flex gap-3">
              {[Camera, MessageCircle, Users].map((SocialIcon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Artsy Stories on social media"
                  className="grid h-10 w-10 place-items-center rounded-full comic-border bg-paper text-ink transition hover:bg-grape hover:text-white"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
