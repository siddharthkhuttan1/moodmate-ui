// src/components/MoodResult.jsx
function MoodResult({ moodData }) {
    const { mood, tone, tags } = moodData;
    return (
        <div className="mt-4 text-center">
            <p className="text-lg font-medium text-purple-700">Mood: {mood}</p>
            <p className="text-sm text-gray-500">Tone: {tone}</p>
            <p className="text-sm text-gray-600">Tags: {tags.join(", ")}</p>
        </div>
    );
}

export default MoodResult;