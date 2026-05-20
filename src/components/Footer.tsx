
const Footer = () => {

  const company = ["About Us", "Sustainability", "Terms of Service", "Privacy Policy"];
  const support = ["Help Center", "Shipping & Returns", "Track Order", "Contact Us"];
  const bottomLinks = ["Privacy Policy", "Terms of Service", "Shipping & Returns", "Sustainability"];
 
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
 
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
 
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-black tracking-tight text-black">Semcart</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-50">
              Visionary essentials for a modern world. Crafting the tools for future generations.
            </p>
 
            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-1">
              {/* Globe */}
              <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                </svg>
              </button>
 
              {/* Share */}
              <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
 
              {/* Email */}
              <button className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </button>
            </div>
          </div>
 

 
          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest text-black uppercase">Company</h3>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest text-black uppercase">Support</h3>
            <ul className="flex flex-col gap-3">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
        </div>
      </div>
 
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © 2024 EMERGENT Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-gray-400 hover:text-black transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
 
    </footer>
  )
}

export default Footer