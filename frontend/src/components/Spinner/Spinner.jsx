


function Spinner() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 delay-75 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 delay-150 bg-white rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}

export default Spinner