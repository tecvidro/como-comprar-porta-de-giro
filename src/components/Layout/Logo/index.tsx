import Link from "next/link";

export function Logo() {
  return (
    <div className="size-12 flex">
      <Link href={'/'}>
        <svg className="w-full h-auto" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6.75747L6.65332 0.104145L30.0513 0V6.75747H19.7995L19.9189 26.2852L13.3027 32.6627L13.3625 6.6755L0 6.75747Z" fill="#F5F1EB" />
          <path d="M11.8052 14.0785L0.500183 25.3937V32.2466L11.8052 21.1918" fill="#F5F1EB" />
          <path d="M0.800247 33.5973L11.8551 22.5425V29.6455L1.20038 40L0.800247 33.5973Z" fill="#E35210" />
        </svg>
      </Link>
    </div>
  )
}
