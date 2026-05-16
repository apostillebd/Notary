"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Smile, Send } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // বর্তমান সময় বের করার জন্য
  useEffect(() => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setCurrentTime(time);
  }, [isOpen]);

  // আপনার দেওয়া হোয়াটসঅ্যাপ নাম্বারটি (কান্ট্রি কোডসহ)
  const phoneNumber = "+880 1820 196 166";

  const handleSend = () => {
    const text = message.trim() || "Hello, I would like to know more about your notary services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* চ্যাট পপআপ উইজেট */}
      {isOpen && (
        <div className="mb-4 w-[340px] rounded-lg bg-white shadow-2xl overflow-hidden border border-gray-200 transition-all duration-300 origin-bottom-right flex flex-col">
          
          {/* Header Section */}
          <div className="bg-[#4fac87] px-4 py-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* WhatsApp SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.3-.15-1.265-.465-2.403-1.485-.888-.795-1.484-1.77-1.659-2.07-.173-.3-.018-.462.13-.611.134-.133.301-.347.451-.52.149-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.295-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.722 2.016-1.42.248-.697.248-1.295.173-1.42-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <h3 className="font-medium text-[16px]">Let's chat on WhatsApp</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close"
            >
              <ChevronDown size={20} strokeWidth={3} />
            </button>
          </div>

          {/* Chat Body Section with WhatsApp Pattern */}
          <div 
            className="bg-[#e5ddd5] p-5 h-72 flex flex-col relative"
            style={{ 
              backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
             {/* Incoming Message Bubble */}
             <div className="bg-white text-gray-800 p-3 pb-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative">
                {/* Tail for the message bubble */}
                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
                <p className="text-[15px] leading-snug">How can I help you? :)</p>
                <p className="text-[11px] text-gray-400 text-left mt-1">{currentTime || "23:13"}</p>
             </div>
          </div>

          {/* Input Section */}
          <div className="p-3 bg-[#f0f0f0] flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full flex items-center px-3 py-2 shadow-sm">
              <Smile size={22} className="text-[#a0a0a0] mr-2" />
              <input
                type="text"
                placeholder="Write your message..."
                className="flex-1 text-[15px] focus:outline-none bg-transparent placeholder-gray-400 text-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
            </div>
            <button
              onClick={handleSend}
              className="bg-[#b0bec5] text-white p-2.5 rounded-full hover:bg-[#9aa8b1] transition-colors flex items-center justify-center shadow-sm"
              aria-label="Send Message"
            >
              <Send size={18} className="ml-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Open WhatsApp Chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.3-.15-1.265-.465-2.403-1.485-.888-.795-1.484-1.77-1.659-2.07-.173-.3-.018-.462.13-.611.134-.133.301-.347.451-.52.149-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.295-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.722 2.016-1.42.248-.697.248-1.295.173-1.42-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </button>
      )}
    </div>
  );
}