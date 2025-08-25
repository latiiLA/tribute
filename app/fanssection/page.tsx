"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        Fans Section
      </h1>
      <div className="flex flex-col lg:flex-row  justify-between">
        <div className="flex flex-col items-center w-full">
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/Kenenitii/status/1366061176837320705"></a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/henokgabisa/status/1371665788734672897"></a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/awolallo/status/1452275469345345557"></a>
          </blockquote>
        </div>
        <div className="flex flex-col items-center w-full">
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/AbbichuuNagaa/status/1939077264223936642"></a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/odaa_bislii/status/1939411220223942873"></a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/odaa_bislii/status/1939411220223942873"></a>
          </blockquote>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-white dark:bg-black">
        <div className="flex flex-row items-center bg-white dark:bg-black w-full gap-15">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@naoladiayele/video/7521976242212539653"
            data-video-id="7521976242212539653"
            data-theme="dark"
          >
            <section></section>
          </blockquote>
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@oromo_nation/video/7031549372672298246?is_from_webapp=1&sender_device=pc"
            data-video-id="7031549372672298246"
          >
            <section></section>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Page;
