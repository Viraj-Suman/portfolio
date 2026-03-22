import React, { useEffect, useRef, useState } from 'react'
import { FaJava, FaPython, FaNodeJs, FaCodeBranch, FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaMapMarkerAlt, FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import {
  SiC, SiCplusplus, SiJavascript, SiReact, SiBootstrap,
  SiHtml5, SiCss, SiPhp, SiGit, SiGithub,
  SiMysql, SiMongodb
} from 'react-icons/si'

const SKILL_ICONS = {
  'C': <SiC />, 'C++': <SiCplusplus />, 'Java': <FaJava />, 'Python': <FaPython />, 'JavaScript': <SiJavascript />,
  'React.js': <SiReact />, 'Node.js': <FaNodeJs />, 'Bootstrap': <SiBootstrap />, 'HTML': <SiHtml5 />, 'CSS': <SiCss />,
  'PHP': <SiPhp />, 'Git': <SiGit />, 'GitHub': <SiGithub />, 'VS Code': <VscVscode />, 'MySQL': <SiMysql />,
  'MongoDB': <SiMongodb />, 'DSA': <FaCodeBranch />
}

const SKILL_COLORS = {
  'C':          '#0077c0',
  'C++':        '#00599c',
  'Java':       '#f89820',
  'Python':     '#3572A5',
  'JavaScript': '#f7df1e',
  'React.js':   '#61dafb',
  'Node.js':    '#68a063',
  'Bootstrap':  '#7952b3',
  'HTML':       '#e44d26',
  'CSS':        '#264de4',
  'PHP':        '#787cb5',
  'Git':        '#f05032',
  'GitHub':     '#ffffff',
  'VS Code':    '#007acc',
  'MySQL':      '#00758f',
  'MongoDB':    '#47a248',
  'DSA':        '#fabb77',
}

const DATA = {
  name: 'Viraj Suman',
  email: 'virajsuman20@gmail.com',
  phone: '+91-7808317047',
  github: 'https://github.com/Viraj-Suman',
  linkedin: 'https://www.linkedin.com/in/viraj-suman25',
  tagline: "I am a Full Stack Developer & Problem Solver constructing clean, impactful digital solutions.",
  about: "I am a Computer Science Engineering student with an analytical mindset and a strong foundation in full-stack development and algorithms. I approach every project with a focus on writing clean, robust code and delivering seamless user experiences. I thrive in collaborative environments and continuously adapt to new technologies to build practical solutions that make a tangible difference.",
  
  skills: [
    { cat: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript'], desc: 'Foundational syntax and logic, enabling the structural core of applications.' },
    { cat: 'Frameworks', items: ['React.js', 'Node.js', 'Bootstrap', 'HTML', 'CSS', 'PHP'], desc: 'Modern tools and libraries defining spatial architecture and interaction.' },
    { cat: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'MySQL', 'MongoDB'], desc: 'Deployment, versioning, and atmospheric data management streams.' }
  ],

  projects: [
    { 
      id: '01', title: 'PLAGIARISM DETECTION', date: 'July 2025', stack: ['Python', 'Node.js', 'HTML', 'CSS'], github: 'https://github.com/Viraj-Suman/plagiraism-detection-tool-for-code-submittion',
      desc: 'Automated tool for detecting code similarity across multiple programming languages.',
      features: ['Uses tokenization, AST comparison, and string matching', 'Generates detailed similarity reports']
    },
    { 
      id: '02', title: 'YOGA SE HOGA', date: 'March 2025', stack: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'], link: 'https://yogasehoga.net/',
      desc: 'Wellness platform strictly designed for yoga, meditation, and pilates.',
      features: ['Provides structured content and guided programs', 'Improves user engagement with an intuitive UI']
    },
    { 
      id: '03', title: 'TOUR OPERATOR PLATFORM', date: 'January 2026', stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'MongoDB'], github: 'https://github.com/Viraj-Suman/tour-operator',
      desc: 'Architected a travel booking platform (WanderEase.com) enabling users to browse and reserve curated tour packages across domestic and international destinations.',
      features: [
        'Structured comprehensive travel sections featuring itineraries, adventure experiences, cultural tours, and customized plans.',
        'Optimized interactive "View Details" and booking workflows to improve usability, streamline navigation, and enhance user experience.'
      ]
    },
  ],
  experience: [
    { role: 'Application Development in DSA', org: 'Lovely Professional University', date: 'Training', points: ['Built core data structures to handle complex data manipulation.', 'Optimized sorting & searching algorithms, achieving up to 50% improvement.', 'Applied recursion, dynamic programming, and greedy techniques.'] }
  ],
  achievements: [
    { icon: '⭐', text: 'Achieved 5-Star rating in Java on HackerRank' },
    { icon: '🏆', text: 'Ranked Top 10 in Binary Blitz Hackathon at LPU' }
  ],
  certs: [
    { name: 'Basics of DSA', org: 'LPU', date: 'Jul 2025', link: 'https://drive.google.com/file/d/1vk7XiYgBWyCJN6F97hwe8kCb83DPaJ_H/view', image: '/certificates/dsa.png' },
    { name: 'Internet of Things (IoT)', org: 'NPTEL', date: 'Apr 2025', link: 'https://drive.google.com/file/d/1m4YuYuTY4V7gxQyiLk-7yJ50pfkQz2W-/view', image: '/certificates/iot.png' },
    { name: '72-Hour DSA Bootcamp', org: 'IamNeo', date: 'Dec 2024', link: 'https://drive.google.com/file/d/1_7MF0_gR1hmPJNZwvUDEytKbGAAXiBn_/view', image: '/certificates/bootcamp.png' }
  ],
  education: [
    { degree: 'B.Tech in Computer Science and Engineering', inst: 'Lovely Professional University', score: '2023 – Present | CGPA: 6.8', period: 'Ongoing' },
    { degree: 'Intermediate', inst: 'Pre-University', score: '63%', period: 'Completed' },
    { degree: 'Matriculation', inst: 'High School', score: '86%', period: 'Completed' }
  ]
}

