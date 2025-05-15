const FeelingCard = ({ emoji, onClick }) => {
    return (<div class="p-4" onClick={onClick}>
        <button class="w-16 h-16 md:w-24 md:h-24 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center text-3xl hover:scale-105 active:scale-95 focus:outline-none">
            {emoji}
        </button>
    </div>)

}

export default FeelingCard