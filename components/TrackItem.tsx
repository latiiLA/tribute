"use client";
import { PlayCircle } from "lucide-react"; // or any play icon you prefer
import { Button } from "@/components/ui/button";

interface TrackItemProps {
  trackNumber: string;
  trackName: string;
  videoId: string;
  setSelectedVideo: (videoId: string) => void;
}

const TrackItem = ({
  trackNumber,
  trackName,
  videoId,
  setSelectedVideo,
}: TrackItemProps) => {
  return (
    <div
      className="flex items-center justify-between gap-4 p-2 hover:bg-gray-100 rounded-md transition-colors"
      onClick={() => setSelectedVideo(videoId)}
    >
      <span className="font-medium">{trackNumber}</span>
      <span className="flex-1 text-left">{trackName}</span>
      <Button variant="ghost" className="text-red-600 hover:text-red-800 p-1">
        <PlayCircle size={30} />
      </Button>
    </div>
  );
};

export default TrackItem;
