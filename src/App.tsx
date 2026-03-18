import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flower2, 
  Heart, 
  Calendar, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  Users,
  Sparkles
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/J4ZFpbQ2/awesome-logo-Final.png" 
            alt="Awesome Blossom Logo" 
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-sm tracking-widest uppercase text-stone-800 hidden sm:block">Awesome Blossom</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Calendar', 'Services', 'Process', 'Portfolio', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 hover:text-fuchsia transition-colors">
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/918840121995" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-fuchsia text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-marigold transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle size={14} />
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream shadow-xl border-t border-stone-100 p-8 flex flex-col gap-6 md:hidden"
          >
            {['About', 'Calendar', 'Services', 'Process', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif italic text-stone-700 border-b border-stone-100 pb-2"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-fuchsia font-semibold mb-6 block">
            Tradition Met with Grace
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.9] text-stone-900 mb-8">
            Awesome <br />
            <span className="italic font-serif text-marigold">Blossom</span>
          </h1>
          <p className="text-lg md:text-xl font-serif italic text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hosting sacred community gatherings and managing your most precious private ceremonies with a mother's care and ritual precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#services" className="bg-stone-900 text-white px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-fuchsia transition-all duration-500">
              Explore Services
            </a>
            <a 
              href="https://wa.me/918840121995" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-900 border-b border-stone-900 pb-1 text-xs uppercase tracking-[0.2em] hover:text-fuchsia hover:border-fuchsia transition-all"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-400">
        <div className="w-[1px] h-12 bg-stone-300 mx-auto"></div>
      </div>
    </section>
  );
};

