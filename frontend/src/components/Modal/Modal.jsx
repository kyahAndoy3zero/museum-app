

export const Modal = ({ isVisible, onClose, children, width, title}) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <>

            <div id="wrapper" onClick={handleClose} className="absolute backdrop-blur-md top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">

                <div className={`relative ${width} mx-auto my-10`}>
                    <div className="items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md sm:p-8 lg:p-10 dark:bg-gray-800 dark:border-gray-700">
                        <div className={`flex ${title ? 'mb-10' : ''}`}>

                            <h1 className='text-2xl dark:text-slate-50 font-semibold'>{title}</h1>
                                               
                            <button onClick={() => onClose()} type="button" className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

} 