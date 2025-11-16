import React from "react";

type Props = {};

function PhoneMockup({}: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[650px] w-[320px] rounded-[45px] border-8 border-zinc-900 shadow-[0_0_2px_2px_rgba(255,255,255,0.1)]">
        {/* Speaker */}
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[90px] -translate-x-1/2 transform rounded-full bg-zinc-900"></div>

        {/* Inner border */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-[37px] border-[3px] border-zinc-700 border-opacity-40"></div>

        {/* Screen */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[37px] bg-black">
          <div className="relative aspect-[9/16] h-full w-full">
            <video
              src="https://videos.pexels.com/video-files/14993748/14993748-uhd_1296_2304_30fps.mp4"
              className="h-full w-full object-cover"
              muted
              autoPlay
            ></video>
          </div>

          {/* Light glow */}
          <div className="absolute left-1/2 top-1/2 h-24 w-12 -translate-x-1/2 -translate-y-1/2 bg-zinc-600 blur-[80px]"></div>
        </div>

        {/* Buttons */}
        <div className="absolute left-[-12px] top-20 h-8 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>
        <div className="absolute left-[-12px] top-36 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>
        <div className="absolute left-[-12px] top-52 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>

        <div className="absolute right-[-12px] top-36 h-16 w-[6px] rounded-r-md bg-zinc-900 shadow-md"></div>
      </div>
    </div>
  );
}

export default PhoneMockup;

// import React from "react";

// type Props = {};

// function PhoneMockup({}: Props) {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="relative h-[600px] w-72 rounded-[45px] border-8 border-zinc-900 shadow-[0_0_2px_2px_rgba(255,255,255,0.1)]">
//         <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[90px] -translate-x-1/2 transform rounded-full bg-zinc-900"></div>

//         <div className="pointer-events-none absolute -inset-[1px] rounded-[37px] border-[3px] border-zinc-700 border-opacity-40"></div>

//         <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[37px] bg-zinc-900/10">
//           <video
//             controls
//             src="https://videos.pexels.com/video-files/14993748/14993748-uhd_1296_2304_30fps.mp4"
//             className="h-full"
//           ></video>
//           {/*
//           Ushbu video reel formatida yani 9:16 phone mockupini ham shunga moslashtirib ber!
//           video mockup ichiga to'li joylashib olsin
//           */}
//           <div className="absolute left-1/2 top-1/2 h-24 w-12 -translate-x-1/2 -translate-y-1/2 bg-zinc-600 blur-[80px]"></div>
//         </div>

//         <div className="absolute left-[-12px] top-20 h-8 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>

//         <div className="absolute left-[-12px] top-36 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>

//         <div className="absolute left-[-12px] top-52 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>

//         <div className="absolute right-[-12px] top-36 h-16 w-[6px] rounded-r-md bg-zinc-900 shadow-md"></div>
//       </div>
//     </div>
//   );
// }

// export default PhoneMockup;
