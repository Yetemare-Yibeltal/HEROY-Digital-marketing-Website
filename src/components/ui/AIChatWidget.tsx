"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Bot } from "lucide-react";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
}

const quickReplies = [
  "What services do you offer?",
  "How much does a website cost?",
  "Can I book a consultation?",
];

const botResponses: Record<string, string> = {
  default:
    "Thanks for your message! Our team will get back to you shortly. For immediate help, feel free to book a free consultation or browse our services page.",
  services:
    "We offer digital marketing, SEO, web and mobile development, UI/UX design, video editing, graphics design, and AI solutions, all under one roof.",
  pricing:
    "Our websites start from $499, with custom pricing for web apps, mobile apps, and full digital marketing packages. Book a free consultation for an exact quote.",
  consultation:
    "You can book a free 30 minute consultation through our Consultation page, no obligation, just honest advice on your project.",
  contact:
    "You can reach us through the Contact page, by WhatsApp, by Telegram, or by email. We typically respond within 24 hours.",
  team:
    "HEROY is a team of Ethiopian software engineers, designers, video editors, Android developers, and AI developers building digital products together.",
};

function getBotReply(userText: string): string {
  const text = userText.toLowerCase();
  if (text.includes("service")) return botResponses.services;
  if (text.includes("price") || text.includes("cost") || text.includes("pricing"))
    return botResponses.pricing;
  if (text.includes("consult") || text.includes("book"))
    return botResponses.consultation;
  if (text.includes("contact") || text.includes("reach") || text.includes("email"))
    return botResponses.contact;
  if (text.includes("team") || text.includes("who are you") || text.includes("about"))
    return botResponses.team;
  return botResponses.default;
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! I'm the HEROY assistant. Ask me anything about our services, pricing, or how to get started.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotReply(text),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-grad-primary flex items-center justify-center"
        style={{ boxShadow: "0 8px 32px rgba(124,92,255,0.5)" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} className="text-background" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} className="text-background" />
            </motion.div>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent-pink animate-pulse" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-[100] w-[360px] max-w-[calc(100vw-3rem)] h-[480px] glass-strong rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-grad-primary p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Bot size={18} className="text-background" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-background">
                  HEROY Assistant
                </p>
                <p className="text-[10px] text-background/70 flex items-center gap-1">
                  <Sparkles size={10} /> AI Powered, Online
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-grad-primary text-background rounded-br-sm"
                        : "bg-white/5 text-white border border-border rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => sendMessage(reply)}
                    className="text-xs bg-white/5 hover:bg-primary/20 border border-border text-muted hover:text-white px-3 py-1.5 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="p-3 border-t border-border flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-border rounded-full px-4 py-2.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-10 h-10 rounded-full bg-grad-primary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <Send size={16} className="text-background" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}