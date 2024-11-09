"use client";
import Image from "next/image";
import { MenuItem } from "@/types/MenuItem";
import { useEffect, useRef, useState } from "react";
import { Locale } from "@/i18n/routing";

interface Props {
  menuItems: MenuItem[];
  onSelect: (value: Locale) => void;
  defaultSelected?: number | string; // string in case it is value
  isPending?: boolean;
}

export default function Dropdown({
  menuItems,
  onSelect,
  defaultSelected = 0,
  isPending = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    typeof defaultSelected === "string"
      ? menuItems.findIndex((e) => e.value == defaultSelected)
      : defaultSelected
  );

  const toggleDropdown = () => {
    if (isPending) return;
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index: number) => {
    setIsOpen(false);
    setSelected(index);
    onSelect(menuItems[index].value as Locale);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative w-32" ref={ref}>
      {/* Dropdown button */}
      <button
        id="dropdownDefaultButton"
        className="w-full justify-between text-center inline-flex items-center py-2"
        type="button"
        onClick={toggleDropdown}
        data-dropdown-toggle="dropdown"
      >
        {menuItems[selected] && menuItems[selected].icon && (
          <Image
            className="mr-2"
            src={menuItems[selected].icon}
            alt="flag icon"
            width={16}
            height={16}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        )}
        <p className="text-nowrap">
          {menuItems[selected] && menuItems[selected].label}
        </p>
        <svg
          className={`w-2.5 h-2.5 ms-3 ${isOpen ? "transform rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        className={`${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-top transition duration-500 w-full absolute top-full left-0 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleMenuItemClick(index)}
              className="flex flex-row flex-nowrap justify-start items-center w-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            >
              {item.icon && (
                <Image
                  className="mr-2"
                  src={item.icon}
                  alt="flag icon"
                  width={16}
                  height={16}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              )}
              <button type="button" className="text-left text-nowrap">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
