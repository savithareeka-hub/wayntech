import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { ArrowRight, Award, Sparkles, Users } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Wayntech - Custom printing and personalized products</title>
        <meta name="description" content="Your trusted partner for custom printing, ID cards, trophies, certificates, and personalized products. Quality craftsmanship for every occasion." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Custom printing solutions for your business
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  From ID cards to trophies, we bring your vision to life with premium quality products and personalized service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                    <Link to="/products">
                      Browse products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">
                      Get in touch
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why choose Wayntech
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We deliver quality products with attention to detail and customer satisfaction
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Premium quality
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use only the finest materials and latest printing technology to ensure your products exceed expectations.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Custom designs
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every product is tailored to your specific needs with unlimited customization options and design support.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Dedicated support
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our team is here to guide you through every step, from design consultation to final delivery.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Fast turnaround
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We understand deadlines matter. Get your custom products delivered on time, every time.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to get started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Explore our full range of products and find the perfect solution for your needs
                </p>
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/products">
                    View all products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
