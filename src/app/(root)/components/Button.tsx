"use client";

import React, { type ReactElement } from "react";
import Link from "next/link";
import type { UrlObject } from "url";
import clsx from "clsx";

/** Shared visual props */
type ButtonBaseProps = {
  variant?: "solid" | "outline" | "ghost";
  children?: React.ReactNode;        // ← optional so <Button /> won’t error
  className?: string;
};

/** Native <button> case (no href) */
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children"
>;
export type ButtonLikeProps = ButtonBaseProps &
  NativeButtonProps & {
    href?: undefined; // no href when it's a real <button>
  };

/** Link case (with href) */
export type LinkLikeProps = ButtonBaseProps & {
  href: string | UrlObject; // internal or external
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonLikeProps | LinkLikeProps;

function isExternal(href: string) {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

/** Overloads */
function Button(props: LinkLikeProps): ReactElement;
function Button(props: ButtonLikeProps): ReactElement;
// Implementation
function Button(props: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition shadow-soft";
  const styles =
    {
      solid: "bg-blush-600 text-white hover:opacity-95",
      outline: "border border-slate-300 text-slate-800 hover:bg-slate-50",
      ghost: "text-slate-800 hover:bg-slate-50",
    }[props.variant ?? "solid"];

  const className = clsx(base, styles, props.className);

  // LINK VARIANT
  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, children, onClick } = props;

    if (typeof href === "string" && isExternal(href)) {
      return (
        <a
          href={href}
          className={className}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    const to: UrlObject = typeof href === "string" ? { pathname: href } : href;
    return (
      <Link href={to} className={className} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // BUTTON VARIANT
  const {
    children,
    type = "button",
    disabled,
    onClick,
    name,
    value,
    form,
    autoFocus,
    ...rest
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      name={name}
      value={value}
      form={form}
      autoFocus={autoFocus}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
