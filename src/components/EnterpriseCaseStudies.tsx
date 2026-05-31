"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EnterpriseCaseStudies() {
  const caseStudies = [
    {
      id: "INT-01",
      title: "B2C Profile Replication (SAP CIAM to MDI)",
      role: "Integration Engineer",
      scenario: "Cloud-to-Cloud API Mapping",
      description: "Architected an automated identity routing pipeline. The iFlow intercepts incoming JSON payloads from SAP Customer Data Cloud (CIAM) upon user registration, maps the parameters to enterprise standards, and converts them into compliance-ready XML structures for SAP Master Data Integration (MDI).",
      impact: "Eliminated manual IT onboarding risks and data entry errors.",
      techStack: ["SAP Integration Suite", "OData Adapter", "JSON to XML Converter", "Groovy Script"],
      modular: true,
      image: "/portfolio/Portfolio 1.1.png"
    },
    {
      id: "INT-02",
      title: "Secure Legacy Bridging (SFTP CSV to SAP IDoc)",
      role: "Integration Engineer",
      scenario: "Flat-File Transformation",
      description: "Designed a secure polling mechanism to retrieve legacy flat files (CSV) from a third-party vendor's SFTP server. The integration parses the raw data, applies business logic transformations, and maps the output into a standardized IDoc XML format before securely posting it to SAP ECC via SOAP Web Services.",
      impact: "Automated legacy vendor data sync without exposing core ERP ports.",
      techStack: ["SFTP Adapter", "IDoc Adapter", "Message Mapping", "ProcessDirect"],
      modular: false,
      image: "/portfolio/Portfolio 1.2.png"
    },
    {
      id: "INT-03",
      title: "Fail-Safe Event Routing (Dead-Letter Queuing)",
      role: "Network Operations",
      scenario: "Asynchronous Message Safeguards",
      description: "Implemented high-volume asynchronous message processing utilizing Java Message Service (JMS) queues. Configured retry frameworks and dead-letter queues so that if a target downstream system goes offline, incoming production data payloads are safely cached and automatically retried upon system recovery.",
      impact: "Zero dropped payloads during target system downtime or network blips.",
      techStack: ["JMS Adapter", "AMQP", "Exception Subprocess", "Event Mesh"],
      modular: false,
      image: "/portfolio/Portfolio 1.3.png"
    }
  ];

  return (
    <section className="w-full border-y border-white/5 bg-white/1 backdrop-blur-[2px] py-16 my-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 opacity-90">
          <div className="flex items-center gap-3 mb-4 opacity-50">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[9px] font-mono text-white uppercase tracking-[0.5em]">
              ARCHITECTURE_BLUEPRINTS_V1
            </span>
          </div>
          <h3 className="text-3xl font-bold text-white tracking-wide">Enterprise Integration Scenarios</h3>
          <p className="text-white/50 mt-3 max-w-2xl text-sm leading-relaxed">
            Documented integration flows mapped directly to standard SAP ecosystem requirements. Built with a focus on fail-safe data routing and zero-trust internal network exposure.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/3 backdrop-blur-md border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/5 hover:border-white/20 transition-all duration-500 group"
            >
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-amber-500/80 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                    {study.id}
                  </span>
                  {study.modular && (
                    <span className="text-[9px] font-bold text-emerald-500/80 tracking-widest uppercase bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                      Process_Direct Enabled
                    </span>
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-white/90 mb-2 leading-snug group-hover:text-white transition-colors">
                  {study.title}
                </h4>
                <div className="text-[10px] font-mono text-white/40 mb-5 uppercase tracking-[0.2em]">
                  {study.scenario}
                </div>
                
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="mb-6 pt-5 border-t border-white/10">
                  <span className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] mb-2">
                    Business Impact
                  </span>
                  <p className="text-xs text-white/80 font-medium">
                    {study.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Content */}
              <div className="order-1 lg:order-2 w-full h-full min-h-[250px] relative rounded-lg overflow-hidden border border-white/10 group-hover:border-amber-500/30 transition-colors duration-500 bg-black/40 flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none" />
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-auto object-contain max-h-[400px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}