import Lottie from "react-lottie";
import animationData from "../assets/musciLottie.json"

const Header = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <div className="flex from-sky-100 to-blue-300 w-full text-3xl font-bold text-white p-4 justify-center gap-4">
        <div>MoodMate</div>
        <div><Lottie options={defaultOptions}
            height={48}
            width={48}
        />
        </div>
    </div>
}

export default Header;