import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { 
  Cloud, Server, Shield, Zap, MapPin, Brain, Cpu, Network,
  Code, Database, Bot, Workflow, Globe, Layers, GitBranch,
  Activity, LineChart, Laptop, Blocks, Wifi, Sparkles,
  Lightbulb, Rocket, Microscope, Atom, Orbit
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const orbitVariants = {
  initial: { opacity: 0, scale: 0.5, rotate: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    rotate: 360,
    transition: { 
      duration: 2,
      ease: "easeOut",
      rotate: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }
};

const techIconVariants = {
  initial: { opacity: 0, y: 50, scale: 0.5 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const technologies = [
  { icon: <Code />, name: "Python", color: "from-yellow-400 to-blue-500" },
  { icon: <Database />, name: "MongoDB", color: "from-green-400 to-green-600" },
  { icon: <Cloud />, name: "React", color: "from-blue-400 to-cyan-500" },
  { icon: <Globe />, name: "Node.js", color: "from-green-500 to-lime-500" },
  { icon: <Cpu />, name: "TypeScript", color: "from-blue-600 to-indigo-600" },
  { icon: <Bot />, name: "Docker", color: "from-blue-500 to-blue-700" },
  { icon: <Brain />, name: "AI/ML", color: "from-purple-500 to-pink-500" },
  { icon: <Rocket />, name: "DevOps", color: "from-orange-500 to-red-500" }
];

export function HomePage() {
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);

  const orbitProps = useSpring({
    from: { transform: 'translateY(0px) rotate(0deg)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px) rotate(180deg)' });
        await next({ transform: 'translateY(0px) rotate(360deg)' });
      }
    },
    config: { duration: 4000 },
  });

  useEffect(() => {
    const sequence = async () => {
      await controls.start("animate");
    };
    sequence();
  }, [controls]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const color1 = `hsl(${200 + x * 60}, 70%, 50%)`;
      const color2 = `hsl(${180 + y * 60}, 70%, 50%)`;
      
      hero.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          ${color1},
          ${color2}
        )
      `;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white py-24 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={orbitVariants}
              className="mb-12"
            >
              <animated.div style={orbitProps} className="inline-block">
                <div className="w-32 h-32 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-ping"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Orbit className="w-20 h-20 text-white animate-pulse" />
                    {/* Orbiting particles */}
                    <div className="absolute w-full h-full">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full animate-spin"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: `${40 * Math.cos(i * Math.PI / 4)}px ${40 * Math.sin(i * Math.PI / 4)}px`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '4s'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </animated.div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Revolutionary Technology Solutions by{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                Orbit Technology
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-200 leading-relaxed">
              Pioneering the Future of Cloud Computing, AI & Software Development
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  custom={i}
                  initial="initial"
                  animate="animate"
                  variants={techIconVariants}
                  className="flex flex-col items-center group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-2 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {tech.icon}
                    </div>
                  </div>
                  <span className="text-sm text-blue-200 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
                asChild
              >
                <Link to="/services">Explore Solutions</Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/50 hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:admin@orbittechnology.tech">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.5, 1.5, 0.5],
                  x: [0, Math.random() * 200 - 100, 0],
                  y: [0, Math.random() * 200 - 100, 0]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        {/* Orbital rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute w-80 h-80 border border-white/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
          <div className="absolute w-64 h-64 border border-white/30 rounded-full animate-spin-slow"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Orbit Technology?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge solutions that propel your business into the future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Excellence</h3>
              <p className="text-gray-600">Scalable cloud infrastructure designed for performance and reliability</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600">Advanced AI solutions to automate and optimize your business processes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge technology solutions that keep you ahead of the competition</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}