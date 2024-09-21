import Link from "next/link";
import React from "react";

export default function LinkItem({ href, icon: Icon, text, badge }) {
  return (
    <div>
      <li>
        <Link
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700   "
          href={href}
        >
          {" "}
          <Icon className="mr-3" />
          <span className="flex me-3">{text}</span>
          {badge && <span className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge.color} ${ badge.darkColor} `}>{badge.text}</span>}
        </Link>
      </li>
    </div>
  );
}
