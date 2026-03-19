import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-primary-200 hover:shadow-lg transition-[border-color,box-shadow] duration-200">
      <h3 className="text-lg font-semibold text-primary-900 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900"
      >
        Mehr Infos
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}
