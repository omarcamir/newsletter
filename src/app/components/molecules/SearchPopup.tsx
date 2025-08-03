"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react"; // Optional icon

const SearchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
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
      {/* overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Popup */}
      {isOpen && (
        <div className="container mx-auto">
          <div
            ref={popupRef}
            className="fixed z-50 left-1/2 transform -translate-x-1/2  mt-2 w-full md:w-1/2 lg:w-1/3 bg-white border border-gray-200 rounded-md shadow-lg px-4 py-6"
          >
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                autoFocus
                placeholder="Type your search..."
                className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-md cursor-pointer transition-all duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPopup;
