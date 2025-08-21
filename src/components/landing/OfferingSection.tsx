import CardFlip from "@/components/ui/flip-card";

export const OfferingSection: React.FC = () => {
  const cards = [
  {
    title: 'Fast Development',
    subtitle: 'Lower startup costs',
    description: 'Assemble your product prototype with ready-to-use components.',
    features: ['Low Code', 'Flexible Extension', 'Quick Validation', 'Time Saving'],
    color: '#ff2e88',
  },
  {
    title: 'Performance Optimization',
    subtitle: 'Smooth user experience',
    description: 'Built-in optimization tools make your app run faster.',
    features: ['Lazy Loading', 'On-Demand Bundling', 'Responsive Layout', 'High Performance Rendering'],
    color: '#2563eb',
  },
  {
    title: 'Scalability',
    subtitle: 'Ready for future growth',
    description: 'Modular design ensures your project can scale continuously.',
    features: ['Component-Based', 'Plugin Support', 'Easy Maintenance', 'Extensible API'],
    color: '#10b981',
  },
  {
    title: 'Secure & Reliable',
    subtitle: 'Deploy with confidence',
    description: 'Built-in security best practices protect your app and users.',
    features: ['Access Control', 'Data Encryption', 'Security Validation', 'Auto Updates'],
    color: '#f59e0b',
  },
];

  return (
    <section className="py-20 px-20 text-nordic-text relative">
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4 place-items-center ">
        {cards.map((card, index) => (
          <CardFlip key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