function CustomCursor() {
  const dot = useRef(null)
  
  useEffect(() => {
    // Hide cursor on touch devices
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div ref={dot} className="custom-cursor" style={{
      position: 'fixed', width: 20, height: 20,
      background: 'var(--accent)', borderRadius: '50%',
      transform: 'translate(-50%,-50%)', pointerEvents: 'none',
      zIndex: 9999, mixBlendMode: 'difference',
      transition: 'transform 0.15s ease-out'
    }} />
  )
}

function SectionHeading({ title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 'clamp(40px, 6vw, 80px)' }}>
      <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, whiteSpace: 'nowrap' }}>
        {title}
      </h2>
      <div style={{ height: 1, flex: 1, background: 'var(--border-strong)' }} />
    </div>
  )
}

const tilt3D = {
  onMouseMove(e) {
    // Disable tilt on touch devices
    if (window.matchMedia('(hover: none)').matches) return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateZ(16px) scale(1.02)`
    el.style.boxShadow = [
      '0 30px 70px rgba(0,0,0,0.5)',
      '0 0 30px rgba(250,187,119,0.3)',
      '0 0 60px rgba(250,187,119,0.15)',
      '0 0 100px rgba(250,187,119,0.08)'
    ].join(', ')
    el.style.borderColor = 'rgba(250,187,119,0.6)'
    el.style.zIndex = '2'
  },
  onMouseLeave(e) {
    const el = e.currentTarget
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)'
    el.style.boxShadow = ''
    el.style.borderColor = ''
    el.style.zIndex = ''
  }
}

function Nav({ theme, toggleTheme }) {
  const links = ['Toolkit', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact']
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change / scroll
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close)
    return () => window.removeEventListener('scroll', close)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px clamp(16px, 5vw, 60px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      backdropFilter: 'blur(20px)', background: menuOpen ? 'var(--bg)' : 'transparent',
      transition: 'background 0.3s'
    }}>
      <div style={{ fontWeight: 900, letterSpacing: '-0.04em', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', textTransform: 'uppercase', cursor: 'pointer' }} onClick={() => { window.scrollTo(0, 0); setMenuOpen(false) }}>
        Viraj Suman
      </div>

      {/* Desktop links */}
      <div className="nav-desktop" style={{ display: 'flex', gap: 'clamp(12px, 2.5vw, 32px)', alignItems: 'center' }}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase',
            letterSpacing: '0.1em', transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
          >
            {link}
          </a>
        ))}
        <button onClick={toggleTheme} style={{
          background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.2rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0
        }}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile right side */}
      <div className="nav-mobile" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={toggleTheme} style={{
          background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.1rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', padding: 0
        }}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => setMenuOpen(o => !o)} style={{
          background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.3rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', padding: 0
        }}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--bg)', borderBottom: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', padding: '12px 0',
          backdropFilter: 'blur(20px)'
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase',
                letterSpacing: '0.1em', padding: '14px clamp(16px, 5vw, 60px)',
                borderBottom: '1px solid var(--border)', color: 'var(--text)',
                transition: 'color 0.2s, background 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--surface)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'transparent' }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function FloatingShapes({ theme }) {
  const isDark = theme === 'dark'

  const glowShadow = (color, size = 40) =>
    `0 0 ${size}px ${color}, 0 0 ${size * 2}px ${color}55, 0 0 ${size * 4}px ${color}22`

  const cubeShadow = (color) =>
    `inset -8px -8px 16px rgba(0,0,0,0.6), inset 6px 6px 14px rgba(255,255,255,0.15), 0 20px 50px ${color}66, ${glowShadow(color, 20)}`

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2, pointerEvents: 'none', overflow: 'hidden', perspective: '1200px' }}>
      <style>{`
        @keyframes spin3d-cw {
          0%   { transform: perspective(900px) rotateX(0deg)   rotateY(0deg)   rotateZ(0deg)   translateY(0px); }
          50%  { transform: perspective(900px) rotateX(200deg) rotateY(100deg) rotateZ(180deg) translateY(-35px); }
          100% { transform: perspective(900px) rotateX(360deg) rotateY(360deg) rotateZ(360deg) translateY(0px); }
        }
        @keyframes spin3d-ccw {
          0%   { transform: perspective(900px) rotateX(360deg) rotateY(0deg)   rotateZ(360deg) translateY(0px); }
          50%  { transform: perspective(900px) rotateX(180deg) rotateY(200deg) rotateZ(90deg)  translateY(40px); }
          100% { transform: perspective(900px) rotateX(0deg)   rotateY(360deg) rotateZ(0deg)   translateY(0px); }
        }
        @keyframes orbit-x {
          0%   { transform: perspective(600px) rotateX(0deg) scale(1); }
          100% { transform: perspective(600px) rotateX(360deg) scale(1); }
        }
        @keyframes orbit-y {
          0%   { transform: perspective(600px) rotateY(0deg); }
          100% { transform: perspective(600px) rotateY(360deg); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-28px) rotate(8deg); }
        }
        @keyframes floatY2 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(22px) rotate(-6deg); }
        }
        @keyframes pulse-glow {
          0%,100% { opacity: 0.18; transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(1.12); }
        }
        @keyframes pulse-glow2 {
          0%,100% { opacity: 0.22; transform: scale(1.08); }
          50%      { opacity: 0.10; transform: scale(0.92); }
        }
        @keyframes drift {
          0%   { transform: translate(0,0) rotate(0deg); }
          25%  { transform: translate(30px,-20px) rotate(90deg); }
          50%  { transform: translate(0,-40px) rotate(180deg); }
          75%  { transform: translate(-30px,-20px) rotate(270deg); }
          100% { transform: translate(0,0) rotate(360deg); }
        }
        @keyframes robot-hi {
          0%, 100%   { transform: rotate(0deg); }
          10%, 30%, 50% { transform: rotate(-12deg); }
          20%, 40%, 60% { transform: rotate(8deg); }
          70%        { transform: rotate(0deg); }
        }
      `}</style>

      {/* ── LAYER 1: Large ambient glowing orbs (back depth) ── */}
      <div style={{
        position:'absolute', top:'5%', left:'-5%',
        width:320, height:320, borderRadius:'50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(97,218,251,0.18) 0%, rgba(97,218,251,0.04) 60%, transparent 100%)'
          : 'radial-gradient(circle, rgba(97,218,251,0.12) 0%, transparent 70%)',
        animation: 'pulse-glow 8s ease-in-out infinite',
        filter: 'blur(2px)',
      }} />
      <div style={{
        position:'absolute', top:'55%', right:'-8%',
        width:400, height:400, borderRadius:'50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(104,160,99,0.18) 0%, rgba(104,160,99,0.04) 60%, transparent 100%)'
          : 'radial-gradient(circle, rgba(104,160,99,0.12) 0%, transparent 70%)',
        animation: 'pulse-glow2 10s ease-in-out infinite',
        filter: 'blur(2px)',
      }} />
      <div style={{
        position:'absolute', bottom:'5%', left:'30%',
        width:280, height:280, borderRadius:'50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(250,187,119,0.15) 0%, rgba(250,187,119,0.03) 60%, transparent 100%)'
          : 'radial-gradient(circle, rgba(217,130,43,0.12) 0%, transparent 70%)',
        animation: 'pulse-glow 12s ease-in-out infinite 3s',
        filter: 'blur(2px)',
      }} />
      <div style={{
        position:'absolute', top:'30%', right:'5%',
        width:250, height:250, borderRadius:'50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(121,82,179,0.2) 0%, rgba(121,82,179,0.04) 60%, transparent 100%)'
          : 'radial-gradient(circle, rgba(121,82,179,0.1) 0%, transparent 70%)',
        animation: 'pulse-glow2 9s ease-in-out infinite 1.5s',
        filter: 'blur(2px)',
      }} />

      {/* ── LAYER 2: Floating Skill Icons ── */}
      {[
        { name: 'React.js', top: '10%', left: '10%', size: 55, anime: 'spin3d-cw 20s linear infinite' },
        { name: 'Python', top: '25%', right: '15%', size: 45, anime: 'spin3d-ccw 25s linear infinite' },
        { name: 'JavaScript', top: '45%', left: '8%', size: 50, anime: 'spin3d-cw 18s linear infinite 2s' },
        { name: 'Java', top: '65%', right: '12%', size: 48, anime: 'spin3d-ccw 22s linear infinite 1s' },
        { name: 'Node.js', bottom: '15%', left: '15%', size: 52, anime: 'spin3d-cw 30s linear infinite 3s' },
        { name: 'MongoDB', bottom: '25%', right: '8%', size: 45, anime: 'spin3d-ccw 15s linear infinite 5s' },
        { name: 'MySQL', top: '5%', right: '35%', size: 40, anime: 'floatY 12s ease-in-out infinite' },
        { name: 'Git', bottom: '10%', left: '45%', size: 42, anime: 'floatY2 10s ease-in-out infinite' },
        { name: 'HTML', top: '35%', right: '40%', size: 38, anime: 'spin3d-cw 24s linear infinite 4s' },
        { name: 'CSS', bottom: '40%', left: '30%', size: 40, anime: 'spin3d-ccw 28s linear infinite 2s' },
        { name: 'C++', top: '55%', left: '25%', size: 35, anime: 'floatY 15s ease-in-out infinite' },
        { name: 'PHP', bottom: '50%', right: '25%', size: 42, anime: 'floatY2 18s ease-in-out infinite' },
        { name: 'VS Code', top: '75%', left: '40%', size: 40, anime: 'spin3d-cw 22s linear infinite 6s' },
        { name: 'Bootstrap', top: '15%', right: '45%', size: 35, anime: 'floatY 14s ease-in-out infinite' },
      ].map((s, i) => {
        const color = SKILL_COLORS[s.name] || 'var(--accent)'
        return (
          <div key={i} style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            fontSize: s.size,
            color: color,
            opacity: isDark ? 0.45 : 0.25,
            filter: `drop-shadow(0 0 20px ${color}88)`,
            animation: s.anime,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: -1
          }}>
            {SKILL_ICONS[s.name]}
          </div>
        )
      })}
    </div>
  )
}

// ─── Scroll Reveal ────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility every time it crosses the threshold
        setVisible(entry.isIntersecting)
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Reveal({ children, dir = 'up', delay = 0, style = {}, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()
  const transforms = { up: 'translateY(40px)', down: 'translateY(-40px)', left: 'translateX(-40px)', right: 'translateX(40px)', scale: 'scale(0.92)' }
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : (transforms[dir] || transforms.up),
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...style
      }}
    >
      {children}
    </Tag>
  )
}
// ─── End Scroll Reveal ────────────────────────────────────────────

function App() {
  const [theme, setTheme] = useState('dark')
  const [formStatus, setFormStatus] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <>
      <CustomCursor />
      <FloatingShapes theme={theme} />
      {formStatus === 'sent' && (
        <div style={{
          position: 'fixed', bottom: 'clamp(16px, 4vw, 40px)', right: 'clamp(16px, 4vw, 40px)',
          background: 'var(--accent)', color: 'var(--bg)',
          padding: 'clamp(14px, 3vw, 20px) clamp(20px, 5vw, 40px)', borderRadius: 8, zIndex: 1000,
          fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)', animation: 'float 3s ease-in-out infinite',
          maxWidth: 'calc(100vw - 32px)'
        }} onClick={() => setFormStatus(null)}>
          TRANSMISSION SUCCESSFUL
        </div>
      )}
      {formStatus === 'error' && (
        <div style={{
          position: 'fixed', bottom: 'clamp(16px, 4vw, 40px)', right: 'clamp(16px, 4vw, 40px)',
          background: '#ff4444', color: '#fff',
          padding: 'clamp(14px, 3vw, 20px) clamp(20px, 5vw, 40px)', borderRadius: 8, zIndex: 1000,
          fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          maxWidth: 'calc(100vw - 32px)'
        }} onClick={() => setFormStatus(null)}>
          TRANSMISSION FAILED
        </div>
      )}
      <Nav theme={theme} toggleTheme={toggleTheme} />

      {/* Main Container */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 60px)' }}>

        {/* HERO SECTION */}
        <section id="biography" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', paddingTop: 80 }}>
          
          <Reveal dir="scale" delay={400} style={{
            position: 'absolute', top: '15%', right: '5%', zIndex: 5, pointerEvents: 'auto'
          }}>
            <div className="hero-avatar" style={{
               width: 'clamp(180px, 25vw, 320px)', height: 'clamp(180px, 25vw, 320px)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               /* Robot is now stationary but still blinks/greets on hover */
               position: 'relative',
               cursor: 'pointer',
               pointerEvents: 'auto',
               filter: theme === 'dark' 
                 ? 'drop-shadow(0 0 30px rgba(250,187,119,0.3))' 
                 : 'drop-shadow(0 0 30px rgba(217,130,43,0.15))'
            }}>
              {/* Digital Eyes: perfectly aligned with the robot's face */}
              <div style={{
                position: 'absolute', top: '21.2%', left: '46%', width: 8, height: 8,
                background: '#61dafb', borderRadius: '50%',
                boxShadow: '0 0 10px #61dafb, 0 0 20px #61dafb',
                animation: 'robot-blink 4s linear infinite',
                zIndex: 2
              }} />
              <div style={{
                position: 'absolute', top: '20.8%', left: '54.5%', width: 8, height: 8,
                background: '#61dafb', borderRadius: '50%',
                boxShadow: '0 0 10px #61dafb, 0 0 20px #61dafb',
                animation: 'robot-blink 4s linear infinite',
                zIndex: 2
              }} />

              {/* Animated speech bubble that appears on hover */}
              <div className="speech-bubble" style={{
                position: 'absolute', top: '-15%', left: '-15%',
                background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                backdropFilter: 'blur(12px)',
                padding: 'clamp(12px, 2vw, 20px) clamp(16px, 3vw, 28px)',
                borderRadius: '24px 24px 24px 4px',
                border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500,
                opacity: 0, transform: 'scale(0.8) translateY(10px)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                pointerEvents: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap',
                zIndex: 10
              }}>
                👋 Hello! I'm Viraj's AI Assistant.
              </div>
              <style>{`
                .hero-avatar:hover .speech-bubble {
                  opacity: 1 !important;
                  transform: scale(1) translateY(0) !important;
                }
                @keyframes robot-blink {
                  0%, 94%, 100% { transform: scaleY(1); }
                  97%           { transform: scaleY(0.1); }
                }
              `}</style>
              
              <img 
                src="/robot_transparent.png" 
                alt="Friendly Waving Robot" 
                style={{ 
                  width: '100%', height: '100%', objectFit: 'contain',
                  mixBlendMode: theme === 'dark' ? 'screen' : 'normal',
                  position: 'relative', zIndex: 1
                }}
              />
            </div>
          </Reveal>

          <div style={{ maxWidth: 680, zIndex: 1, marginTop: '6vh' }}>
            <Reveal dir="up" delay={0}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24, color: 'var(--text-muted)' }}>
                Biography
              </div>
            </Reveal>
            <Reveal dir="up" delay={100}>
              <h1 style={{
                fontSize: 'clamp(2.4rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 0.9,
                letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: 'clamp(24px, 4vw, 40px)'
              }}>
                BUILDING <br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text)' }}>DIGITAL</span> VOIDS.
              </h1>
            </Reveal>
            <Reveal dir="up" delay={220}>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', lineHeight: 1.6,
                color: 'var(--accent)', fontWeight: 600, maxWidth: 500, marginBottom: 16
              }}>
                {DATA.tagline}
              </p>
            </Reveal>
            <Reveal dir="up" delay={320}>
              <p style={{
                fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)', lineHeight: 1.7,
                color: 'var(--text-muted)', fontWeight: 300, maxWidth: 550, marginBottom: 'clamp(28px, 4vw, 40px)'
              }}>
                {DATA.about}
              </p>
            </Reveal>
            <Reveal dir="up" delay={420}>
              <a href="/cv/Viraj_Suman_CV.pdf" download style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 5vw, 32px)',
                background: 'var(--accent)', color: 'var(--bg)',
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 30,
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(217,130,43,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                Download CV <span style={{ fontSize: '1.1rem' }}>↓</span>
              </a>
            </Reveal>
          </div>
        </section>


        {/* THE TOOLKIT */}
        <section id="toolkit" style={{ padding: 'clamp(60px, 10vw, 100px) 0' }}>
          <Reveal dir="left">
            <SectionHeading title="The Toolkit" />
          </Reveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
            {DATA.skills.map((skill, i) => {
              const bgIcon = SKILL_ICONS[skill.items[0]]
              const bgIconColor = SKILL_COLORS[skill.items[0]] || 'var(--accent)'
              
              return (
                <Reveal key={i} dir="up" delay={i * 120}>
                  <div {...tilt3D} style={{
                    background: 'var(--surface)', padding: 'clamp(24px, 4vw, 40px)', borderRadius: 16,
                    border: '1px solid var(--border)', transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
                    height: '100%', position: 'relative', overflow: 'hidden'
                  }}>
                    {/* Background faint logo */}
                    <div style={{
                      position: 'absolute', right: '-10%', bottom: '-10%',
                      fontSize: '8rem', color: bgIconColor, opacity: 0.05,
                      transform: 'rotate(-15deg)', pointerEvents: 'none', zIndex: 0
                    }}>
                      {bgIcon}
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ color: bgIconColor, fontSize: '1.4rem', marginBottom: 24, filter: `drop-shadow(0 0 8px ${bgIconColor}66)` }}>
                        {bgIcon}
                      </div>
                      <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 700, marginBottom: 12 }}>{skill.cat}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.82rem, 1.5vw, 0.9rem)', lineHeight: 1.6, marginBottom: 32 }}>
                        {skill.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {skill.items.map(item => {
                          const iconColor = SKILL_COLORS[item] || 'var(--accent)'
                          return (
                            <span key={item} style={{
                              display: 'inline-flex', alignItems: 'center', gap: 7,
                              background: 'var(--surface-hover)',
                              border: `1px solid ${iconColor}44`,
                              padding: '7px 14px', borderRadius: 20, fontSize: '0.78rem', fontFamily: 'var(--font-mono)',
                              transition: 'box-shadow 0.25s, border-color 0.25s',
                              boxShadow: `0 0 0 0 ${iconColor}00`,
                            }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 12px ${iconColor}55`; e.currentTarget.style.borderColor = `${iconColor}99` }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = `${iconColor}44` }}
                            >
                              {SKILL_ICONS[item] && (
                                <span style={{
                                  color: iconColor,
                                  fontSize: '1.1rem',
                                  display: 'flex', alignItems: 'center',
                                  filter: `drop-shadow(0 0 4px ${iconColor}88)`,
                                }}>
                                  {SKILL_ICONS[item]}
                                </span>
                              )}
                              {item}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>


        {/* PROJECTS */}
        <section id="projects" style={{ padding: 'clamp(60px, 10vw, 100px) 0' }}>
          <Reveal dir="left">
            <SectionHeading title="Projects" />
          </Reveal>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {DATA.projects.map((p, i) => (
              <Reveal key={i} dir="up" delay={i * 80}>
              <a href={p.link || p.github} target="_blank" rel="noreferrer" className="project-row" style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'start',
                gap: 'clamp(16px, 3vw, 32px)',
                padding: 'clamp(24px, 4vw, 40px) 0',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.3s',
                color: 'var(--text)'
              }}
              onMouseEnter={e => e.currentTarget.querySelector('.proj-title').style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.querySelector('.proj-title').style.color = 'var(--text)'}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-subtle)', paddingTop: 6 }}>
                  {p.id}
                </div>
                <div>
                  {/* Title + date row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                    <h3 className="proj-title" style={{
                      fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', fontWeight: 900,
                      textTransform: 'uppercase', letterSpacing: '-0.02em', transition: 'color 0.3s',
                    }}>
                      {p.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                        {p.date}
                      </span>
                      <div style={{ display: 'flex', gap: 12 }}>
                        {p.github && <FaGithub style={{ fontSize: '1.2rem', cursor: 'pointer', transition: 'color 0.3s', color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'} onClick={(e) => { if (p.link) { e.preventDefault(); window.open(p.github, '_blank'); } }} title="GitHub Repo" />}
                        {p.link && <FaExternalLinkAlt style={{ fontSize: '1.1rem', cursor: 'pointer', transition: 'color 0.3s', color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'} title="Live Preview" />}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16
                  }}>
                    {p.stack.map(tech => {
                      const techColor = SKILL_COLORS[tech] || 'var(--accent)'
                      return (
                        <div key={tech} style={{
                          display: 'flex', alignItems: 'center', gap: 6,
                          background: 'var(--surface-hover)', border: `1px solid ${techColor}33`,
                          padding: '4px 10px', borderRadius: 4, 
                          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                          color: techColor, whiteSpace: 'nowrap'
                        }}>
                          {SKILL_ICONS[tech] && <span style={{ fontSize: '0.9rem' }}>{SKILL_ICONS[tech]}</span>}
                          {tech}
                        </div>
                      )
                    })}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.6, marginBottom: 12 }}>
                    {p.desc}
                  </p>
                  <ul style={{ paddingLeft: 16, color: 'var(--text-muted)', fontSize: 'clamp(0.8rem, 1.3vw, 0.85rem)', lineHeight: 1.6 }}>
                    {p.features && p.features.map((f, j) => <li key={j} style={{ marginBottom: 4 }}>{f}</li>)}
                  </ul>
                </div>
              </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding: 'clamp(60px, 10vw, 100px) 0' }}>
          <Reveal dir="left">
            <SectionHeading title="Experience & Training" />
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
            {DATA.experience.map((exp, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>{exp.role}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: 16 }}>
                  {exp.org} — {exp.date}
                </div>
                <ul style={{ paddingLeft: 16, color: 'var(--text-muted)', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.7 }}>
                  {exp.points.map((pt, j) => <li key={j} style={{ marginBottom: 10 }}>{pt}</li>)}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <section id="education" style={{ padding: 'clamp(60px, 10vw, 100px) 0' }}>
          <Reveal dir="left">
            <SectionHeading title="Education & Achievements" />
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(32px, 5vw, 40px)' }}>
            <Reveal dir="left" delay={0}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Education</h3>
                {DATA.education.map((ed, i) => (
                  <div key={i} style={{ marginBottom: 32, paddingLeft: 20, borderLeft: '2px solid var(--border)' }}>
                    <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', fontWeight: 600, marginBottom: 6 }}>{ed.degree}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ed.inst} <br/> {ed.score}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal dir="right" delay={120}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Achievements</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {DATA.achievements.map((a, i) => (
                    <Reveal key={i} dir="up" delay={i * 100}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, color: 'var(--text)' }}>
                        <span style={{ fontSize: '1.4rem' }}>{a.icon}</span>
                        <span style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.5, color: 'var(--text-muted)' }}>{a.text}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" style={{ padding: 'clamp(60px, 10vw, 100px) 0' }}>
          <Reveal dir="left">
            <SectionHeading title="Certifications" />
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(12px, 2vw, 20px)' }}>
            {DATA.certs.map((cert, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
              <a href={cert.link} target="_blank" rel="noreferrer" {...tilt3D} style={{
                display: 'flex', alignItems: 'center', gap: 20,
                padding: 'clamp(16px, 3vw, 24px)', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 16, transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.3s'
              }}
              onMouseEnter={e => { tilt3D.onMouseMove(e); e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { tilt3D.onMouseLeave(e); e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                {/* Certificate Thumbnail Tile */}
                <div style={{
                  width: 70, height: 50, borderRadius: 6, background: 'var(--bg)',
                  border: '1px solid var(--border-strong)', flexShrink: 0,
                  backgroundImage: cert.image ? `url(${cert.image})` : 'none', 
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
                }}>
                  {!cert.image && <span style={{ fontSize: '0.65rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>PIC</span>}
                </div>
                
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, gap: 8 }}>
                    <div style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis' }}>{cert.name}</div>
                    <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', flexShrink: 0 }}>
                      {cert.date} ↗
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{cert.org}</div>
                </div>
              </a>
              </Reveal>
            ))}
          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(80px, 12vw, 160px)' }}>
          <Reveal dir="up" delay={0}>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1,
              letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: 24
            }}>
              INITIATE <br/> CONTACT.
            </h2>
          </Reveal>
          <Reveal dir="up" delay={120}>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', marginBottom: 'clamp(32px, 6vw, 60px)', maxWidth: 400, lineHeight: 1.6 }}>
              Currently accepting premium collaborations for web architecture and dimensional UX projects. Reach out to start a dialogue.
            </p>
          </Reveal>

          <Reveal dir="left" delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 'clamp(32px, 6vw, 60px)' }}>
              <a href={`mailto:${DATA.email}`} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <FaEnvelope style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', wordBreak: 'break-all' }}>{DATA.email}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <FaMapMarkerAlt style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}>Phagwara, Punjab, India</span>
              </div>
            </div>
          </Reveal>

          <Reveal dir="up" delay={300}>
          <div {...tilt3D} style={{
            background: 'var(--surface)', padding: 'clamp(24px, 5vw, 40px)', borderRadius: 16,
            border: '1px solid var(--border)', width: '100%', maxWidth: 500,
            transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out'
          }}>
            <form onSubmit={async (e) => {
              e.preventDefault()
              setFormStatus('sending')
              try {
                const res = await fetch(`https://formsubmit.co/ajax/${DATA.email}`, {
                  method: 'POST',
                  body: new FormData(e.target)
                })
                if (res.ok) {
                  setFormStatus('sent')
                  e.target.reset()
                  setTimeout(() => setFormStatus(null), 5000)
                } else setFormStatus('error')
              } catch (err) { setFormStatus('error') }
            }}>
              <input type="hidden" name="_subject" value="New message from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              {[
                { label: 'NAME', name: 'NAME', ph: 'John Doe', type: 'text' },
                { label: 'EMAIL', name: 'EMAIL', ph: 'john.doe@example.com', type: 'email' },
                { label: 'MESSAGE', name: 'MESSAGE', ph: 'Tell me about your vision...', isArea: true }
              ].map((f, i) => (
                <div key={i} style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', marginBottom: 8, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {f.label}
                  </label>
                  {f.isArea ? (
                    <textarea name={f.name} required placeholder={f.ph} style={{
                      width: '100%', padding: '16px', background: 'var(--bg)', border: '1px solid var(--border)',
                      borderRadius: 8, color: 'var(--text)', outline: 'none', resize: 'vertical', minHeight: 120,
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', boxSizing: 'border-box'
                    }} />
                  ) : (
                    <input type={f.type} name={f.name} required placeholder={f.ph} style={{
                      width: '100%', padding: '16px', background: 'var(--bg)', border: '1px solid var(--border)',
                      borderRadius: 8, color: 'var(--text)', outline: 'none',
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', boxSizing: 'border-box'
                    }} />
                  )}
                </div>
              ))}
              <button type="submit" disabled={formStatus === 'sending'} style={{
                width: '100%', padding: 'clamp(12px, 2.5vw, 16px)', background: formStatus === 'sending' ? 'var(--text-muted)' : 'var(--text)', color: 'var(--bg)',
                border: 'none', borderRadius: 30, fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer'
              }}>
                {formStatus === 'sending' ? 'SENDING...' : 'Send Transmission'}
              </button>
            </form>
          </div>
          </Reveal>
        </section>

      </main>
    </>
  )
}

export default App
