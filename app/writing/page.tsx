'use client'

import React from 'react'
import Image from 'next/image'
import { DEFAULT_CHARACTER } from '../consts/SpriteConsts'
import DocumentView from '../components/document/DocumentView'
import { WRITING_CONTENT } from '../consts/ContentPage'

const WritingPage = () => {

  const [activeDocId, setActiveDocId] = React.useState<string | null>(null)

  const documentList = Object.values(WRITING_CONTENT)
  return (
    <div className="min-h-screen bg-[#E8EDF2] p-8 flex gap-8">

      <aside className="w-1/3 flex flex-col gap-6">

        <div className="bg-white border-4 border-black p-4 shadow-neubrutalism">
          <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-2 mb-4">
            Archive Records
          </h2>
          <div className="flex flex-col gap-2">
            {documentList.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setActiveDocId(doc.id)}
                className={`text-left p-2 border-2 border-black transition-colors font-mono text-sm
                  ${activeDocId === doc.id ? 'bg-[#D91616] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {doc.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-auto">
          <Image
            src={DEFAULT_CHARACTER.idle}
            alt={DEFAULT_CHARACTER.characterName}
            unoptimized
            style={{ imageRendering: 'pixelated' }}
            width={200}
            height={200}
          />
        </div>
      </aside>


      <main className="w-2/3">
        {activeDocId ? (
          <DocumentView docId={activeDocId} />
        ) : (
          <div className="h-full flex items-center justify-center border-4 border-black border-dashed opacity-50">
            <p className="font-mono text-lg font-bold">Select a document from the archive to begin reading.</p>
          </div>
        )}
      </main>

    </div>
  )
}

export default WritingPage 