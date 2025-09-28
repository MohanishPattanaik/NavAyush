import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Heart, 
  Calendar, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  Clock,
  Award,
  Sparkles,
  Brain,
  PlayCircle
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Personalized Panchakarma",
      description: "Tailored Ayurvedic treatments based on your unique constitution and health needs"
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Smart Scheduling",
      description: "AI-powered appointment scheduling that optimizes your treatment timeline"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI-Driven Insights",
      description: "Advanced analytics to track your progress and predict treatment outcomes"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Expert Practitioners",
      description: "Connect with certified Ayurvedic doctors and experienced therapists"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security"
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your wellness journey"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "👩‍💻",
      rating: 5,
      text: "AyurSutra transformed my health completely. The personalized Panchakarma treatment helped me overcome chronic stress and digestive issues."
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "👨‍💼",
      rating: 5,
      text: "The AI-powered scheduling made it so easy to fit treatments into my busy schedule. Highly recommend!"
    },
    {
      name: "Dr. Meera Patel",
      role: "Ayurvedic Practitioner",
      image: "👩‍⚕️",
      rating: 5,
      text: "As a practitioner, AyurSutra's platform helps me provide better care with detailed patient insights and treatment tracking."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Patients" },
    { number: "500+", label: "Expert Practitioners" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Treatment Types" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">AyurSutra</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              <a 
                href="/login" 
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Sign In
              </a>
              <a 
                href="/register" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-green-600">Features</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-green-600">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-green-600">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-green-600">Contact</a>
              <a href="/login" className="block px-3 py-2 text-green-600 font-medium">Sign In</a>
              <a href="/register" className="block px-3 py-2 text-center bg-green-600 text-white rounded-lg mx-3">Get Started</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center space-x-2 mb-6"
              >
                <Sparkles className="h-6 w-6 text-yellow-500" />
                <span className="text-green-600 font-semibold">Ancient Wisdom, Modern Technology</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Transform Your Health with 
                <span className="text-green-600"> AyurSutra</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Experience the power of personalized Panchakarma treatments guided by AI technology. 
                Join thousands who have discovered holistic wellness through authentic Ayurvedic care.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <a 
                  href="/register" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/login" 
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  I'm Already a Member
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-2 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden bg-black">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/GVLiI6rX7Mk?rel=0&modestbranding=1&autohide=1&showinfo=0"
                      title="AyurSutra - Transform Your Health with Ayurveda"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="mt-4 px-4 pb-2">
                  <div className="flex items-center space-x-2 text-white">
                    <PlayCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Watch: Introduction to Panchakarma</span>
                  </div>
                  <p className="text-white/80 text-xs mt-1">Discover the ancient science of healing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AyurSutra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining 5000-year-old Ayurvedic wisdom with cutting-edge technology 
              to deliver personalized healthcare solutions
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Science of Panchakarma
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Panchakarma is Ayurveda's premier detoxification and rejuvenation program. 
                Our platform makes this ancient healing system accessible through modern technology.
              </p>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-4"
              >
                {[
                  { title: "Purvakarma (Preparation)", desc: "Gentle preparation of the body for detoxification" },
                  { title: "Pradhankarma (Main Treatment)", desc: "Five therapeutic procedures for deep cleansing" },
                  { title: "Paschatkarma (Recovery)", desc: "Rejuvenation and lifestyle guidance for lasting wellness" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🧘‍♀️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Holistic Wellness</h3>
                <p className="text-gray-600 mb-6">
                  Experience balance in mind, body, and spirit through personalized Ayurvedic treatments
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl mb-2">🌿</div>
                    <p className="text-sm font-medium">Natural</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">⚖️</div>
                    <p className="text-sm font-medium">Balanced</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">✨</div>
                    <p className="text-sm font-medium">Transformative</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who have transformed their lives with AyurSutra
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expert Videos Section - Multiple Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Know From The Experts
            </h2>
            <p className="text-xl text-gray-600">
              Wisdom from leading Ayurvedic practitioners — in their own words.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "The Science of Panchakarma - 28 Days of wellness",
                subtitle: "By Dr. Chiti Parikh | TRS Clips",
                videoId: "zMDnFhCaJTc",
                avatar: "🌿"
              },
              {
                title: "Panchakarma: एक आयुर्वेदिक विधि!",
                subtitle: "By Dr. Shilpa Saraogi | Tata 1mg",
                videoId: "-fH8G8eMODs", 
                avatar: "🌿"
              },
              {
                title: "How To Prepare For A Panchakarma Treatment",
                subtitle: "By Dr. Vignesh Devraj",
                videoId: "F-OGY-rfRko",
                avatar: "🌿"
              },
              {
                title: "Patient Success Stories",
                subtitle: "My Healing Experience In the Oldest Ayurvedic Hospital | Shenaz Treasury",
                videoId: "fWHYC63EaJk",
                avatar: "🌿"
              },
              {
                title: "The Ayurvedic Secret to Deep Detox: A Beginner’s Guide to Panchakarma",
                subtitle: "By Dr. Shekhar Vijay | The Natural Law",
                videoId: "nJU17ubJnAU",
                avatar: "🌿"
              },
              {
                title: "Mind-Gut Connection",
                subtitle: "Healing from within",
                videoId: "dQw4w9WgXcQ",
                avatar: "🌿"
              }
            ].map((video, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 flex items-center space-x-2 text-white">
                    <PlayCircle className="h-5 w-5" />
                    <span className="text-xs font-medium">Watch</span>
                  </div>
                </div>

                <div className="mt-3 px-3 pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-sm leading-tight">{video.title}</h4>
                      <p className="text-white/80 text-xs mt-1">{video.subtitle}</p>
                    </div>
                    <div className="text-xl ml-2">{video.avatar}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join AyurSutra today and experience the transformative power of personalized Ayurvedic care
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/register" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/login" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Sign In
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">AyurSutra</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming lives through authentic Ayurvedic care and modern technology.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Panchakarma Treatments</li>
                <li>Consultation Booking</li>
                <li>Progress Tracking</li>
                <li>AI Health Insights</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Practitioners</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@ayursutra.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AyurSutra. All rights reserved. Made with ❤️ for holistic wellness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
