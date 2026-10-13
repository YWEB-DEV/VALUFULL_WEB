export default function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {shapes[name] ?? shapes.leaf}
    </svg>
  )
}

const shapes = {
  coin: (
    <>
      <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 11.5v9M13.2 13.6h4.2a2 2 0 0 1 0 4H13.2h4.4a2 2 0 0 1 0 4H13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  people: (
    <>
      <circle cx="11" cy="12" r="2.4" fill="currentColor" />
      <circle cx="20" cy="12.5" r="2.1" fill="currentColor" />
      <path d="M6.5 22.5c.6-3 2.6-4.5 4.6-4.5s4 1.5 4.6 4.5M17 22.5c.4-2.4 2-3.7 3.7-3.7 1.8 0 3.3 1.3 3.8 3.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  leaf: (
    <path d="M8 20c8-1 12-8 14-14-6 2-13 6-14 14Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  card: (
    <>
      <rect x="5" y="9" width="22" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="8.5" y="13" width="5" height="4" rx="0.8" fill="currentColor" />
      <path d="M16.5 14.5c1.2 1 1.2 2.5 0 3.5M19 13c2 1.6 2 4.4 0 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  machine: (
    <>
      <rect x="8" y="5" width="16" height="22" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10h8M12 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 22h4l-1 3h-2l-1-3Z" fill="currentColor" />
    </>
  ),
  cycle: (
    <>
      <path d="M8 16a8 8 0 0 1 13-6l1-2 1 5h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 16a8 8 0 0 1-13 6l-1 2-1-5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  balance: (
    <>
      <path d="M6 24h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 20l5-6 4 3 7-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="9" r="1.6" fill="currentColor" />
    </>
  ),
  labour: (
    <>
      <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 11v8M13 16.5 16 19.5 19 16.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  rice: (
    <>
      <path d="M6 16.5h20c-1.2 6.2-5.2 8.5-10 8.5s-8.8-2.3-10-8.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="19" r="1.05" fill="currentColor" />
      <circle cx="16" cy="20.4" r="1.05" fill="currentColor" />
      <circle cx="20" cy="19" r="1.05" fill="currentColor" />
    </>
  ),
  sugar: (
    <>
      <rect x="6.5" y="17.5" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="18.2" y="17.5" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12.4" y="8" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  maize: (
    <>
      <path d="M16 4.5c4.2 3.2 5.4 7.2 5.4 12.2S20.2 26 16 28c-4.2-2-5.4-6.2-5.4-11.3S11.8 7.7 16 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 12.2h6M12.4 16.4h7.2M13 20.6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  beans: (
    <>
      <path d="M11 11.5c-3.4 2.6-3.6 7-.4 8.6 3.2 1.6 6.2-.6 6.2-3.8 0-3.4-2.2-6.8-5.8-4.8Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20.5 12c3.3 2.2 3.8 6.6.8 8.4-3.2 1.8-6.4-.2-6.2-3.6.2-3.6 2-6.6 5.4-4.8Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  oil: (
    <>
      <path d="M13 5.5h6v3.2h1.2a2 2 0 0 1 2 2V22a3.2 3 0 0 1-3.2 3.2h-6A3.2 3 0 0 1 9.8 22V10.7a2 2 0 0 1 2-2H13V5.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 16.2h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  detergent: (
    <>
      <path d="M12.2 7.2h6.2l1.1 3.1H11.1l1.1-3.1Z" fill="currentColor" />
      <rect x="10" y="10.4" width="12.2" height="14.2" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="23.4" cy="9.2" r="1.25" fill="currentColor" />
      <circle cx="25.6" cy="12.2" r="1" fill="currentColor" />
      <circle cx="22.6" cy="13.4" r="0.75" fill="currentColor" />
    </>
  ),
}
