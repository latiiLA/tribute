"use client";

import { useEffect, useState } from "react";
import TrackItem from "@/components/TrackItem";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setShowVideo(true);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const tracks = [
    {
      trackNumber: "Track 1",
      trackName: "Biliqqiseekoo",
      videoId: "f12vepm9wlc",
    },
    {
      trackNumber: "Track 2",
      trackName: "Lulee",
      videoId: "IWwsV6Y2kig",
    },
    {
      trackNumber: "Track 3",
      trackName: "Baddessa Alagaa",
      videoId: "hhzHgVMSuMk",
    },
    {
      trackNumber: "Track 4",
      trackName: "Geerarsa",
      videoId: "8IG5hkb6dBU",
    },
    {
      trackNumber: "Track 5",
      trackName: "Tokkummaa",
      videoId: "Z_AfSE2Q1Ms",
    },
    {
      trackNumber: "Track 6",
      trackName: "Foollee",
      videoId: "NEvP4lsBPP8",
    },
    {
      trackNumber: "Track 7",
      trackName: "Sinbarbaadu",
      videoId: "ulkwmCdRXI4",
    },
    {
      trackNumber: "Track 8",
      trackName: "Koottu",
      videoId: "PTlEXce8ONE",
    },
    {
      trackNumber: "Track 9",
      trackName: "Oromummaa",
      videoId: "PtYj-x2ZFVA",
    },
    {
      trackNumber: "Track 10",
      trackName: "Inaaffaa",
      videoId: "3I3MAlXrPEE",
    },
    {
      trackNumber: "Track 11",
      trackName: "Oolmaankee",
      videoId: "o59EYBTdmx0",
    },
    {
      trackNumber: "Track 12",
      trackName: "Sanyii Mootii",
      videoId: "l9E8p1yhM-Q",
    },
  ];

  const tracks2 = [
    {
      trackNumber: "Track 1",
      trackName: "Maasaan gamaa",
      videoId: "votW2SPpD_",
    },
    {
      trackNumber: "Track 2",
      trackName: "Wal Dhabnaaree",
      videoId: "bMMLh6eVaQM",
    },
    {
      trackNumber: "Track 3",
      trackName: "Dhugaan Kee",
      videoId: "nK2LxErIfx4",
    },
    {
      trackNumber: "Track 4",
      trackName: "Tulluu Jalaa",
      videoId: "J-ZBfv5_SBQ",
    },
    {
      trackNumber: "Track 5",
      trackName: "Na qarqaarikaa",
      videoId: "nFh6dpHYSg4",
    },
    {
      trackNumber: "Track 6",
      trackName: "Kan Sidinquu",
      videoId: "F-YbFcJV9PY",
    },
    {
      trackNumber: "Track 7",
      trackName: "Xiqqaat guddaa caale",
      videoId: "4RxjVEGjBvk",
    },
    {
      trackNumber: "Track 8",
      trackName: "Bada Makoo Tiyyahoo",
      videoId: "4epHopzUIqM",
    },
    {
      trackNumber: "Track 9",
      trackName: "Anaan Anaan",
      videoId: "SClnIxrKNr8",
    },
    {
      trackNumber: "Track 10",
      trackName: "Waa'ee Keenya",
      videoId: "m57yUcap5d0",
    },
    {
      trackNumber: "Track 11",
      trackName: "Diggittii",
      videoId: "9zANyatwq5c",
    },
    {
      trackNumber: "Track 12",
      trackName: "Si Jajuun koo",
      videoId: "5dUgLAQdOo0",
    },
  ];

  const tracks3 = [
    {
      trackNumber: "Track 1",
      trackName: "Eessa Jirta",
      videoId: "ajGrkFL92rk",
    },
    {
      trackNumber: "Track 2",
      trackName: "Ilma Namaa",
      videoId: "nGES-U1YSkk",
    },
    {
      trackNumber: "Track 3",
      trackName: "Kuullee Koo",
      videoId: "-fUpxebDaHU",
    },
    {
      trackNumber: "Track 4",
      trackName: "Foon Foo Irraa Cite",
      videoId: "sKXM27_AJhQ",
    },
    {
      trackNumber: "Track 5",
      trackName: "Gootakoo",
      videoId: "8mamYOVc-P0",
    },
    {
      trackNumber: "Track 6",
      trackName: "Kan Si Dinqu",
      videoId: "1PADYtOFrnc",
    },
    {
      trackNumber: "Track 7",
      trackName: "Galatoomaa",
      videoId: "JnlK9a1OwRo",
    },
    {
      trackNumber: "Track 8",
      trackName: "Nan Gaabbe",
      videoId: "HZ-2FDtaczo",
    },
    {
      trackNumber: "Track 9",
      trackName: "Na qarqaarikaa",
      videoId: "gNVg6ixAbQc",
    },
    {
      trackNumber: "Track 10",
      trackName: "Sagalee keetan Hawwe",
      videoId: "MkpQUd1nENI",
    },
    {
      trackNumber: "Track 11",
      trackName: "Hadha Wabii",
      videoId: "YRNK5Tx8rsk",
    },
    {
      trackNumber: "Track 12",
      trackName: "Ajaa'iba",
      videoId: "paDQSdO2TjI",
    },
    {
      trackNumber: "Track 13",
      trackName: "Xiqqaat Guddaa Caale",
      videoId: "oLLGGSTPeZE",
    },
  ];
  return (
    <div className="p-4 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Video Section */}
        {showVideo && (
          <div className="order-first lg:order-last max-w-[800px] max-h-[450px] md:w-1/2 aspect-video flex items-center">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                selectedVideo || ""
              }?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        )}

        {/* Track List */}
        <div className="flex flex-col flex-1 gap-8">
          <div>
            <h2 className="text-xl font-semibold">Sanyii Mootii Track List</h2>
            <Separator className="bg-red-600 h-1 my-2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-4">
              {tracks.map((track, index) => (
                <TrackItem
                  key={index}
                  trackNumber={track.trackNumber}
                  trackName={track.trackName}
                  videoId={track.videoId}
                  setSelectedVideo={setSelectedVideo}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Track List */}
            <div className="flex flex-col flex-1">
              <h2 className="text-xl font-semibold">
                Waa&apos;ee Keenya Track List
              </h2>
              <Separator className="bg-red-600 h-1 my-2" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {tracks2.map((track, index) => (
                  <TrackItem
                    key={index}
                    trackNumber={track.trackNumber}
                    trackName={track.trackName}
                    videoId={track.videoId}
                    setSelectedVideo={setSelectedVideo}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Track List */}
            <div className="flex flex-col flex-1">
              <h2 className="text-xl font-semibold">
                Maal Mallisaa Track List
              </h2>
              <Separator className="bg-red-600 h-1 my-2" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-4">
                {tracks3.map((track, index) => (
                  <TrackItem
                    key={index}
                    trackNumber={track.trackNumber}
                    trackName={track.trackName}
                    videoId={track.videoId}
                    setSelectedVideo={setSelectedVideo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
