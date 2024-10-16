import React from 'react'

export default function Project() {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#84e591] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/mtest.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        지난 중간고사때 작업한 내용입니다.
      </a>
      <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#e986eb] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/fintest.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        지난 기말고사때 작업한 내용입니다.
      </a>
      <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#dfeb83] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/hcjdemo.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        수업 시간에 한 hcjdemo입니다.
      </a>
      <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#82d2e8] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/test1.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        수업 시간에 한 next.js입니다.
      </a>
    </div>
  )
}
