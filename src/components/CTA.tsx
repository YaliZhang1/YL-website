import { ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";
import { FadeInWhenVisible,animations } from "@/components/FadeInWhenVisible";

export function CTA (){
  return (
    <>
      <section className="py-20 relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-primary dark:from-blue-950 dark:to-black" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl relative z-10 text-center">
          <FadeInWhenVisible variants={animations.fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible variants={animations.fadeLeft}>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our
              expertise and Nordic approach to technology.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible variants={animations.fadeUp}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
              >
                <span>Request Early Access</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/intelligent-robot-system"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
};
