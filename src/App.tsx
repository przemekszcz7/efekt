import { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  Facebook, 
  Check, 
  MapPin, 
  Clock, 
  Shield, 
  Compass, 
  Layers, 
  Home, 
  Sparkles, 
  Building2, 
  Key, 
  Menu, 
  X, 
  ZoomIn, 
  Award, 
  Briefcase, 
  UserCheck, 
  Zap, 
  Heart, 
  Trash2,
  Lock
} from "lucide-react";

// Realization Data
interface Realization {
  id: string;
  title: string;
  category: string;
  images: string[];
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; title: string; category: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const realizationsList: Realization[] = [
    {
      id: "przedszkole",
      title: "Przedszkole w Sianowie",
      category: "Mycie okien po budowie",
      images: [
        "https://i.ibb.co/tppL7fqP/705528534-122244689372330341-6803083555910566601-n.jpg",
        "https://i.ibb.co/F4gqJJSx/705061547-122244689378330341-4985360421037442749-n.jpg"
      ]
    },
    {
      id: "pokazowe",
      title: "Mieszkania pokazowe",
      category: "Przygotowanie mieszkań w nowo wybudowanym budynku",
      images: [
        "https://i.ibb.co/cSfXLYvV/687859243-122242343096330341-6764621300530014118-n.jpg",
        "https://i.ibb.co/RMDxp0Y/691028030-122242342982330341-3336632334825791249-n.jpg",
        "https://i.ibb.co/bR3kbYJf/687467616-122242343000330341-6069216666568126649-n.jpg",
        "https://i.ibb.co/b9fk44t/688181901-122242342928330341-2662479842083452365-n.jpg",
        "https://i.ibb.co/Xfc5LG4G/686945563-122242343126330341-3194959646181078331-n.jpg",
        "https://i.ibb.co/KpN3RdDn/689447850-122242342844330341-1870711819801877237-n.jpg",
        "https://i.ibb.co/0ppjbX5R/690850016-122242342838330341-2134762098329651216-n.jpg",
        "https://i.ibb.co/hJ95HXVS/690064417-122242342850330341-4830628075504572052-n.jpg"
      ]
    },
    {
      id: "wynajem",
      title: "Przygotowanie mieszkania pod wynajem",
      category: "Kompleksowe czyszczenie i odświeżenie",
      images: [
        "https://i.ibb.co/kVxnDk7T/684699955-122241581132330341-5485161474413593399-n.jpg",
        "https://i.ibb.co/KjVD2XR0/683817614-122241581096330341-2192974780480417527-n.jpg",
        "https://i.ibb.co/svxLsBxZ/684923107-122241581090330341-5147729140350340133-n.jpg"
      ]
    }
  ];

