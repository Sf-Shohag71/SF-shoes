import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

export default function Services() {
  return (
    <section className="flex flex-wrap max-container gap-9 justify-center items-center">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}
