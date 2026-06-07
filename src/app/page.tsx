import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 scroll-smooth">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 dark:from-slate-900 dark:via-indigo-900/30 dark:to-slate-900">
          <div className="text-center max-w-5xl mx-auto px-6">
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
              BHAVESH LABANA
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-12 leading-relaxed">
  Cybersecurity Researcher | VAPT Enthusiast | Architecture & Network Security <br/>
  <span className="text-indigo-600 dark:text-indigo-400 font-bold">
    Bachelor's Completed | M.Sc. IT (Architecture & Network Security) | Gujarat University
  </span>
</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#projects" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:scale-105 transition">
                View Projects
              </Link>

              <a href="/resume.pdf" download className="font-bold py-4 px-10 rounded-2xl border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition shadow-lg">
                📄 Download Resume
              </a>
            </div>
          </div>
        </section>


       {/* ================= ABOUT ================= */}
<section
  id="about"
  className="scroll-mt-24 py-28 px-6 bg-white dark:bg-slate-900"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-indigo-600">
        About Me
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
        I am a Cybersecurity enthusiast with a strong interest in
        Vulnerability Assessment and Penetration Testing (VAPT),
        Network Security, and Security Research. I have successfully
        completed my Bachelor's degree and am currently pursuing
        M.Sc. IT in Architecture & Network Security from Gujarat University.
      </p>

      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
        During my academic journey, I completed a 3-month Cybersecurity
        Internship where I gained hands-on experience in vulnerability
        assessment, security testing, reconnaissance, network analysis,
        and security reporting.
      </p>

      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
        My primary area of interest is VAPT, where I enjoy identifying
        security weaknesses in web applications, APIs, and network
        infrastructures before attackers can exploit them. I continuously
        improve my skills through hands-on labs, OSINT investigations,
        penetration testing projects, and cybersecurity research.
      </p>

      <h3 className="text-2xl font-bold mb-5">
        VAPT Tools & Technologies
      </h3>

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          "Nmap",
          "Burp Suite",
          "OWASP ZAP",
          "Metasploit",
          "Wireshark",
          "Nikto",
          "Hydra",
          "SQLmap",
          "Gobuster",
          "Netcat",
          "Kali Linux",
          "Splunk",
          "Nessus",
          "OpenVAS",
          "Amass",
          "Subfinder",
          "Dirsearch",
          "John The Ripper",
          "Hashcat",
          "BloodHound",
        ].map((tool) => (
          <span
            key={tool}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-semibold"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Internship */}
      <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 mb-6">
        <h3 className="text-xl font-bold mb-3 text-indigo-600">
          Internship Experience
        </h3>

        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
          <li>Vulnerability Assessment & Penetration Testing (VAPT)</li>
          <li>Web Application Security Testing</li>
          <li>OSINT & Reconnaissance</li>
          <li>Network Security Monitoring</li>
          <li>Security Reporting & Documentation</li>
        </ul>
      </div>

      {/* Education */}
      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-3 text-indigo-600">
          Education
        </h3>

        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-bold">
              M.Sc. IT (Architecture & Network Security)
            </h4>
            <p>Gujarat University</p>
            <p className="text-sm text-slate-500">
              Currently Pursuing
            </p>
          </div>

          <div>
            <h4 className="font-bold">
              Bachelor's Degree
            </h4>
            <p className="text-sm text-slate-500">
              Completed (Degree Award Pending)
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE PROFILE */}
    <div className="flex justify-center lg:justify-end">
      <div className="text-center sticky top-28">

        <img
          src="/profile.jpeg"
          alt="Bhavesh Labana"
          className="w-96 h-[520px] object-cover rounded-3xl border-4 border-indigo-500 shadow-2xl"
        />

        <h3 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          Bhavesh Labana
        </h3>

        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
          Cybersecurity Researcher
        </p>

        <p className="text-slate-500 mt-2">
          VAPT • Network Security • OSINT
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            VAPT
          </span>

          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
            OSINT
          </span>

          <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
            Network Security
          </span>
        </div>

      </div>
    </div>

  </div>
</section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="scroll-mt-24 py-28 px-6 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-4xl font-bold text-center text-indigo-600 mb-16">
              My Security Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {/* PROJECT 1 - OSINT EXTENSION */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
                <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-white text-xl font-bold">
                  <img 
                    src="/osint.png" 
                    alt="OSINT Investigator Extension"
                    className="h-56 w-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  OSINT Investigator Extension
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  A browser extension designed for Open Source Intelligence (OSINT) investigations. 
                  It gathers publicly available metadata, domain information, social links, 
                  and footprint analysis to assist cybersecurity investigations.
                </p>

                <ul className="text-sm text-slate-500 dark:text-slate-400 mb-6 list-disc list-inside">
                  <li>Domain & WHOIS lookup</li>
                  <li>Metadata extraction</li>
                  <li>Social footprint mapping</li>
                  <li>Reconnaissance automation</li>
                </ul>

                <a href="https://github.com/bhavesh-hacker/osint-investigator.git" target="_blank" rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold">
                  View on GitHub →
                </a>
              </div>


              {/* PROJECT 2 - SECURE CHAT */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
                <div className="h-48 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl mb-6 flex items-center justify-center text-white text-xl font-bold">
                  <img 
                    src="/secure.png" 
                    alt="Secure Chat E2EE"
                    className="h-56 w-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Secure Chat Application (E2EE)
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  A real-time secure messaging platform implementing End-to-End Encryption (E2EE) 
                  ensuring that only communicating users can read messages. 
                  Designed with privacy-first architecture and cryptographic security.
                </p>

                <ul className="text-sm text-slate-500 dark:text-slate-400 mb-6 list-disc list-inside">
                  <li>AES/RSA encryption implementation</li>
                  <li>Secure key exchange mechanism</li>
                  <li>Encrypted message storage</li>
                  <li>Authentication & session security</li>
                </ul>

                <a href="https://github.com/bhavesh-hacker/SecureChat-E2EE.git" target="_blank" rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold">
                  View on GitHub →
                </a>
              </div>


              {/* PROJECT 3 - VAPT LAB */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
                <div className="h-48 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl mb-6 flex items-center justify-center text-white text-xl font-bold">
                  <img 
                    src="/cybersecurity.jpg" 
                    alt="Cybersecurity VAPT Lab"
                    className="h-56 w-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Network Penetration Testing Lab
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Simulated enterprise network environment for conducting internal 
                  and external penetration testing using Kali Linux, Nmap, 
                  Metasploit and Wireshark.
                </p>

                <ul className="text-sm text-slate-500 dark:text-slate-400 mb-6 list-disc list-inside">
                  <li>Port scanning & service enumeration</li>
                  <li>Exploit development testing</li>
                  <li>Privilege escalation lab</li>
                  <li>Traffic analysis & packet inspection</li>
                </ul>

                <a href="https://github.com/YOURUSERNAME/vapt-lab" target="_blank" rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold">
                  View on GitHub →
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* ================= CONTACT ================= */}
        <section id="contact" className="scroll-mt-24 py-28 px-6 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold text-indigo-600 mb-12">
              Contact Me
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
              Interested in VAPT services, security audits, or collaboration? Let’s connect.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <a href="mailto:bhaveshlabana815@gmail.com" className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
                📧 Email
              </a>

              <a href="https://www.linkedin.com/in/bhavesh-cybersecurity/" target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
                💼 LinkedIn
              </a>

              <a href="https://github.com/bhavesh-hacker" target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
                🖥 GitHub
              </a>

            </div>

          </div>
        </section>

      </main>
    </>
  )
}