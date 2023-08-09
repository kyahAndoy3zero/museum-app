import React from 'react'

function AritfactHeader({ artifact }) {

    let str = '';
    if (artifact.month) {
        str += artifact.month
    }

    if (artifact.day) {
        str += " " + artifact.day + ","
    }


    return (
        <>
            <div className='flex justify-between mt-4'>
                <div>
                    <p className='text-4xl font-bold dark:text-slate-700'>{artifact.objectName}</p>
                    <div className="mb-5 text-xl text-sky-500 dark:text-sky-400">
                        {artifact.byCentury && `${artifact.byCentury}th century`}
                        {artifact.byYearAround && `${artifact.byYearAround}s`}
                        {artifact.specificYear && `${str} ${artifact.specificYear}`}
                    </div>
                </div>
                <div>
                    <p className='text-lg text-slate-200'>{artifact.objectIdNo}</p>
                </div>
            </div>

            <div>
                {artifact.width && <span className='block text-slate-600'>Width: {artifact.width} inch</span>}
                {artifact.height && <span className='block text-slate-600'>Height: {artifact.height} inch</span>}
            </div>
        </>

    )
}

export default AritfactHeader