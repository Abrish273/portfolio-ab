// src/components/ServiceCard.jsx
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md flex flex-col items-start space-y-4">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
