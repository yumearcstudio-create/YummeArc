import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'

const VerifyArtistNotice = () => {
  return (
    <section className="w-full bg-secondaryDark text-headingDark px-4 sm:px-12 xl:px-28 3xl:px-80 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-purpleShadow bg-purple-950/10 backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 text-center">
        <h2 className="font-kaushans text-3xl sm:text-4xl leading-[1.15] font-bold">
          Verify a YumeArc <span className="gradient-text-gold">Artist</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-textDark leading-relaxed max-w-2xl mx-auto">
          Only accounts listed on our official website are verified YumeArc artists and representatives.
        </p>
        <p className="mt-2 text-sm sm:text-base text-textDark leading-relaxed max-w-2xl mx-auto">
          If someone claims to be part of YumeArc but their account is not listed here, please verify them through our official channels before starting a commission, sharing project details, or making a payment.
        </p>

        <div className="mt-7 flex justify-center">
          <Link
            to="/about#verified-artists"
            className="px-8 py-2.5 bg-buttonPrimary text-headingDark font-bold cursor-pointer transition-all duration-300 rounded-md sm:hover:-translate-y-1"
          >
            View Verified Artists
          </Link>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-dimText">
          <a
            href="https://x.com/YumearcStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-headingDark"
          >
            <FaXTwitter size="1em" />
            <span>
              Official X: <span className="text-textDark">@YumearcStudio</span>
            </span>
          </a>
          <a
            href="mailto:studio@yumearc.com"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-headingDark"
          >
            <HiOutlineMail size="1.1em" />
            <span>
              Business Email: <span className="text-textDark">studio@yumearc.com</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default VerifyArtistNotice
