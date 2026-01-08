type AnnotationProps = {
	number: number | string;
	description: string;
};

export function Annotation({ number, description }: AnnotationProps) {
	return (
		<div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
			<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm text-white">
				{number}
			</div>
			<p className="text-sm text-white/70 leading-relaxed">{description}</p>
		</div>
	);
}
