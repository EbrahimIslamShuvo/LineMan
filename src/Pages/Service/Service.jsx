import React from "react";
import PageHeader from "../../Component/Shared/PageHeader";
import useService from "../../Data/useService";
import Card from "../../Component/Shared/Card";

const Service = () => {
  const { services } = useService();
  return (
    <div>
      <div className="">
        <div className="">
          <PageHeader name={"All Services"} image={"https://demo.awaikenthemes.com/lineman/wp-content/uploads/2025/02/service-image-2.jpg"}></PageHeader>
          <div className="grid grid-cols-3 justify-between gap-8 mt-15 w-10/12 mx-auto mb-15">
            {services.map((service) => (
              <Card card={service}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
