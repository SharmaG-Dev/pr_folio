"use client";
import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "./container";

export default function SocialMedia() {
  return (
    <Container>
      <div className="flex items-center flex-col justify-center gap-5 py-9 md:py-16">
        <h5 className="text-sm">Connect with me on social media:</h5>
        <div className="flex items-center justify-center gap-5">
          <Link href="https://facebook.com">
            <Instagram />
          </Link>
          <Link href="https://facebook.com">
            <Facebook />
          </Link>
          <Link href="https://facebook.com">
            <Twitter />
          </Link>
        </div>
      </div>
    </Container>
  );
}
