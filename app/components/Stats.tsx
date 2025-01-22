const StatsSection = () => {
  const stats = [
    { data: "35K", title: "Customers", icon: "👥" },
    { data: "10K+", title: "Downloads", icon: "📥" },
    { data: "40+", title: "Countries", icon: "🌍" },
    { data: "30M+", title: "Total revenue", icon: "💰" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-gray-700 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our customers are always happy
          </h3>
          <p className="mt-4 text-lg">
            See how our services have created impact globally, encouraging engagement and trust.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <span className="text-5xl">{item.icon}</span>
              <h4 className="mt-4 text-3xl font-extrabold text-indigo-600">{item.data}</h4>
              <p className="mt-2 text-gray-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
