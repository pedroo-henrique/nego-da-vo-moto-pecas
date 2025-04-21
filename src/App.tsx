import { Phone, Wrench, PenTool as Tools, Truck, Bike as Motorcycle, Clock, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import banner from './img/banner.png';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="bg-black border-b border-amber-600">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Motorcycle className="text-amber-500 mr-2" size={32} />
            <h1 className="text-2xl md:text-3xl font-bold text-amber-500">NEGO DA VÓ <span className="text-white">MOTO PEÇAS</span></h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-amber-500 transition-colors">Serviços</a>
            <a href="#rescue" className="hover:text-amber-500 transition-colors">Resgate</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>
          <div className="flex items-center">
            <Phone className="text-amber-500 mr-2" size={20} />
            <span className="text-amber-500 font-semibold">(62) 62 99915-9351</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="relative h-[600px]">
          <img 
            src={banner}
            alt="NEGO DA VÓ MOTO PEÇAS" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-6xl md:text-7xl font-bold mb-8">Sua moto em <span className="text-amber-500">mãos experientes</span></h2>
              <p className="text-2xl md:text-3xl mb-12">Especialistas em manutenção, reparos e peças para todos os tipos de motocicletas.</p>
              <div className="flex flex-col sm:flex-row gap-8">
                <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-black text-xl md:text-2xl font-bold py-5 px-10 rounded-md transition-colors inline-flex items-center justify-center">
                  <Phone className="mr-4" size={28} />
                  Agendar Serviço
                </a>
                <a href="#rescue" className="border-3 border-amber-500 hover:bg-amber-500 hover:text-black text-amber-500 text-xl md:text-2xl font-bold py-5 px-10 rounded-md transition-colors inline-flex items-center justify-center">
                  <Truck className="mr-4" size={28} />
                  Serviço de Resgate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos <span className="text-amber-500">Serviços</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Oferecemos uma ampla gama de serviços para manter sua motocicleta em perfeitas condições.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600 hover:border-amber-500 transition-colors">
              <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Wrench className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Manutenção Preventiva</h3>
              <p className="text-gray-400">Revisões periódicas para garantir o bom funcionamento e prolongar a vida útil da sua moto.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600 hover:border-amber-500 transition-colors">
              <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Tools className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Reparos Mecânicos</h3>
              <p className="text-gray-400">Diagnóstico e reparo de problemas mecânicos com equipamentos de última geração.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600 hover:border-amber-500 transition-colors">
              <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Motorcycle className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Troca de Peças</h3>
              <p className="text-gray-400">Substituição de peças originais e paralelas com garantia de qualidade.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600 hover:border-amber-500 transition-colors">
              <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Truck className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Serviço de Resgate</h3>
              <p className="text-gray-400">Resgate de motocicletas com problemas em qualquer lugar da cidade.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600 hover:border-amber-500 transition-colors">
              <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Atendimento Rápido</h3>
              <p className="text-gray-400">Serviços expressos para pequenos reparos e manutenções simples.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600 hover:border-amber-500 transition-colors">
              <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Atendimento a Domicílio</h3>
              <p className="text-gray-400">Para sua comodidade, também oferecemos serviços de manutenção em sua residência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rescue Section */}
      <section id="rescue" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Serviço de resgate de motos" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviço de <span className="text-amber-500">Resgate</span></h2>
              <p className="text-gray-400 mb-6">Problemas com sua moto? Não se preocupe! Oferecemos serviço de resgate rápido e eficiente para você não ficar na mão.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-amber-500 p-2 rounded-full mr-4">
                    <Truck className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Resgate 24 horas</h3>
                    <p className="text-gray-400">Atendimento a qualquer hora do dia ou da noite.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500 p-2 rounded-full mr-4">
                    <MapPin className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Cobertura em toda a cidade</h3>
                    <p className="text-gray-400">Atendemos em qualquer região, garantindo que você não fique desamparado.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500 p-2 rounded-full mr-4">
                    <Clock className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Tempo de resposta rápido</h3>
                    <p className="text-gray-400">Nossa equipe está sempre pronta para atender sua chamada com agilidade.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-amber-600">
                <h3 className="text-xl font-bold mb-2 text-amber-500">Ligue agora para resgate:</h3>
                <div className="flex items-center">
                  <Phone className="text-amber-500 mr-2" size={24} />
                  <span className="text-2xl font-bold">(62) 62 99915-9351</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos <span className="text-amber-500">clientes dizem</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A satisfação dos nossos clientes é nossa maior recompensa.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mb-4">"Excelente atendimento! Minha moto estava com problemas e eles resolveram rapidamente. Preço justo e serviço de qualidade."</p>
              <p className="font-bold">Carlos Silva</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mb-4">"Precisei do serviço de resgate e eles foram super rápidos. Em menos de 30 minutos estavam no local. Recomendo!"</p>
              <p className="font-bold">Ana Oliveira</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-600">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mb-4">"Profissionais competentes e honestos. Fazem o serviço com qualidade e explicam tudo o que foi feito. Minha moto nunca esteve tão bem!"</p>
              <p className="font-bold">Marcos Santos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="text-amber-500">Contato</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Estamos prontos para atender você e sua motocicleta com o melhor serviço.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-amber-600">
              <h3 className="text-xl font-bold mb-6 text-amber-500">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-amber-500 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">Telefone</h4>
                    <p className="text-gray-400">(62) 62 99915-9351</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-amber-500 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">E-mail</h4>
                    <p className="text-gray-400">contato@negodavomotopecas.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-amber-500 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">Endereço</h4>
                    <p className="text-gray-400">Itapaci, GO</p>
                    <a 
                      href="https://maps.google.com/maps?q=2CWX%2B38J+Itapaci,+GO" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-600 transition-colors inline-flex items-center mt-2"
                    >
                      Ver no Google Maps
                      <MapPin className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-amber-500 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">Horário de Funcionamento</h4>
                    <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-400">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/negodavomoto/" className="bg-amber-500 p-2 rounded-full text-black hover:bg-amber-600 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-amber-500 p-2 rounded-full text-black hover:bg-amber-600 transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=2CWX%2B38J+Itapaci,+GO&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C2CWX%2B38J+Itapaci,+GO&key=YOUR_GOOGLE_MAPS_API_KEY"
                  alt="Localização da Nego da Vo Moto Peças"
                  className="w-full rounded-lg mb-4"
                />
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.6459002375923!2d-49.55171673210521!3d-14.956808625222955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9342c519dd248b8b%3A0x172d96cb088ff669!2sR.%20Jo%C3%A3o%20Jos%C3%A9%20do%20Couto%2C%20365%20-%20Itapaci%2C%20GO%2C%2076360-000!5e0!3m2!1spt-BR!2sbr!4v1745158365660!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-amber-600">
              <h3 className="text-xl font-bold mb-6 text-amber-500">Envie uma Mensagem</h3>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black border border-gray-700 rounded-md p-3 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black border border-gray-700 rounded-md p-3 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-black border border-gray-700 rounded-md p-3 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-black border border-gray-700 rounded-md p-3 focus:border-amber-500 focus:outline-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-md transition-colors w-full"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-amber-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Motorcycle className="text-amber-500 mr-2" size={24} />
              <h2 className="text-xl font-bold text-amber-500">NEGO DA VÓ <span className="text-white">MOTO PEÇAS</span></h2>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 Nego da Vo Moto Peças. Todos os direitos reservados.</p>
              <p className="text-gray-500 text-sm mt-1">Desenvolvido por Pedro Henrique</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;