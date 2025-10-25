import { motion } from 'framer-motion';
import { 
  Smartphone, Globe, Palette, Search, Shield, Cloud, 
  CheckCircle, ArrowRight, Star, Users, Clock, Award 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android Development', 'React Native & Flutter', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
      price: 'Starting at $3,000',
      duration: '3-6 weeks',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive conversions.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      price: 'Starting at $2,000',
      duration: '2-4 weeks',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media Management', 'Analytics & Reporting'],
      price: 'Starting at $1,500/month',
      duration: 'Ongoing',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions', '24/7 Monitoring'],
      price: 'Starting at $2,500',
      duration: '1-3 weeks',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS & Azure Setup', 'Cloud Migration', 'DevOps Implementation', 'Scalability Planning'],
      price: 'Starting at $4,000',
      duration: '2-5 weeks',
      color: 'from-sky-500 to-blue-600'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '100+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, number: '150+', label: 'Projects Completed' },
    { icon: <Star className="w-8 h-8" />, number: '4.9/5', label: 'Client Rating' },
    { icon: <Clock className="w-8 h-8" />, number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-poppins text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 to-sky-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, we've got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-sky-400 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">{service.price}</div>
                    <div className="text-slate-500 text-sm">{service.duration}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-poppins text-2xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-indigo-600 to-sky-400 text-white px-6 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-sky-500 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your requirements and create a comprehensive project roadmap.' },
              { step: '02', title: 'Design', description: 'Our team creates intuitive wireframes and stunning UI mockups.' },
              { step: '03', title: 'Development', description: 'Expert developers build your solution using cutting-edge technologies.' },
              { step: '04', title: 'Deployment', description: 'We handle deployment and provide ongoing support for your success.' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-sky-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="font-poppins text-xl font-semibold text-slate-800 mb-4">
                  {process.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-sky-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and turn your vision into reality. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;