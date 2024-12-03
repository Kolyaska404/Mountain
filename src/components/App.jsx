import { useState } from 'react'
import { Header } from '/src/components/header.jsx'
import { Main } from './Main'
import '/src/app.css'
import '/src/reset.css'

export function App() {
  return (
    <>
      <div className='w-full flex flex-col min-h-full'>
        <section className='mx-auto relative max-w-[2248px] px-[164px] header-bg'>
          <Header/>
        </section>
        <Main />
      </div>
    </>
  )
}