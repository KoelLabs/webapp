'use client';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/base/button';
import { useToast } from '@/hooks/use-toast';

export default function CTA({ hideBg = false }: { hideBg?: boolean }) {
  const { toast } = useToast();
  return (
    <div id="join-the-waitlist" className={`relative`}>
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] transform-gpu opacity-10 top-48"></div>
      <div
        className={`mx-auto absolute top-0 left-0 right-0 bottom-0 lg:max-w-[1264px] h-full flex justify-between z-[-1] ${hideBg ? 'hidden' : ''}`}
      >
        <div className="h-full"></div>
        <div className="w-[1px] h-full bg-neutral-200 drops"></div>
        <div className="w-[1px] h-full bg-neutral-200 drops2"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="w-[1px] h-full bg-neutral-200 drops3"></div>
        <div className="w-[1px] h-full bg-neutral-200 drops4"></div>
        <div className="h-full"></div>
      </div>

      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:p-4 sm:border sm:border-neutral-200 bg-white/50 backdrop-blur-sm sm:rounded-[36px]">
          <section
            aria-labelledby="cta-heading"
            className="relative isolate overflow-hidden bg-white/50 border border-neutral-200 backdrop-blur-md px-6 py-16 shadow-sm sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="415"
              height="394"
              fill="none"
              className="absolute right-1/2 top-1/4 -z-10 size-[64rem] opacity-100 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-[90%] lg:translate-y-0"
              viewBox="0 0 415 394"
            >
              <circle
                cx="-17.089"
                cy="210.388"
                r="271.149"
                fill="url(#paint0_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.09 210.388)"
              ></circle>
              <circle
                cx="-17.089"
                cy="210.388"
                r="270.649"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.09 210.388)"
              ></circle>
              <ellipse
                cx="-16.646"
                cy="210.15"
                fill="url(#paint1_radial_2207_218)"
                fillOpacity="0.12"
                rx="319"
                ry="318.5"
                transform="rotate(-28.073 -16.646 210.15)"
              ></ellipse>
              <path
                stroke="#0284C7"
                strokeOpacity="0.1"
                d="M264.382 60.265c82.649 154.963 23.83 347.692-131.378 430.472s-348.029 24.261-430.678-130.702-23.83-347.692 131.378-430.472c155.209-82.78 348.029-24.261 430.678 130.702Z"
              ></path>
              <circle
                cx="-17.089"
                cy="210.387"
                r="221.872"
                fill="url(#paint2_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.09 210.387)"
              ></circle>
              <circle
                cx="-17.089"
                cy="210.387"
                r="221.372"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.09 210.387)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="164.5"
                fill="url(#paint3_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="164"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <circle
                cx="-17.088"
                cy="210.387"
                r="104.5"
                fill="url(#paint4_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.088 210.387)"
              ></circle>
              <circle
                cx="-17.088"
                cy="210.387"
                r="104"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.088 210.387)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="41.5"
                fill="url(#paint5_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="41"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.739 96.65)scale(271.149)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint1_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 318.5 -319 0 -16.646 210.15)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint2_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.738 96.649)scale(221.872)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint3_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.737 96.65)scale(164.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint4_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.737 96.65)scale(104.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint5_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.736 96.649)scale(41.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="415"
              height="394"
              fill="none"
              className="absolute right-1/2 top-1/4 scale-x-[-1] -z-10 size-[64rem] opacity-100 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-[10%] lg:translate-y-0"
              viewBox="0 0 415 394"
            >
              <circle
                cx="-17.089"
                cy="210.388"
                r="271.149"
                fill="url(#paint0_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.09 210.388)"
              ></circle>
              <circle
                cx="-17.089"
                cy="210.388"
                r="270.649"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.09 210.388)"
              ></circle>
              <ellipse
                cx="-16.646"
                cy="210.15"
                fill="url(#paint1_radial_2207_218)"
                fillOpacity="0.12"
                rx="319"
                ry="318.5"
                transform="rotate(-28.073 -16.646 210.15)"
              ></ellipse>
              <path
                stroke="#0284C7"
                strokeOpacity="0.1"
                d="M264.382 60.265c82.649 154.963 23.83 347.692-131.378 430.472s-348.029 24.261-430.678-130.702-23.83-347.692 131.378-430.472c155.209-82.78 348.029-24.261 430.678 130.702Z"
              ></path>
              <circle
                cx="-17.089"
                cy="210.387"
                r="221.872"
                fill="url(#paint2_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.09 210.387)"
              ></circle>
              <circle
                cx="-17.089"
                cy="210.387"
                r="221.372"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.09 210.387)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="164.5"
                fill="url(#paint3_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="164"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <circle
                cx="-17.088"
                cy="210.387"
                r="104.5"
                fill="url(#paint4_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.088 210.387)"
              ></circle>
              <circle
                cx="-17.088"
                cy="210.387"
                r="104"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.088 210.387)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="41.5"
                fill="url(#paint5_radial_2207_218)"
                fillOpacity="0.12"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <circle
                cx="-17.087"
                cy="210.385"
                r="41"
                stroke="#0284C7"
                strokeOpacity="0.1"
                transform="rotate(-28.073 -17.087 210.385)"
              ></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.739 96.65)scale(271.149)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint1_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 318.5 -319 0 -16.646 210.15)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint2_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.738 96.649)scale(221.872)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint3_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.737 96.65)scale(164.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint4_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.737 96.65)scale(104.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
                <radialGradient
                  id="paint5_radial_2207_218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 -113.736 96.649)scale(41.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284C7"></stop>
                  <stop offset="1" stopColor="#0284C7"></stop>
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:flex-auto lg:py-32">
              <p className="text-sm/4 font-semibold text-sky-600 mb-2">Closed Beta</p>
              <h2
                id="cta-heading"
                className="text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl"
              >
                Join Our Waitlist
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-neutral-700">
                We are gearing up for our closed beta launch in 2025. Join the waitlist to secure
                your spot.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <div className="relative w-full lg:mx-4">
                  <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLScYXfLnmvyRogKKffPJ1R0c_sYWpAsAk_8lYWqEGWWSZGHX3Q/formResponse"
                    method="POST"
                    onSubmit={e => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      fetch(e.currentTarget.action, {
                        method: 'POST',
                        body: formData,
                        mode: 'no-cors',
                      });
                      toast({
                        title: 'Submitted',
                        description: 'Thank you for joining the waitlist!',
                      });
                      e.currentTarget.reset();
                    }}
                  >
                    <label htmlFor="email-input" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="entry.358867278"
                      placeholder="Email address"
                      aria-label="Email address"
                      className="block w-full rounded-2xl border border-neutral-200 bg-white/75 py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-sky-950 focus:outline-none focus:ring-sky-950/5"
                      required
                    />
                    <div className="absolute inset-y-1 right-1 flex justify-end">
                      <button
                        type="submit"
                        aria-label="Submit email to join waitlist"
                        className="flex aspect-square h-full items-center justify-center rounded-xl bg-sky-700 text-white transition hover:bg-sky-800 bg-gradient-to-b border border-double outline-white/50 outline-offset-[-2px] border-black from-sky-900 to-blue-950"
                      >
                        <ArrowRightIcon className="w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