const EventCalendar = () => {
  const upcomingEvents = [
    {
      date: "Mar 15",
      title: "Community Satyanarayan Puja",
      time: "10:00 AM",
      location: "Raghuvar Palace",
      type: "Public Event"
    },
    {
      date: "Mar 22",
      title: "Spring Kirtan Sandhya",
      time: "6:00 PM",
      location: "Awesome Blossom Studio",
      type: "Hosted by Us"
    },
    {
      date: "Apr 05",
      title: "Traditional Godh Bharai Workshop",
      time: "11:30 AM",
      location: "Private Venue",
      type: "Community Event"
    }
  ];

  return (
    <section id="calendar" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-fuchsia font-bold mb-4 block">Join Our Gatherings</span>
            <h2 className="text-5xl font-display text-stone-900">Upcoming <span className="italic font-serif">Events</span></h2>
          </div>
          <p className="text-stone-500 font-serif italic max-w-xs">
            We regularly host community events to bring tradition closer to you. Join us or inquire for your own.
          </p>
        </div>

        <div className="grid gap-6">
          {upcomingEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 10 }}
              className="group flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border border-stone-100 hover:border-marigold/30 hover:bg-marigold/5 transition-all duration-500"
            >
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-cream text-stone-800">
                <span className="text-xs uppercase tracking-widest font-bold text-fuchsia">{event.date.split(' ')[0]}</span>
                <span className="text-3xl font-display">{event.date.split(' ')[1]}</span>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-1 block">{event.type}</span>
                <h3 className="text-2xl font-display text-stone-800 mb-2">{event.title}</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-stone-500 font-serif italic">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {event.time}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>
              </div>

              <a 
                href="https://wa.me/918840121995" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-fuchsia transition-all flex items-center gap-2"
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://i.postimg.cc/3xrZ2pf2/Whats-App-Image-2026-03-09-at-2-39-29-AM-(1).jpg" 
              alt="The Founder" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-marigold/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-fuchsia/10 rounded-full blur-3xl -z-0"></div>
          
          <div className="absolute bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-lg hidden lg:block z-20">
            <p className="font-serif italic text-stone-800 text-lg">"Tradition is not just a ritual; it's the heartbeat of our family."</p>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">The Heart Behind the Vision</span>
          <h2 className="text-5xl font-display text-stone-900 mb-8">A Legacy of <span className="italic font-serif">Love & Ritual</span></h2>
          
          <div className="space-y-6 text-stone-600 leading-relaxed font-serif text-xl">
            <p>
              Hi, I'm Ritu — and I live for the moments that matter.
            </p>
            <p>
              With over 5 years of experience planning traditional and cultural Hindu celebrations, I've had the joy of bringing to life some of the most beautiful events — Dandiya nights, Phoolon ki Holi, Godh Bharai, Haldi ceremonies, Kirtan, birthdays, New Year parties, and so much more. Each one planned with love, each one remembered for years.
            </p>
            <p>
              As a wife and mother of two, I understand how precious these milestones are. That's why I put my whole heart into every event I take on — making sure no detail is missed and no moment is wasted.
            </p>
            <p>
              My trusted network of pundits, caterers, decorators, and ground staff means you never have to stress about the logistics. You simply show up, soak it all in, and let me do what I do best.
            </p>
            <p>
              Currently serving families across Lucknow, with plans to expand across India — because every family deserves celebrations worth remembering.
            </p>
            <p className="italic">
              Let's create something beautiful together.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-100 pt-8">
            <div>
              <h4 className="font-display text-2xl text-stone-800">5+ Years</h4>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Experience</p>
            </div>
            <div>
              <h4 className="font-display text-2xl text-stone-800">50+</h4>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Events Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Religious Events and Kirtans",
      description: "From Satyanarayan Katha to soul-stirring Kirtans, we handle every sacred detail. We coordinate with trusted pundits and singers, ensuring all ritual Samagri is authentically sourced.",
      image: "https://i.postimg.cc/dVFxpLWB/33333333333333333.jpg",
      icon: <Sparkles className="text-marigold" />
    },
    {
      title: "Wedding Events",
      description: "Celebrate your Haldi, Mehendi, and Sangeet with vibrant decor and seamless flow. We blend traditional aesthetics with modern comfort, creating a joyful atmosphere for your family.",
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070&auto=format&fit=crop",
      icon: <Heart className="text-fuchsia" />
    },
    {
      title: "Life Milestones",
      description: "Mark your Godh Bharai or Annaprashan with elegance and warmth. Our milestone planning focuses on the emotional significance of the day, ensuring a beautiful backdrop for your family's new chapters.",
      image: "https://i.postimg.cc/52JRT6PZ/Whats-App-Image-2026-03-09-at-2-39-34-AM.jpg",
      icon: <Users className="text-gold" />
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-fuchsia font-bold mb-4 block">Our Offerings</span>
          <h2 className="text-5xl font-display text-stone-900">Curated <span className="italic font-serif">Celebrations</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-display text-stone-800 mb-4">{service.title}</h3>
                <p className="text-stone-600 font-serif text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <a 
                  href="https://wa.me/918840121995" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-fuchsia group-hover:gap-4 transition-all"
                >
                  Inquire Now <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We begin with a warm conversation over tea to understand your family's specific traditions, guest list, and the emotional 'vibe' you wish to create for your ceremony."
    },
    {
      number: "02",
      title: "Curation",
      description: "My team and I meticulously source the finest florists, authentic pundits, and traditional caterers, presenting you with a curated plan that honors every ritual detail."
    },
    {
      number: "03",
      title: "Celebration",
      description: "On the day of the event, you simply show up as a guest. I personally oversee the flow, from the first mantra to the last guest's departure, ensuring a stress-free experience."
    }
  ];

  return (
    <section id="process" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-marigold/5 -skew-x-12 transform origin-top"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-marigold font-bold mb-4 block">How We Work</span>
            <h2 className="text-5xl md:text-6xl font-display mb-8">The Path to a <br /><span className="italic font-serif text-marigold">Perfect</span> Day</h2>
            <p className="text-stone-400 font-serif text-xl leading-relaxed max-w-lg">
              We believe that planning a sacred event should be as peaceful as the ceremony itself. Our three-step process is designed to take the weight off your shoulders.
            </p>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-stone-900 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-400 tracking-wide">Trusted by 500+ families</p>
            </div>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-8 group">
                <span className="text-4xl font-display text-marigold/30 group-hover:text-marigold transition-colors duration-500">{step.number}</span>
                <div>
                  <h3 className="text-2xl font-display mb-3">{step.title}</h3>
                  <p className="text-stone-400 font-serif text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const images = [
    "https://i.postimg.cc/ncBW3v1W/11111111111111111.jpg",
    "https://i.postimg.cc/8zG09jyb/222222222222222.jpg",
    "https://i.postimg.cc/9Q2nKrx8/Whats-App-Image-2026-03-09-at-2-39-29-AM.jpg",
    "https://i.postimg.cc/qvr5SzmD/Whats-App-Image-2026-03-09-at-2-39-30-AM-(1).jpg",
    "https://i.postimg.cc/DwhMH8CY/Whats-App-Image-2026-03-09-at-2-39-31-AM.jpg",
    "https://i.postimg.cc/hvrdGZBf/Whats-App-Image-2026-03-09-at-2-39-38-AM-(1).jpg"
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Our Gallery</span>
            <h2 className="text-5xl font-display text-stone-900">Moments of <span className="italic font-serif">Pure Joy</span></h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-fuchsia transition-colors">View All Work</a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
            >
              <img src={img} alt="Portfolio" className="w-full h-auto hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      quote: "डांडिया नाइट्स का आयोजन इतना शानदार था कि सब झूम उठे। डेकोरेशन और म्यूजिक ने समां बांध दिया!",
      author: "Meera Varma",
      location: "Lucknow",
      topic: "Dandiya Night"
    },
    {
      quote: "Awesome Blossom made my son's first birthday absolutely magical. The attention to detail in the theme was incredible!",
      author: "Rahul Singh",
      location: "Lucknow",
      topic: "1st Birthday"
    },
    {
      quote: "हल्दी की रस्म इतनी खूबसूरती से मनाई गई कि पूरा परिवार खुश हो गया। फूलों की सजावट लाजवाब थी।",
      author: "Sneha Kapoor",
      location: "Kanpur",
      topic: "Haldi Ceremony"
    },
    {
      quote: "The Kirtan evening was so peaceful and well-organized. The spiritual atmosphere they created was truly divine.",
      author: "Mrs. Iyer",
      location: "Lucknow",
      topic: "Kirtan Sandhya"
    },
    {
      quote: "गोद भराई की रस्म को इन्होंने एक यादगार अनुभव बना दिया। हर छोटी चीज़ का ध्यान रखा गया था।",
      author: "Kavita Bajpai",
      location: "Lucknow",
      topic: "Godh Bharai"
    },
    {
      quote: "The Phoolon ki Holi event was a riot of colors and joy! It was the most unique and beautiful Holi celebration we've ever had.",
      author: "Amit Khanna",
      location: "Lucknow",
      topic: "Phoolon ki Holi"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <Flower2 className="text-marigold w-10 h-10 mx-auto mb-8" />
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 absolute w-full"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-fuchsia font-bold block">{testimonials[index].topic}</span>
              <p className="text-2xl md:text-4xl font-serif italic text-stone-800 leading-relaxed max-w-4xl mx-auto">
                "{testimonials[index].quote}"
              </p>
              <div>
                <h4 className="text-xl font-display text-stone-900">{testimonials[index].author}</h4>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">{testimonials[index].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-fuchsia w-6' : 'bg-stone-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Religious Event / Kirtan',
    message: ''
  });

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Awesome Blossom! I'm ${formData.name}. I'm interested in a ${formData.eventType}. ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918840121995?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-fuchsia font-bold mb-4 block">Get in Touch</span>
          <h2 className="text-5xl font-display text-stone-900 mb-8">Let's Plan Your <br /><span className="italic font-serif text-fuchsia">Next Chapter</span></h2>
          <p className="text-stone-600 font-serif text-xl leading-relaxed mb-12">
            I would love to hear about your upcoming celebration. Whether it's a small puja or a grand sangeet, let's make it unforgettable.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <MessageCircle className="text-fuchsia" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400">WhatsApp Us</p>
                <a href="https://wa.me/918840121995" className="text-lg font-display text-stone-800 hover:text-fuchsia transition-colors">+91 88401 21995</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Instagram className="text-fuchsia" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400">Email Address</p>
                <a href="mailto:awesomeblossomevent@gmail.com" className="text-lg font-display text-stone-800 hover:text-fuchsia transition-colors">awesomeblossomevent@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mt-1">
                <Sparkles className="text-fuchsia" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400">Office Address</p>
                <p className="text-lg font-display text-stone-800 leading-snug max-w-xs">
                  501, 5th Floor, Eldeco Corporate Chamber II, Vibhuti Khand, Gomti Nagar, Lucknow
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl relative z-10">
          <form className="space-y-6" onSubmit={handleWhatsAppInquiry}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-b border-stone-200 py-3 focus:border-fuchsia outline-none transition-colors bg-transparent" 
                  placeholder="Aditi Rao" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border-b border-stone-200 py-3 focus:border-fuchsia outline-none transition-colors bg-transparent" 
                  placeholder="aditi@example.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Event Type</label>
              <select 
                value={formData.eventType}
                onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                className="w-full border-b border-stone-200 py-3 focus:border-fuchsia outline-none transition-colors bg-transparent appearance-none"
              >
                <option>Religious Event / Kirtan</option>
                <option>Wedding Event</option>
                <option>Life Milestone</option>
                <option>Dandiya Night</option>
                <option>Phoolon ki Holi</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Message</label>
              <textarea 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full border-b border-stone-200 py-3 focus:border-fuchsia outline-none transition-colors bg-transparent resize-none" 
                placeholder="Tell us about your vision..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-stone-900 text-white py-5 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-fuchsia transition-all duration-500 mt-4"
            >
              Send Inquiry via WhatsApp
            </button>
          </form>
        </div>
      </div>
      
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-marigold/10 rounded-full blur-3xl -z-0"></div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex items-center gap-2">
            <Flower2 className="text-marigold w-8 h-8" />
            <span className="font-display text-2xl tracking-widest uppercase text-stone-800">Awesome Blossom</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="text-stone-400 hover:text-fuchsia transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-fuchsia transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-stone-100 pt-16">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#about" className="hover:text-fuchsia transition-colors">About Me</a></li>
              <li><a href="#calendar" className="hover:text-fuchsia transition-colors">Event Calendar</a></li>
              <li><a href="#services" className="hover:text-fuchsia transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-fuchsia transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-fuchsia transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li>Religious Events & Kirtans</li>
              <li>Wedding Events</li>
              <li>Baby Showers</li>
              <li>Sangeet Nights</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li>+91 88401 21995</li>
              <li>awesomeblossomevent@gmail.com</li>
              <li className="leading-relaxed">
                501, 5th Floor, Eldeco Corporate Chamber II, Vibhuti Khand, Gomti Nagar, Lucknow
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 text-center text-[10px] uppercase tracking-[0.3em] text-stone-400">
          &copy; {new Date().getFullYear()} Awesome Blossom. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative bg-cream">
      {/* Global Background Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/d/1HR8P0SdUO6ZvV60c0MtiPdlfn2h4EHlJ')",
          backgroundRepeat: 'repeat',
          backgroundSize: '450px',
          opacity: 1
        }}
      ></div>
      
      <Navbar />
      <main className="relative z-10">
        <div className="bg-cream/60 backdrop-blur-[2px]">
          <Hero />
        </div>
        <div className="bg-white/80 backdrop-blur-sm">
          <EventCalendar />
        </div>
        <div className="bg-cream/80 backdrop-blur-md">
          <About />
        </div>
        <div className="bg-white/90 backdrop-blur-sm">
          <Services />
        </div>
        <Process />
        <div className="bg-cream/70 backdrop-blur-sm">
          <Portfolio />
        </div>
        <div className="bg-white/60 backdrop-blur-[2px]">
          <Testimonials />
        </div>
        <div className="bg-cream/90 backdrop-blur-md">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
