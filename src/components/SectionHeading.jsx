function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-14">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
        {label}
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;