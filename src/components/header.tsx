import Image from "next/image";

export function Header() {
  return (
    <header>
      <nav className="container py-8 text-foreground-muted">
        <Image
          src="/wows.svg"
          alt="Лого «Мир кораблей»"
          width={143}
          height={36}
          priority
        />
      </nav>
    </header>
  );
}
