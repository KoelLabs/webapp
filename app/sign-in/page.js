import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function AuthScreen() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[375px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight ">
              <span className="relative mr-1 ml-6 text-transparent bg-clip-text bg-gradient-to-br from-black via-black to-sky-600"> <svg           className='h-10 w-10 absolute -left-10 -mt-1'           xmlns="http://www.w3.org/2000/svg"           width="870"           height="870"           fill="none"           viewBox="0 0 870 870"         >           <rect             width="214"             height="429"             x="671.179"             y="403"             fill="url(#paint0_linear_1691_806)"             fillOpacity="0.6"             rx="107"             transform="rotate(90 671.179 403)"           ></rect>           <rect             width="214"             height="429"             x="652.67"             y="662.406"             fill="url(#paint1_linear_1691_806)"             fillOpacity="0.6"             rx="107"             transform="rotate(135 652.67 662.406)"           ></rect>           <rect             width="214"             height="429"             x="671.179"             y="403"             fill="url(#paint2_linear_1691_806)"             fillOpacity="0.6"             rx="107"             transform="rotate(90 671.179 403)"           ></rect>           <rect             width="214"             height="429"             x="652.67"             y="662.406"             fill="url(#paint3_linear_1691_806)"             fillOpacity="0.6"             rx="107"             transform="rotate(135 652.67 662.406)"           ></rect>           <rect             width="214"             height="429"             x="671.179"             y="403"             fill="url(#paint4_linear_1691_806)"             fillOpacity="0.6"             rx="107"             transform="rotate(90 671.179 403)"           ></rect>           <rect             width="214"             height="429"             x="652.67"             y="662.406"             fill="url(#paint5_linear_1691_806)"             fillOpacity="0.6"             rx="107"             transform="rotate(135 652.67 662.406)"           ></rect>           <path             fill="#000"             d="M283.332 374.002c-55.404-20.556-106.308-146.637-104.047-152.731 2.261-6.094 123.083-68.461 178.487-47.905 55.404 20.556 83.654 82.134 63.098 137.538-20.556 55.404-82.134 83.654-137.538 63.098z"           ></path>           <defs>             <linearGradient               id="paint0_linear_1691_806"               x1="778.179"               x2="778.179"               y1="403"               y2="832"               gradientUnits="userSpaceOnUse"             >               <stop stopColor="#317EC5"></stop>               <stop offset="1"></stop>             </linearGradient>             <linearGradient               id="paint1_linear_1691_806"               x1="759.67"               x2="759.67"               y1="662.406"               y2="1091.41"               gradientUnits="userSpaceOnUse"             >               <stop stopColor="#317EC5"></stop>               <stop offset="1"></stop>             </linearGradient>             <linearGradient               id="paint2_linear_1691_806"               x1="778.179"               x2="778.179"               y1="403"               y2="832"               gradientUnits="userSpaceOnUse"             >               <stop stopColor="#317EC5"></stop>               <stop offset="1"></stop>             </linearGradient>             <linearGradient               id="paint3_linear_1691_806"               x1="759.67"               x2="759.67"               y1="662.406"               y2="1091.41"               gradientUnits="userSpaceOnUse"             >               <stop stopColor="#317EC5"></stop>               <stop offset="1"></stop>             </linearGradient>             <linearGradient               id="paint4_linear_1691_806"               x1="778.179"               x2="778.179"               y1="403"               y2="832"               gradientUnits="userSpaceOnUse"             >               <stop stopColor="#317EC5"></stop>               <stop offset="1"></stop>             </linearGradient>             <linearGradient               id="paint5_linear_1691_806"               x1="759.67"               x2="759.67"               y1="662.406"               y2="1091.41"               gradientUnits="userSpaceOnUse"             >               <stop stopColor="#317EC5"></stop>               <stop offset="1"></stop>             </linearGradient>           </defs>         </svg>             
                Koel Login
              </span></h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="diana@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button className="w-full bg-gradient-to-br py-0 border border-double outline-white/50 outline outline-[0.1px] outline-offset-[-2px] border-black from-sky-800 to-blue-950" type="submit">
              Login
            </Button>
            <div className="flex flex-row gap-2 items-center">
              <div className="h-0.5 bg-neutral-200 w-full"></div>
              <p className="w-[327px] text-sm text-neutral-500">Or continue with</p>
              <div className="h-0.5 bg-neutral-200 w-full"></div>
            </div>

            <div className="flex flex-row gap-4">
              <Button className="w-full bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-200">
                <svg className="h-5 w-5 mr-2" width="754" height="768" viewBox="0 0 754 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M753.32 392.727C753.32 365.498 750.876 339.316 746.338 314.182H384.68V462.895H591.342C582.266 510.72 555.036 551.215 514.193 578.444V675.142H638.818C711.429 608.116 753.32 509.673 753.32 392.727Z" fill="#4285F4"/>
                  <path d="M384.68 768C488.36 768 575.284 733.789 638.818 675.142L514.193 578.444C479.982 601.484 436.346 615.447 384.68 615.447C284.84 615.447 200.011 548.073 169.64 457.309H41.8728V556.451C105.058 681.775 234.571 768 384.68 768Z" fill="#34A853"/>
                  <path d="M169.64 456.96C161.96 433.92 157.422 409.484 157.422 384C157.422 358.516 161.96 334.08 169.64 311.04V211.898H41.8728C15.691 263.564 0.680054 321.862 0.680054 384C0.680054 446.138 15.691 504.436 41.8728 556.102L141.364 478.604L169.64 456.96Z" fill="#FBBC05"/>
                  <path d="M384.68 152.902C441.233 152.902 491.502 172.451 531.647 210.153L641.611 100.189C574.935 38.0509 488.36 0 384.68 0C234.571 0 105.058 86.2255 41.8728 211.898L169.64 311.04C200.011 220.276 284.84 152.902 384.68 152.902Z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              <Button className="w-full bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-200">
                <svg className="h-8 w-8 mr-2" width="934" height="934" viewBox="0 0 934 934" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1728_218" maskUnits="userSpaceOnUse" x="0" y="0" width="934" height="934">
                  <path d="M0 0.000706673H933.333V933.334H0V0.000706673Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_1728_218)">
                  <path d="M800 466.669C800 282.574 650.761 133.335 466.666 133.335C282.572 133.335 133.333 282.574 133.333 466.669C133.333 622.995 240.953 754.165 386.141 790.186V568.53H317.405V466.669H386.141V422.777C386.141 309.321 437.485 256.734 548.872 256.734C569.989 256.734 606.428 260.874 621.334 265.015V357.354C613.466 356.526 599.802 356.111 582.825 356.111C528.168 356.111 507.049 376.815 507.049 430.645V466.669H615.928L597.224 568.53H507.049V797.561C672.097 777.626 800 637.093 800 466.669Z" fill="#0866FF"/>
                  <path d="M597.223 568.53L615.928 466.669H507.05V430.643C507.05 376.814 528.167 356.111 582.824 356.111C599.802 356.111 613.466 356.525 621.334 357.353V265.015C606.427 260.874 569.988 256.733 548.871 256.733C437.486 256.733 386.14 309.321 386.14 422.777V466.669H317.404V568.53H386.14V790.186C411.931 796.583 438.898 800.002 466.666 800.002C480.338 800.002 493.81 799.159 507.05 797.561V568.53H597.223Z" fill="white"/>
                </g>
              </svg>

                Facebook
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative rounded-xl m-4 overflow-hidden">
        <div className="mx-auto absolute top-0 left-0 right-0 bottom-0 h-full flex justify-between z-[10] rotate-45 scale-[1.35]">
          <div className="w-[1px] h-full bg-neutral-200 drops"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops2"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops3"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops4"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops2"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops3"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops4"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops2"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops3"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops4"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops2"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops3"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops4"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops2"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops3"></div>
          <div className="w-[1px] h-full bg-neutral-200 drops4"></div>
        </div>
      </div>
    </div>
  )
}
