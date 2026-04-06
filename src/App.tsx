import { motion } from "motion/react";
import { Phone, MapPin, Clock, Calendar, ChevronRight, Star, Shield, Heart } from "lucide-react";

const services = [
  {
    title: "Yleishammashoito",
    description: "Kattavat tarkastukset, paikkaukset ja hammaskiven poisto.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Erikoishammashoito",
    description: "Vaativammat toimenpiteet ja asiantunteva hoito.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Ennaltaehkäisy",
    description: "Neuvontaa ja ohjeistusta suun terveyden ylläpitoon.",
    icon: <Heart className="w-6 h-6" />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-teal-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                <span className="font-serif text-2xl font-bold italic">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold leading-none tracking-tight">Paula Ohtamaa</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Hammaslääkäri</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#palvelut" className="hover:text-teal-600 transition-colors">Palvelut</a>
              <a href="#meistä" className="hover:text-teal-600 transition-colors">Meistä</a>
              <a href="#yhteystiedot" className="hover:text-teal-600 transition-colors">Yhteystiedot</a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="tel:0405464816" 
                className="hidden sm:flex items-center gap-2 text-teal-700 font-semibold text-sm bg-teal-50 px-4 py-2 rounded-full hover:bg-teal-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                040 5464816
              </a>
              <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-95">
                Varaa aika
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  Vastaanotto avoinna
                </div>
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                  Terve hymy <br />
                  <span className="italic text-teal-600">alkaa täältä.</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
                  Hammaslääkäri Paula Ohtamaa tarjoaa asiantuntevaa ja lempeää hammashoitoa Helsingin sydämessä. Simonkatu 6, 00100 Helsinki.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 group">
                    Varaa aikasi nyt
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="#yhteystiedot" 
                    className="px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                    Katso sijainti
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
                    alt="Modern dental clinic"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent" />
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden sm:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">4.9/5 Arvosana</p>
                      <p className="text-xs text-slate-500">Tyytyväiset asiakkaat</p>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-600/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-600/5 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="palvelut" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Asiantuntevat palvelut</h2>
              <p className="text-slate-600">Tarjoamme laajan valikoiman hammashoidon palveluita aina perushoidosta vaativampiin toimenpiteisiin.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-[2rem] border border-slate-100 hover:border-teal-100 hover:bg-teal-50/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="meistä" className="py-24 bg-[#FDFCFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=2070" 
                    alt="Paula Ohtamaa"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-4xl md:text-5xl mb-8">Paula Ohtamaa</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Olen toiminut hammaslääkärinä Helsingissä jo useiden vuosien ajan. Työssäni minulle on tärkeintä asiakkaan kohtaaminen ja kivuton, laadukas hoito.
                  </p>
                  <p>
                    Vastaanottoni sijaitsee Simonkadulla, aivan Kampin ja rautatieaseman läheisyydessä. Käytämme uusinta teknologiaa ja noudatamme tiukkoja hygieniastandardeja varmistaaksemme parhaan mahdollisen lopputuloksen.
                  </p>
                  <div className="pt-4 grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-2xl font-serif font-bold text-teal-600">15+</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Vuoden kokemus</p>
                    </div>
                    <div>
                      <p className="text-2xl font-serif font-bold text-teal-600">5000+</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Hoidettua potilasta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="yhteystiedot" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] overflow-hidden text-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-20">
                  <h2 className="font-serif text-4xl md:text-5xl mb-12">Tervetuloa <br />vastaanotolle</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Osoite</p>
                        <p className="text-slate-400">Simonkatu 6, 00100 Helsinki</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Puhelin</p>
                        <a href="tel:0405464816" className="text-slate-400 hover:text-white transition-colors">040 5464816</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Aukioloajat</p>
                        <p className="text-slate-400">Ma-To: 08:00 - 16:00</p>
                        <p className="text-slate-400">Pe: 08:00 - 14:00</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-12 w-full bg-teal-500 text-white py-4 rounded-2xl font-bold hover:bg-teal-400 transition-all flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Varaa aika verkossa
                  </button>
                </div>
                
                <div className="relative min-h-[400px] bg-slate-800">
                  {/* Simulated Map */}
                  <div className="absolute inset-0 opacity-50 grayscale">
                    <img 
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2066" 
                      alt="Map background"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-teal-500 rounded-full animate-ping absolute -top-1 -left-1 opacity-20" />
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <p className="text-sm font-medium">Sijainti Kampin sydämessä</p>
                    <p className="text-xs text-slate-400 mt-1">Helppo saapua julkisilla kulkuvälineillä.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                <span className="font-serif text-lg font-bold italic">P</span>
              </div>
              <span className="font-serif font-semibold">Hammaslääkäri Paula Ohtamaa</span>
            </div>
            
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Paula Ohtamaa. Kaikki oikeudet pidätetään.
            </div>

            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-teal-600 transition-colors">Tietosuoja</a>
              <a href="#" className="hover:text-teal-600 transition-colors">Saavutettavuus</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
