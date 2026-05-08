import { hairLengths, type HairLengthId } from "../../features/services/catalog";

const hairLengthMask: Record<HairLengthId, string> = {
  short: "68%",
  medium: "50%",
  long: "30%",
  extra_long: "12%",
};

export function MannequinEngine({
  selectedLength,
  onChange,
}: {
  selectedLength: HairLengthId;
  onChange: (length: HairLengthId) => void;
}) {
  return (
    <div className="rounded-lg border border-pearl/10 bg-white/[0.035] p-5">
      <div className="relative mx-auto h-[360px] w-[220px] sm:h-[430px] sm:w-[260px]">
        <svg viewBox="0 0 260 460" className="h-full w-full" role="img" aria-label="Manequim de comprimento capilar">
          <defs>
            <linearGradient id="hairGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F3E5AB" />
              <stop offset="46%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B76E79" />
            </linearGradient>
          </defs>
          <path d="M85 122 C72 190 78 306 96 426 C118 444 142 444 164 426 C182 306 188 190 175 122 C154 96 106 96 85 122Z" fill="url(#hairGradient)" opacity="0.92" style={{ clipPath: `inset(0 0 ${hairLengthMask[selectedLength]} 0)`, transition: "clip-path 420ms cubic-bezier(0.22, 1, 0.36, 1)" }} />
          <circle cx="130" cy="82" r="46" fill="#F8F4EF" opacity="0.95" />
          <path d="M88 88 C94 35 166 35 172 88 C158 68 102 68 88 88Z" fill="#15110F" />
          <path d="M100 170 C108 210 116 238 130 260 C144 238 152 210 160 170" fill="none" stroke="#F8F4EF" strokeOpacity="0.35" strokeWidth="2" />
          <path d="M82 82 C58 146 68 292 90 420" fill="none" stroke="#B76E79" strokeOpacity="0.48" strokeWidth="4" />
          <path d="M178 82 C202 146 192 292 170 420" fill="none" stroke="#D4AF37" strokeOpacity="0.42" strokeWidth="4" />
        </svg>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {hairLengths.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={[
              "min-h-12 rounded-full border px-4 font-ui text-sm font-semibold transition",
              selectedLength === item.id
                ? "border-gold bg-gold text-black"
                : "border-pearl/12 text-pearl/72 hover:border-gold hover:text-gold",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