  return (
    <div className="min-height-screen flex flex-col bg-[#f9f9f8] text-[#1f2937] font-sans selection:bg-[#0f5f53] selection:text-white">
      
      {/* STICKY HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(15,95,83,0.03)] border-b border-[#0f5f53]/5 py-4" 
          : "bg-transparent py-6"
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#o-nas" className="flex items-center gap-3">
            <img 
              className="w-12 h-12 rounded-full border-2 border-[#cca565] object-cover shadow-sm" 
              src="https://i.ibb.co/Xk4pJXLY/668494958-122239609592330341-4344146645755163132-n.jpg" 
              alt="Logo EFEKT" 
            />
            <span className="font-display text-2xl font-extrabold tracking-tight text-[#0f5f53]">
              EFEKT<span className="text-[#cca565]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#o-nas" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">O nas</a>
            <a href="#uslugi" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">Usługi</a>
            <a href="#budowa" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">Po budowie</a>
            <a href="#oproznianie" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">Opróżnianie</a>
            <a href="#wspolnoty" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">Wspólnoty</a>
            <a href="#realizacje-mieszkania" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">Realizacje</a>
            <a href="#dlaczego-my" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">Dlaczego my</a>
            <a href="#kontakt" className="text-sm font-semibold tracking-wider uppercase text-[#0f5f53] hover:text-[#cca565] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#cca565] hover:after:w-full after:transition-all">Kontakt</a>
          </nav>

          <a href="tel:+48535090691" className="hidden lg:inline-flex items-center justify-center bg-[#0f5f53] text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_4px_15px_rgba(15,95,83,0.15)] hover:bg-[#cca565] hover:text-[#0f5f53] hover:scale-105 hover:shadow-[0_8px_25px_rgba(204,165,101,0.3)] transition-all duration-300">
            Zadzwoń teraz
          </a>

          {/* Hamburger mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-[#0f5f53] p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[#0f5f53]/10 shadow-xl py-8 px-6 animate-fadeIn">
            <nav className="flex flex-col gap-5">
              <a onClick={() => setMobileMenuOpen(false)} href="#o-nas" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">O nas</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#uslugi" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Usługi</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#budowa" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Po budowie</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#oproznianie" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Opróżnianie</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#wspolnoty" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Wspólnoty</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#realizacje-mieszkania" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Realizacje</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#dlaczego-my" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Dlaczego my</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#kontakt" className="text-base font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Kontakt</a>
              <a onClick={() => setMobileMenuOpen(false)} href="tel:+48535090691" className="inline-flex items-center justify-center bg-[#0f5f53] text-white font-extrabold text-sm uppercase tracking-wider py-4.5 rounded-full mt-4 shadow-md">
                <Phone size={16} className="mr-2" /> +48 535 090 691
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="o-nas" className="min-h-[95vh] flex items-center pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-[#0f5f53]/[0.02] to-[#cca565]/[0.03]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Left Hero Side */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-block bg-[#0f5f53]/5 border border-[#0f5f53]/10 text-[#0f5f53] px-6 py-2 rounded-full text-[13px] font-extrabold tracking-[2.5px] uppercase mb-6">
              PROFESJONALNY SERWIS SPRZĄTAJĄCY
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#0f5f53] leading-[1.1] mb-8 tracking-tight">
              Czystość, którą widać. <br />
              <span className="text-[#cca565] italic font-normal">Jakość</span>, której można zaufać.
            </h1>
            <p className="text-lg text-[#5e6b7e] leading-[1.8] max-w-2xl mb-10 font-normal">
              Nasz wykwalifikowany personel korzysta z wysokiej klasy środków czystości oraz nowoczesnych urządzeń, osiągając znakomite efekty przy każdej realizacji.
            </p>
            
            {/* List of benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 w-full max-w-xl mb-10">
              <div className="flex items-center gap-3 text-base font-bold text-[#0f5f53]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={14} strokeWidth={3} /></span>
                Profesjonalny sprzęt
              </div>
              <div className="flex items-center gap-3 text-base font-bold text-[#0f5f53]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={14} strokeWidth={3} /></span>
                Certyfikowana chemia
              </div>
              <div className="flex items-center gap-3 text-base font-bold text-[#0f5f53]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={14} strokeWidth={3} /></span>
                Szybkie terminy
              </div>
              <div className="flex items-center gap-3 text-base font-bold text-[#0f5f53]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={14} strokeWidth={3} /></span>
                Doświadczeni pracownicy
              </div>
              <div className="flex items-center gap-3 text-base font-bold text-[#0f5f53]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={14} strokeWidth={3} /></span>
                Bezpłatna wycena
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a href="tel:+48535090691" className="inline-flex items-center justify-center bg-[#0f5f53] text-white font-extrabold text-base uppercase tracking-wider h-[58px] px-10 rounded-full shadow-[0_6px_20px_rgba(15,95,83,0.15)] hover:bg-[#cca565] hover:text-[#0f5f53] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(204,165,101,0.35)] transition-all duration-300">
                <Phone size={18} className="mr-3" /> +48 535 090 691
              </a>
              <a href="#kontakt" className="inline-flex items-center justify-center bg-transparent border-2 border-[#0f5f53] text-[#0f5f53] font-extrabold text-base uppercase tracking-wider h-[58px] px-10 rounded-full hover:bg-[#0f5f53] hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Darmowa wycena
              </a>
            </div>
          </div>

          {/* Right Hero Side (Premium Card UI) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="bg-white rounded-[32px] p-10 md:p-12 shadow-[0_15px_50px_rgba(15,95,83,0.04)] border border-[#0f5f53]/5 relative z-10">
              <div className="absolute -top-3.5 -right-3.5 w-full h-full border-2 border-[#cca565] rounded-[32px] opacity-15 -z-10"></div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0f5f53] text-center mb-10">Zasięg &amp; Zaangażowanie</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#f9f9f8] p-6 rounded-2xl text-center border border-[#0f5f53]/[0.02] hover:bg-white hover:-translate-y-1.5 hover:shadow-lg hover:border-[#cca565]/35 transition-all duration-300">
                  <div className="flex justify-center mb-4 text-[#cca565]">
                    <MapPin size={34} strokeWidth={1.5} />
                  </div>
                  <p className="text-[13px] font-extrabold text-[#0f5f53] uppercase tracking-wider mb-1">Koszalin</p>
                  <span className="text-xs text-[#5e6b7e] font-medium">Baza operacyjna</span>
                </div>

                <div className="bg-[#f9f9f8] p-6 rounded-2xl text-center border border-[#0f5f53]/[0.02] hover:bg-white hover:-translate-y-1.5 hover:shadow-lg hover:border-[#cca565]/35 transition-all duration-300">
                  <div className="flex justify-center mb-4 text-[#cca565]">
                    <Compass size={34} strokeWidth={1.5} />
                  </div>
                  <p className="text-[13px] font-extrabold text-[#0f5f53] uppercase tracking-wider mb-1">Do 50 km</p>
                  <span className="text-xs text-[#5e6b7e] font-medium">Obszar działania</span>
                </div>

                <div className="bg-[#f9f9f8] p-6 rounded-2xl text-center border border-[#0f5f53]/[0.02] hover:bg-white hover:-translate-y-1.5 hover:shadow-lg hover:border-[#cca565]/35 transition-all duration-300">
                  <div className="flex justify-center mb-4 text-[#cca565]">
                    <Sparkles size={34} strokeWidth={1.5} />
                  </div>
                  <p className="text-[13px] font-extrabold text-[#0f5f53] uppercase tracking-wider mb-1">100% Premium</p>
                  <span className="text-xs text-[#5e6b7e] font-medium">Perfekcyjna jakość</span>
                </div>

                <div className="bg-[#f9f9f8] p-6 rounded-2xl text-center border border-[#0f5f53]/[0.02] hover:bg-white hover:-translate-y-1.5 hover:shadow-lg hover:border-[#cca565]/35 transition-all duration-300">
                  <div className="flex justify-center mb-4 text-[#cca565]">
                    <Briefcase size={34} strokeWidth={1.5} />
                  </div>
                  <p className="text-[13px] font-extrabold text-[#0f5f53] uppercase tracking-wider mb-1">Dla Wszystkich</p>
                  <span className="text-xs text-[#5e6b7e] font-medium">Firmy &amp; Prywatni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION (Liczby) */}
      <section className="bg-[#072e28] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(204,165,101,0.06),transparent_50%)]"></div>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center">
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[#cca565] leading-none mb-4">500+</span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[2px] text-white/80">Ukończonych zleceń</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[#cca565] leading-none mb-4">100%</span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[2px] text-white/80">Pozytywnych opinii</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[#cca565] leading-none mb-4">50 km</span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[2px] text-white/80">Zasięg od Koszalina</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[#cca565] leading-none mb-4">12+</span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[2px] text-white/80">Profesjonalnych usług</span>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE CARDS */}
      <section id="uslugi" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-20 md:mb-24">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565-dark] text-[#cca565] mb-4 block">KOMPLEKSOWOŚĆ</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f5f53] mb-6 leading-tight">Nasze Usługi</h2>
            <div className="w-20 h-[3px] bg-[#cca565] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-[#5e6b7e] max-w-2xl mx-auto font-normal">
              Świadczymy najwyższej jakości usługi porządkowe dla klientów indywidualnych, firm, wspólnot mieszkaniowych oraz obiektów noclegowych.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Service 1 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Sprzątanie po budowie i remoncie</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Usuwanie najcięższych zabrudzeń pobudowlanych, pyłu, farb, klejów i zapraw. Przygotowanie obiektów do bezproblemowego odbioru.
              </p>
            </div>

            {/* Service 2 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Opróżnianie mieszkań</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Kompleksowa usługa wynoszenia starych mebli, sprzętów oraz pełnego przygotowania pomieszczeń pod renowację lub sprzedaż.
              </p>
            </div>

            {/* Service 3 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Trash2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Opróżnianie piwnic</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Szybkie pozbywanie się zbędnych rzeczy, gratów i odpadów wielkogabarytowych zalegających w przestrzeniach piwnicznych.
              </p>
            </div>

            {/* Service 4 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Home size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Opróżnianie strychów</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Profesjonalne opróżnianie poddaszy z kurzu, starych przedmiotów, kartonów oraz zdezynfekowanie i posprzątanie przestrzeni.
              </p>
            </div>

            {/* Service 5 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Briefcase size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Opróżnianie garaży</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Przywracanie porządku w garażach prywatnych i firmowych. Segregacja, wywóz odpadów i mycie posadzek.
              </p>
            </div>

            {/* Service 6 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Building2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Sprzątanie wspólnot mieszkaniowych</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Utrzymanie czystości klatek schodowych, wind, hal garażowych oraz terenów zewnętrznych należących do wspólnot.
              </p>
            </div>

            {/* Service 7 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Sprzątanie obiektów noclegowych</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Sezonowa i całoroczna obsługa hoteli, pensjonatów oraz domów wczasowych ze szczególnym naciskiem na elastyczność i terminowość.
              </p>
            </div>

            {/* Service 8 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Key size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Sprzątanie apartamentów</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Serwis apartamentów na wynajem krótkoterminowy w standardzie premium. Pranie pościeli, mycie, dbanie o każdy detal dla turystów.
              </p>
            </div>

            {/* Service 9 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Home size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Sprzątanie domków letniskowych</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Kompleksowe sprzątanie przed i po sezonie letnim w pasie nadmorskim (Mielno, Sarbinowo, Ustronie Morskie).
              </p>
            </div>

            {/* Service 10 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Building2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Sprzątanie biur</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Regularne dbanie o czystość miejsc pracy, gabinetów, sal konferencyjnych i zapleczy socjalnych.
              </p>
            </div>

            {/* Service 11 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <Briefcase size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Sprzątanie lokali usługowych</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Dostosowane do specyfiki danej działalności (sklepy, salony, gabinety medyczne) mycie, sprzątanie i dezynfekcja.
              </p>
            </div>

            {/* Service 12 */}
            <div className="premium-card flex flex-col items-start group">
              <div className="w-16 h-16 bg-[#0f5f53]/5 rounded-2xl flex items-center justify-center text-[#0f5f53] group-hover:bg-[#0f5f53] group-hover:text-[#cca565] transition-all duration-300 mb-8">
                <UserCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f5f53] mb-4">Przygotowanie do sprzedaży</h3>
              <p className="text-sm text-[#5e6b7e] leading-relaxed flex-grow">
                Profesjonalny home staging czystościowy. Zwiększ wartość rynkową nieruchomości dzięki perfekcyjnemu wyglądowi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – SPRZĄTANIE PO BUDOWIE (Dopracowana, premium) */}
      <section id="budowa" className="py-24 md:py-32 bg-[#f9f9f8]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-4 block">PRECYZJA POBUDOWLANA</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f5f53] mb-6 leading-tight">
                Sprzątanie po budowie i remoncie
              </h2>
              <p className="text-[#5e6b7e] text-base sm:text-lg leading-[1.8] mb-12 font-normal max-w-3xl">
                Prace wykończeniowe zawsze pozostawiają po sobie ogromną ilość kurzu, pyłu i plam z trudnych do usunięcia materiałów. Nasz zespół posiada doświadczenie i profesjonalny sprzęt przemysłowy, który gwarantuje doskonały stan techniczny i wizualny oddawanego lokalu.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl border-l-4 border-[#cca565] shadow-[0_10px_35px_rgba(15,95,83,0.02)]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Usuwanie pyłu</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Odkurzanie przemysłowe ścian, sufitów i trudno dostępnych wnęk oraz grzejników.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border-l-4 border-[#cca565] shadow-[0_10px_35px_rgba(15,95,83,0.02)]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Mycie podłóg</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Usuwanie plam po farbach, tynkach, gruntach z każdego rodzaju posadzki.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border-l-4 border-[#cca565] shadow-[0_10px_35px_rgba(15,95,83,0.02)]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Mycie okien</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Czyszczenie ram i szyb z naklejek, klejów, folii oraz pyłu budowlanego.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border-l-4 border-[#cca565] shadow-[0_10px_35px_rgba(15,95,83,0.02)]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Przygotowanie do odbioru</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Kompleksowa dezynfekcja łazienek i kuchni, doprowadzenie wnętrz do zamieszkania.</p>
                </div>
              </div>

              <a href="tel:+48535090691" className="inline-flex items-center justify-center bg-[#0f5f53] text-white font-extrabold text-sm uppercase tracking-wider h-[56px] px-10 rounded-full shadow-md hover:bg-[#cca565] hover:text-[#0f5f53] transition-all">
                Darmowa wycena po remontach
              </a>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute -inset-3 border border-[#cca565]/20 rounded-[36px] -z-10"></div>
                <img 
                  src="https://i.ibb.co/tppL7fqP/705528534-122244689372330341-6803083555910566601-n.jpg" 
                  alt="Mycie okien po budowie Sianowo" 
                  className="w-full h-auto rounded-[30px] border-[8px] border-white shadow-xl object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OPRÓŻNIANIE MIESZKAŃ (Ciemna premium sekcja) */}
      <section id="oproznianie" className="py-24 md:py-32 bg-[#0f5f53] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(204,165,101,0.08),transparent_60%)]"></div>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-[#cca565] mb-8">
                <Trash2 size={40} />
              </div>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-4 block">UWALNIANIE PRZESTRZENI</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Kompleksowe Opróżnianie Pomieszczeń
              </h2>
              <p className="text-white/80 text-base leading-[1.8] mb-10 max-w-lg font-normal">
                Uwalniamy przestrzenie od zbędnych przedmiotów. Pracujemy szybko i dbamy o pełną utylizację wywożonych mebli, sprzętu RTV/AGD i złomu.
              </p>
              <div className="inline-block bg-[#cca565] text-[#0f5f53] font-black text-xs md:text-sm tracking-[1.5px] uppercase px-8 py-5.5 rounded-2xl shadow-xl pulse-green border-2 border-[#cca565-light]/20">
                SPRZĄTANIE PO OPRÓŻNIENIU GRATIS
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl md:text-3xl text-[#cca565] font-bold mb-8">Gdzie świadczymy usługi?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-4 text-base md:text-lg font-semibold text-white/95">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#cca565]"><Check size={16} /></span>
                  Mieszkania i domy jednorodzinne
                </div>
                <div className="flex items-center gap-4 text-base md:text-lg font-semibold text-white/95">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#cca565]"><Check size={16} /></span>
                  Piwnice i komórki lokatorskie
                </div>
                <div className="flex items-center gap-4 text-base md:text-lg font-semibold text-white/95">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#cca565]"><Check size={16} /></span>
                  Strychy i stare poddasza
                </div>
                <div className="flex items-center gap-4 text-base md:text-lg font-semibold text-white/95">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#cca565]"><Check size={16} /></span>
                  Garaże, wiaty i ogródki działkowe
                </div>
              </div>

              <h3 className="font-display text-xl text-[#cca565] font-bold mb-4">Gwarantowane w pakiecie:</h3>
              <p className="text-white/80 leading-[1.8] mb-10 text-sm md:text-base font-normal max-w-2xl">
                Zapewniamy sprawny transport, załadunek, legalny wywóz, oraz profesjonalne odkurzenie i umycie podłóg po zakończonej pracy całkowicie bez opłat!
              </p>

              <a href="tel:+48535090691" className="inline-flex items-center justify-center bg-[#cca565] text-[#0f5f53] font-black text-sm uppercase tracking-wider h-[56px] px-10 rounded-full shadow-lg hover:bg-white hover:text-[#0f5f53] transition-all">
                Wyceń wywóz gratów
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WSPÓLNOTY MIESZKANIOWE */}
      <section id="wspolnoty" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="bg-[#f9f9f8] rounded-[40px] p-8 md:p-16 lg:p-20 shadow-[0_10px_40px_rgba(15,95,83,0.03)] border border-[#0f5f53]/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-4 block">DLA ZARZĄDCÓW I SPÓŁDZIELNI</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f5f53] mb-6 leading-tight">
                  Profesjonalna obsługa wspólnot mieszkaniowych
                </h2>
                <p className="text-[#5e6b7e] text-base leading-[1.8] mb-10 font-normal">
                  Zapewniamy nieskazitelną czystość w budynkach wielorodzinnych. Zdajemy sobie sprawę, że porządek na osiedlu to wizytówka administratora oraz komfort wszystkich mieszkańców.
                </p>

                <div className="flex flex-col gap-5 mb-10">
                  <div className="flex items-center gap-4 text-base font-bold text-[#0f5f53]">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={15} strokeWidth={3} /></span>
                    Klatki schodowe i windy
                  </div>
                  <div className="flex items-center gap-4 text-base font-bold text-[#0f5f53]">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={15} strokeWidth={3} /></span>
                    Hale garażowe (odkurzanie, mycie maszynowe)
                  </div>
                  <div className="flex items-center gap-4 text-base font-bold text-[#0f5f53]">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#cca565]/10 text-[#cca565]"><Check size={15} strokeWidth={3} /></span>
                    Tereny zewnętrzne, koszenie trawników, odśnieżanie
                  </div>
                </div>

                <div className="inline-flex items-center gap-4 bg-white border border-[#cca565]/30 text-[#0f5f53] px-8 py-5 rounded-full font-black text-sm tracking-wider shadow-sm">
                  <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full pulse-green"></span>
                  REAKCJA NA ZGŁOSZENIA DO 24H
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-3 border border-[#cca565]/20 rounded-[32px] -z-10"></div>
                  <img 
                    src="https://i.ibb.co/Xfc5LG4G/686945563-122242343126330341-3194959646181078331-n.jpg" 
                    alt="Sprzątanie klatki schodowej Koszalin" 
                    className="w-full h-[380px] object-cover rounded-[24px] border-[8px] border-white shadow-xl" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – SPRZĄTANIE OBIEKTÓW NOCLEGOWYCH */}
      <section id="apartamenty" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 border border-[#cca565]/20 rounded-[36px] -z-10"></div>
                <img 
                  src="https://i.ibb.co/bR3kbYJf/687467616-122242343000330341-6069216666568126649-n.jpg" 
                  alt="Obsługa apartamentów" 
                  className="w-full h-[450px] object-cover rounded-[30px] border-[8px] border-white shadow-xl" 
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-4 block">TURYSTYKA &amp; NAJEM</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f5f53] mb-6 leading-tight">
                Sprzątanie obiektów noclegowych i apartamentów
              </h2>
              <p className="text-[#5e6b7e] text-base sm:text-lg leading-[1.8] mb-12 font-normal">
                Współpracujemy z właścicielami i zarządcami nieruchomości turystycznych w Koszalinie, Mielnie, Sarbinowie i Ustroniu Morskim. Wiemy, jak kluczowa dla opinii gości jest nieskazitelna czystość.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#f9f9f8] p-8 rounded-2xl border border-[#0f5f53]/[0.02]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Szybkie zmiany</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Serwis w okienkach czasowych między wyjazdem a przyjazdem kolejnych gości.</p>
                </div>
                <div className="bg-[#f9f9f8] p-8 rounded-2xl border border-[#0f5f53]/[0.02]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Elastyczność</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Pracujemy w weekendy oraz dni świąteczne, dostosowując się do kalendarza rezerwacji.</p>
                </div>
                <div className="bg-[#f9f9f8] p-8 rounded-2xl border border-[#0f5f53]/[0.02]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Nadmorski zasięg</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Obsługa apartamentów, domków letniskowych oraz pensjonatów nad samym morzem.</p>
                </div>
                <div className="bg-[#f9f9f8] p-8 rounded-2xl border border-[#0f5f53]/[0.02]">
                  <h4 className="font-display text-lg font-bold text-[#0f5f53] mb-2">Dbałość o detale</h4>
                  <p className="text-sm text-[#5e6b7e] leading-relaxed">Uzupełnianie środków higienicznych, mycie ekspresów, dokładna kontrola stanu lokalu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 – REALIZACJE (Sianowo, Pokazowe, Wynajem, split into individual premium grid sections) */}
      
      {/* Realizacja 1: Sianowo */}
      <section id="realizacje-przedszkole" className="py-24 md:py-32 bg-[#f9f9f8]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          <div className="mb-14">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-2 block">REALIZACJA 1</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0f5f53] mb-4 leading-tight">Przedszkole w Sianowie</h2>
            <div className="w-16 h-[2px] bg-[#cca565] mb-4"></div>
            <p className="text-[#5e6b7e] text-base max-w-xl font-normal">Mycie okien po budowie na dużym obiekcie edukacyjnym.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {realizationsList[0].images.map((img, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(15,95,83,0.03)] border border-[#0f5f53]/5 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveImage({ src: img, title: "Przedszkole w Sianowie", category: "Mycie okien po budowie" })}
              >
                <div className="relative pt-[70%] overflow-hidden bg-gray-200">
                  <img src={img} alt="Przedszkole w Sianowie" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 p-4 rounded-full text-[#0f5f53] shadow-lg"><ZoomIn size={22} /></span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-xs font-bold text-[#cca565] uppercase tracking-wider block mb-2">Mycie okien po budowie</span>
                  <h4 className="font-sans text-base md:text-lg font-bold text-[#0f5f53]">Sianowo, Przedszkole - Kadry realizacji foto {idx + 1}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizacja 2: Mieszkania Pokazowe */}
      <section id="realizacje-mieszkania" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          <div className="mb-14">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-2 block">REALIZACJA 2</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0f5f53] mb-4 leading-tight">Przygotowanie mieszkań pokazowych</h2>
            <div className="w-16 h-[2px] bg-[#cca565] mb-4"></div>
            <p className="text-[#5e6b7e] text-base max-w-xl font-normal">Kompleksowe przygotowanie mieszkań w nowo wybudowanym budynku deweloperskim.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {realizationsList[1].images.map((img, idx) => (
              <div 
                key={idx} 
                className="bg-[#f9f9f8] rounded-3xl overflow-hidden shadow-[0_8px_25px_rgba(15,95,83,0.02)] border border-[#0f5f53]/5 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveImage({ src: img, title: "Przygotowanie mieszkań pokazowych", category: "Wnętrza deweloperskie" })}
              >
                <div className="relative pt-[75%] overflow-hidden bg-gray-200">
                  <img src={img} alt="Mieszkanie pokazowe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 p-3 rounded-full text-[#0f5f53] shadow-lg"><ZoomIn size={18} /></span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-[11px] font-bold text-[#cca565] uppercase tracking-wider block mb-1">Mieszkanie pokazowe</span>
                  <h4 className="font-sans text-xs md:text-sm font-bold text-[#0f5f53]">Pokój pokazowy - Zdjęcie {idx + 1}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizacja 3: Pod Wynajem */}
      <section id="realizacje-wynajem" className="py-24 md:py-32 bg-[#f9f9f8]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          <div className="mb-14">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-2 block">REALIZACJA 3</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0f5f53] mb-4 leading-tight">Mieszkanie pod wynajem</h2>
            <div className="w-16 h-[2px] bg-[#cca565] mb-4"></div>
            <p className="text-[#5e6b7e] text-base max-w-xl font-normal">Kompleksowe czyszczenie i odświeżenie lokali dążące do standardu premium dla nowych najemców.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realizationsList[2].images.map((img, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(15,95,83,0.03)] border border-[#0f5f53]/5 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveImage({ src: img, title: "Mieszkanie pod wynajem", category: "Standard pod klucz" })}
              >
                <div className="relative pt-[70%] overflow-hidden bg-gray-200">
                  <img src={img} alt="Mieszkanie pod wynajem" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 p-4 rounded-full text-[#0f5f53] shadow-lg"><ZoomIn size={22} /></span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-xs font-bold text-[#cca565] uppercase tracking-wider block mb-2">Przygotowanie pod wynajem</span>
                  <h4 className="font-sans text-base md:text-lg font-bold text-[#0f5f53]">Wnętrze lokalu - Kadry foto {idx + 1}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 – DLACZEGO MY */}
      <section id="dlaczego-my" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-20 md:mb-24">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-4 block">NASZE ATUTY</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f5f53] mb-6 leading-tight">Dlaczego wybrać EFEKT?</h2>
            <div className="w-20 h-[3px] bg-[#cca565] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-[#5e6b7e] max-w-2xl mx-auto font-normal">
              Dbamy o każdy szczegół realizacji, a zaufanie naszych Klientów budujemy na solidnych fundamentach i profesjonalizmie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Atut 1 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Profesjonalna chemia</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Używamy wyłącznie bezpiecznych, certyfikowanych środków o najwyższej skuteczności.</p>
            </div>

            {/* Atut 2 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Layers size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Nowoczesny sprzęt</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Pracujemy na zaawansowanych odkurzaczach przemysłowych oraz maszynach czyszczących.</p>
            </div>

            {/* Atut 3 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Terminowość</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Zawsze zjawiamy się punktualnie i realizujemy powierzone zadania w ustalonym czasie.</p>
            </div>

            {/* Atut 4 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Dokładność</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Zwracamy uwagę na detale, których inni nie zauważają. Perfekcja to nasz standard.</p>
            </div>

            {/* Atut 5 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Award size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Doświadczenie</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Lata pracy w branży pozwalają nam radzić sobie z najtrudniejszymi zabrudzeniami.</p>
            </div>

            {/* Atut 6 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Zap size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Szybkie terminy</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Działamy dynamicznie i jesteśmy w stanie szybko rozpocząć realizację zlecenia.</p>
            </div>

            {/* Atut 7 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Najlepsze ceny</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Oferujemy znakomity stosunek najwyższej jakości usług do konkurencyjnych cen.</p>
            </div>

            {/* Atut 8 */}
            <div className="bg-[#f9f9f8] p-10 rounded-[28px] border border-[#0f5f53]/[0.02] text-center hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/25 transition-all duration-300">
              <div className="w-16 h-16 bg-[#cca565]/10 text-[#cca565] rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart size={26} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-bold text-[#0f5f53] mb-3">Zadowoleni klienci</h4>
              <p className="text-sm text-[#5e6b7e] leading-relaxed">Zaufanie setek zadowolonych osób prywatnych oraz firm to nasza najlepsza wizytówka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 – OBSZAR DZIAŁANIA */}
      <section id="obszar" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="text-center">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-4 block">ZASIĘG DZIAŁANIA</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f5f53] mb-6 leading-tight">Gdzie dojeżdżamy?</h2>
            <div className="w-20 h-[3px] bg-[#cca565] mx-auto mb-6"></div>
            <p className="text-[#5e6b7e] text-base leading-[1.8] mb-12 font-normal max-w-2xl mx-auto">
              Nasza baza operacyjna znajduje się w Koszalinie, ale z przyjemnością dojeżdżamy do klientów w pasie nadmorskim oraz okolicznych miejscowościach do 50 km.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-[#f9f9f8] p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#0f5f53]/5 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565]"></span>
                Koszalin
              </div>
              <div className="bg-[#f9f9f8] p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#0f5f53]/5 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565]"></span>
                Mielno
              </div>
              <div className="bg-[#f9f9f8] p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#0f5f53]/5 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565]"></span>
                Sarbinowo
              </div>
              <div className="bg-[#f9f9f8] p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#0f5f53]/5 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565]"></span>
                Świdwin
              </div>
              <div className="bg-[#f9f9f8] p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#0f5f53]/5 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565]"></span>
                Ustronie Morskie
              </div>
              <div className="bg-[#f9f9f8] p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#0f5f53]/5 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565]"></span>
                Białogard
              </div>
              <div className="bg-[#f9f9f8] p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#0f5f53]/5 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565]"></span>
                Chłopy
              </div>
              <div className="bg-[#cca565]/10 p-5.5 rounded-2xl font-bold text-sm text-[#0f5f53] border border-[#cca565]/20 flex items-center justify-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cca565] pulse-green"></span>
                Okolice do 50 km
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 – DUŻE CTA */}
      <section className="bg-gradient-to-r from-[#0f5f53] to-[#072e28] text-white py-24 md:py-32 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(204,165,101,0.06),transparent_50%)]"></div>
        <div className="max-w-[1360px] mx-auto px-6 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] font-bold text-white mb-6 leading-tight">
            Potrzebujesz profesjonalnego sprzątania?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-normal">
            Przygotujemy bezpłatną wycenę i dobierzemy najlepsze rozwiązanie dla Twojej nieruchomości.
          </p>
          <div className="mt-6">
            <a href="tel:+48535090691" className="inline-flex items-center gap-4 text-3xl sm:text-4xl md:text-[44px] font-black text-[#cca565] hover:text-white transition-all transform hover:scale-105">
              <Phone size={38} strokeWidth={2.5} className="text-[#cca565]" /> 535 090 691
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 11 – KONTAKT (Wysokiej klasy, wyśrodkowany, elegancki) */}
      <section id="kontakt" className="py-24 md:py-32 bg-[#f9f9f8]">
        <div className="max-w-[1000px] mx-auto px-6">
          
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[3px] text-[#cca565] mb-4 block">KONTAKT</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f5f53] mb-6 leading-tight">Skontaktuj się z nami</h2>
            <div className="w-20 h-[3px] bg-[#cca565] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-[#5e6b7e] max-w-xl mx-auto font-normal">
              Jesteśmy do Twojej dyspozycji. Zadzwoń lub napisz, a odpowiemy na wszystkie pytania i ustalimy dogodny termin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tel Box */}
            <div className="bg-white p-10 rounded-[30px] shadow-[0_10px_35px_rgba(15,95,83,0.03)] border border-[#0f5f53]/5 text-center hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#0f5f53]/5 text-[#0f5f53] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xs font-extrabold text-[#5e6b7e] uppercase tracking-wider mb-2">Telefon</h3>
              <p><a href="tel:+48535090691" className="text-lg md:text-xl font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">+48 535 090 691</a></p>
            </div>

            {/* Email Box */}
            <div className="bg-white p-10 rounded-[30px] shadow-[0_10px_35px_rgba(15,95,83,0.03)] border border-[#0f5f53]/5 text-center hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#0f5f53]/5 text-[#0f5f53] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xs font-extrabold text-[#5e6b7e] uppercase tracking-wider mb-2">Email</h3>
              <p><a href="mailto:biuro.cleaneffect@gmail.com" className="text-base md:text-lg font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors break-all">biuro.cleaneffect@gmail.com</a></p>
            </div>

            {/* Facebook Box */}
            <div className="bg-white p-10 rounded-[30px] shadow-[0_10px_35px_rgba(15,95,83,0.03)] border border-[#0f5f53]/5 text-center hover:-translate-y-2 hover:shadow-xl hover:border-[#cca565]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#0f5f53]/5 text-[#0f5f53] rounded-full flex items-center justify-center mx-auto mb-6">
                <Facebook size={24} />
              </div>
              <h3 className="text-xs font-extrabold text-[#5e6b7e] uppercase tracking-wider mb-2">Facebook</h3>
              <p><a href="https://www.facebook.com/profile.php?id=61559910245419" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold text-[#0f5f53] hover:text-[#cca565] transition-colors">Profil EFEKT</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM LIGHTBOX (React-driven state modal) */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-[#072e28]/95 backdrop-blur-xl z-[2000] flex items-center justify-center p-4 md:p-10 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-[#cca565] hover:text-[#0f5f53] flex items-center justify-center text-2xl font-bold transition-all"
            onClick={() => setActiveImage(null)}
          >
            &times;
          </button>
          
          <div 
            className="max-w-[95%] max-h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.title} 
              className="max-w-full max-h-[70vh] object-contain block mx-auto bg-gray-100" 
            />
            <div className="p-6 md:p-8 text-center bg-white border-t border-gray-100">
              <span className="text-xs font-extrabold text-[#cca565] uppercase tracking-wider block mb-1">{activeImage.category}</span>
              <h4 className="font-display text-xl font-bold text-[#0f5f53]">{activeImage.title}</h4>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#072e28] text-white/70 py-20 border-t border-white/5 font-normal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 pb-16 border-b border-white/10 mb-12">
            
            <div className="lg:col-span-5">
              <h4 className="font-display text-2xl font-bold text-white mb-6">
                EFEKT<span className="text-[#cca565]">.</span>
              </h4>
              <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
                Świadczymy najwyższej jakości usługi sprzątające i porządkowe na terenie Koszalina i okolic do 50 km. Zaufanie i perfekcja w każdym calu.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Nawigacja</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><a href="#o-nas" className="hover:text-[#cca565] transition-colors">O nas</a></li>
                <li><a href="#uslugi" className="hover:text-[#cca565] transition-colors">Usługi</a></li>
                <li><a href="#budowa" className="hover:text-[#cca565] transition-colors">Sprzątanie po budowie</a></li>
                <li><a href="#oproznianie" className="hover:text-[#cca565] transition-colors">Opróżnianie</a></li>
                <li><a href="#wspolnoty" className="hover:text-[#cca565] transition-colors">Wspólnoty</a></li>
                <li><a href="#dlaczego-my" className="hover:text-[#cca565] transition-colors">Dlaczego my</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Dane Kontaktowe</h4>
              <div className="flex flex-col gap-4 text-sm">
                <p><strong>Lokalizacja:</strong> Koszalin</p>
                <p><strong>Telefon:</strong> <a href="tel:+48535090691" className="text-[#cca565] font-bold hover:underline">+48 535 090 691</a></p>
                <p><strong>Email:</strong> <a href="mailto:biuro.cleaneffect@gmail.com" className="text-[#cca565] font-bold hover:underline">biuro.cleaneffect@gmail.com</a></p>
                <p><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61559910245419" target="_blank" rel="noopener noreferrer" className="text-[#cca565] font-bold hover:underline">Profil Firmowy</a></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-white/50">
            <p>&copy; 2026 Firma Sprzątająca EFEKT. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
