"use client";

import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particle-typography";
import { useState } from "react";

const texts = [
	"Sikka",
	"السلام عليكم",
	"Naseem",
	"تواصل معنا",
	"お問い合わせ",
];

const fontSizes = [120, 100, 140, 90, 110];

const CursorDrivenParticleTypographyDemo = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="relative h-[400px] w-full overflow-hidden rounded-xl border bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
				<CursorDrivenParticleTypography
					key={index}
					text={texts[index]}
					fontSize={fontSizes[index]}
					fontFamily='"IBM Plex Sans", "IBM Plex Sans Arabic"'
					color="#fafafa"
				/>
			</div>
			<div className="flex items-center gap-2 text-xs text-muted-foreground">
				<span>Font:</span>
				<span className="font-mono font-semibold text-foreground">IBM Plex Sans + IBM Plex Sans Arabic</span>
			</div>
			<div className="flex flex-wrap gap-2">
				{texts.map((text, i) => (
					<button
						key={i}
						type="button"
						onClick={() => setIndex(i)}
						className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
							i === index
								? "bg-foreground text-background"
								: "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
						}`}
					>
						{text}
					</button>
				))}
			</div>
		</div>
	);
};

export default CursorDrivenParticleTypographyDemo;
