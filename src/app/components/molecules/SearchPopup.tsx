"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import gsap from "gsap";

const SearchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  // GSAP animation
  useEffect(() => {
    const el = popupRef.current;
    if (!el) return;

    if (isOpen) {
      gsap.set(el, { display: "block" }); // Show immediately before animating
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.95, y: -10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            inputRef.current?.focus();
          },
        }
      );
    } else {
      gsap.to(el, {
        opacity: 0,
        scale: 0.95,
        y: -10,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <div>
      {/* Trigger input */}
      <div className="relative w-full md:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsOpen(true)}
          disabled={isOpen}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
        />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          isOpen ? "opacity-50 bg-black" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Popup */}
      <div className="container mx-auto">
        <div
          ref={popupRef}
          style={{ display: "none" }}
          className="fixed z-50 top-20 left-0 right-0 mx-auto w-full md:w-1/2 lg:w-1/3 bg-white border border-gray-200 rounded-md shadow-lg px-4 py-6"
        >
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Type your search..."
              className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-md transition duration-200"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
