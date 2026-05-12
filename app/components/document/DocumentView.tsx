import { WRITING_CONTENT } from '@/app/consts/ContentPage'
import React from 'react'

interface DocumentViewProps {
    docId: string
}

const DocumentView: React.FC<DocumentViewProps> = ({ docId }) => {

    const document = WRITING_CONTENT[docId]

    if (!document)
        return (
            <div className="p-8 bg-white border-4 border-black shadow-neubrutalism text-center">
                <p className="font-bold text-red-600">Error 404: Document '{docId}' missing from the archive.</p>
            </div>
        )

    const { title, date, content } = document

    return (
        <article className="max-w-3xl p-8 bg-white border-4 border-black shadow-neubrutalism">
            <header className="mb-6 border-b-2 border-black pb-4">
                <h1 className="text-3xl font-bold uppercase">{title}</h1>
                {date && <p className="text-sm font-mono mt-2 text-gray-600">Archived: {date}</p>}
            </header>

            <div className="text-lg leading-relaxed space-y-4 font-serif">
                {content.map((paragraph, i) => (
                    <p key={i}>
                        {paragraph}
                    </p>
                ))}
            </div>

        </article>
    )
}

export default DocumentView