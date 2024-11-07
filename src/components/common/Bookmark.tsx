'use client';

import { useState } from 'react';
import { FiBookmark } from 'react-icons/fi';

export default function Bookmark() {
  const [marked, setMarked] = useState(false);
  return (
    <FiBookmark
      onClick={() => setMarked(!marked)}
      className={`w-4 h-4 ml-2 cursor-pointer ${marked && 'text-blue-600'}`}
    />
  );
}
