import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import DesignProcess from './components/DesignProcess';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import CaseStudyPage from './components/CaseStudyPage';
import contentData from './data/content';

export type Theme = 'light' | 'dark';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  year: string;
  color: string;
}

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentPage, setCurrentPage] = useState<'home' | string>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleCaseStudyClick = (id: string) => {
    setSelectedCaseStudy(id);
    setCurrentPage('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedCaseStudy(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setCurrentCaseStudyId = (id: string) => {
    setSelectedCaseStudy(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
		<div
			className={`min-h-screen transition-colors duration-700 ease-out ${
				theme === "dark"
					? "bg-neutral-950 text-neutral-50"
					: "bg-neutral-50 text-neutral-950"
			}`}
		>
			<Navigation
				theme={theme}
				toggleTheme={toggleTheme}
				currentPage={currentPage}
				onBackToHome={handleBackToHome}
			/>

			<AnimatePresence mode="wait">
				{currentPage === "home" ? (
					<motion.div
						key="home"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, scale: 0.98 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.5,
							ease: [0.25, 0.1, 0.25, 1],
						}}
					>
						<div className="h-6"></div>
						<Hero
							theme={theme}
							prefersReducedMotion={prefersReducedMotion}
							data={contentData.personal}
						/>
						<CaseStudies
							theme={theme}
							onCaseStudyClick={handleCaseStudyClick}
							prefersReducedMotion={prefersReducedMotion}
							data={contentData.caseStudies}
						/>
						<About
							theme={theme}
							prefersReducedMotion={prefersReducedMotion}
							data={contentData.about}
						/>
						<DesignProcess
							theme={theme}
							prefersReducedMotion={prefersReducedMotion}
							data={contentData.designProcess}
						/>
						<Skills
							theme={theme}
							prefersReducedMotion={prefersReducedMotion}
							data={contentData.skills}
						/>

						<Contact
							theme={theme}
							prefersReducedMotion={prefersReducedMotion}
							data={contentData.personal}
						/>
					</motion.div>
				) : (
					<motion.div
						key="case-study"
						initial={{ opacity: 0, scale: 1.02 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.98 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.6,
							ease: [0.25, 0.1, 0.25, 1],
						}}
					>
						<CaseStudyPage
							caseStudyId={selectedCaseStudy || ""}
							theme={theme}
							onBack={handleBackToHome}
							onNextProject={(nextId) => {
								// Handle navigation to next project
								setCurrentCaseStudyId(nextId);
								// or however you handle navigation in your app
							}}
							prefersReducedMotion={prefersReducedMotion}
							data={contentData.caseStudies}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default App;