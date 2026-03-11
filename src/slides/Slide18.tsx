import React from 'react';
import { motion } from 'motion/react';
import { Terminal, MonitorPlay, Github, BookOpen, MessageSquare, Star } from 'lucide-react';

export default function Slide18() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-6"
      >
        <img 
          src="https://github.com/timeplus-io/vistral/raw/main/examples/assets/timeplus-vistral_logo_pink.svg" 
          alt="Vistral Logo" 
          className="h-12 mx-auto mb-4"
          referrerPolicy="no-referrer"
        />
        <h1 className="text-[28px] font-semibold text-[#231F2B] mb-2">
          Ready to get started?
        </h1>
        <p className="text-[16px] text-[#514E58] max-w-2xl mx-auto">
          Join us in building the next generation of streaming data visualizations.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
        {/* Install */}
        <motion.a
          href="https://www.npmjs.com/package/@timeplus/vistral"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-2 bg-white border border-[#DAD9DB] text-[#231F2B] rounded-xl p-4 flex items-center justify-between hover:border-[#D53F8C] hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#F7F6F6] p-2.5 rounded-lg group-hover:bg-[#FFF0F7] transition-colors">
              <Terminal className="w-5 h-5 text-[#D53F8C]" />
            </div>
            <div>
              <h3 className="text-[16px] font-semibold mb-0.5">Install via npm</h3>
              <p className="text-[#514E58] text-[13px]">Add Vistral to your React project</p>
            </div>
          </div>
          <div className="bg-[#F7F6F6] px-4 py-2 rounded border border-[#DAD9DB] font-mono text-[14px] text-[#D53F8C] group-hover:border-[#D53F8C] transition-colors">
            npm install @timeplus/vistral
          </div>
        </motion.a>

        {/* Playground */}
        <motion.a
          href="https://timeplus-io.github.io/vistral/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border border-[#DAD9DB] rounded-xl p-4 flex flex-row items-center gap-4 hover:border-[#D53F8C] hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="bg-[#F7F6F6] w-10 h-10 shrink-0 rounded-lg flex items-center justify-center group-hover:bg-[#FFF0F7] transition-colors">
            <MonitorPlay className="w-5 h-5 text-[#231F2B] group-hover:text-[#D53F8C] transition-colors" />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold text-[#231F2B] mb-0.5">Interactive Playground</h3>
            <p className="text-[#514E58] text-[13px] leading-tight">Try out all the examples live in your browser</p>
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/timeplus-io/vistral"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white border border-[#DAD9DB] rounded-xl p-4 flex flex-row items-center gap-4 hover:border-[#D53F8C] hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute top-2 right-3 flex items-center gap-1 text-[#514E58] group-hover:text-[#D53F8C] transition-colors">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-[11px] font-semibold">Star us!</span>
          </div>
          <div className="bg-[#F7F6F6] w-10 h-10 shrink-0 rounded-lg flex items-center justify-center group-hover:bg-[#FFF0F7] transition-colors">
            <Github className="w-5 h-5 text-[#231F2B] group-hover:text-[#D53F8C] transition-colors" />
          </div>
          <div className="pr-12">
            <h3 className="text-[16px] font-semibold text-[#231F2B] mb-0.5">GitHub Repository</h3>
            <p className="text-[#514E58] text-[13px] leading-tight">Check out the code, contribute, and leave a star</p>
          </div>
        </motion.a>

        {/* Blog */}
        <motion.a
          href="https://www.timeplus.com/post/vistral"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white border border-[#DAD9DB] rounded-xl p-4 flex flex-row items-center gap-4 hover:border-[#D53F8C] hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="bg-[#F7F6F6] w-10 h-10 shrink-0 rounded-lg flex items-center justify-center group-hover:bg-[#FFF0F7] transition-colors">
            <BookOpen className="w-5 h-5 text-[#231F2B] group-hover:text-[#D53F8C] transition-colors" />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold text-[#231F2B] mb-0.5">Introduction Blog</h3>
            <p className="text-[#514E58] text-[13px] leading-tight">Read the story behind Vistral and its architecture</p>
          </div>
        </motion.a>

        {/* Slack */}
        <motion.a
          href="https://timeplus.com/slack"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white border border-[#DAD9DB] rounded-xl p-4 flex flex-row items-center gap-4 hover:border-[#D53F8C] hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="bg-[#F7F6F6] w-10 h-10 shrink-0 rounded-lg flex items-center justify-center group-hover:bg-[#FFF0F7] transition-colors">
            <MessageSquare className="w-5 h-5 text-[#231F2B] group-hover:text-[#D53F8C] transition-colors" />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold text-[#231F2B] mb-0.5">Slack Community</h3>
            <p className="text-[#514E58] text-[13px] leading-tight">Join for questions, support, and discussions</p>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
