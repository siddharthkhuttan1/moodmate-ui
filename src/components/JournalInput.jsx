import { useState } from "react";
import FeelingCard from "./FeelingCard";

function JournalInput({ entry, setEntry, setMoodData, setPlaylistUrl }) {
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (entryToSend) => {
        if (loading) {
            return
        }
        setLoading(true);

        try {
            const res = await fetch("https://moodmate-backend.onrender.com/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ entry: entryToSend }),
            });

            if (!res.ok) throw new Error("API request failed");

            const { mood, tone, tags, playlistUrl } = await res.json();

            setMoodData({ mood, tone, tags });
            setPlaylistUrl(playlistUrl);
        } catch (err) {
            console.error("Error fetching mood data:", err);
            alert("Failed to analyze mood. Please try again later.");
        }

        setLoading(false);
    };

    const emojiItems = [
        {
            "emoji": "😇",
            "text": "I feel happy and satisifed today"
        },
        {
            "emoji": "🧐",
            "text": "I feel confused"
        },
        {
            "emoji": "😔",
            "text": "I feel sad"
        },
        {
            "emoji": "🥰",
            "text": "I feel loved"
        },
        {
            "emoji": "😡",
            "text": "I feel angry"
        }
    ]

    return (
        <div className="w-full sm:max-w-lg md:max-w-3xl">


            <div className="text-3xl flex justify-center mt-4">
                Pick a mood
            </div>

            <div class="flex flex-wrap gap-2 p-4">
                {emojiItems.map((ei, i) => <FeelingCard key={i} emoji={ei.emoji} onClick={() => handleSubmit(ei.text)} />)}
            </div>

            <div className="flex justify-center text-white text-3xl mb-4">
                or tell us how are you feeling:
            </div>
            <textarea
                className="w-full p-3 border border-purple-300 rounded-md text-black"
                rows="4"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="How are you feeling today?"
            />
            <button
                onClick={() => handleSubmit(entry)}
                className="mt-3 px-4 py-2 bg-[#3ab757] text-white rounded-md hover:bg-purple-700"
            >
                {loading ? "Working our magic..." : "Find my music!"}
            </button>
        </div>
    );
}

export default JournalInput;