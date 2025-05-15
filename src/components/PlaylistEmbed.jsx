// src/components/PlaylistEmbed.jsx
function PlaylistEmbed({ url }) {
    return (
        <div className="mt-4 sm:max-w-lg md:max-w-2xl border-2 rounded-xl">
            <iframe
                src={url}
                width="100%"
                height="360"
                frameBorder="0"
                allow="encrypted-media"
                title="Spotify Playlist"
            />
        </div>
    );
}

export default PlaylistEmbed;