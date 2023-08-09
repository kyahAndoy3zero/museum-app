import React from 'react'

function ArtifactDescription({ artifactDescription }) {
    return (
        <div className='my-10'>
            <article className='text-lg text-slate-500'>{artifactDescription}</article>
        </div>
    )
}

export default ArtifactDescription