import * as React from "react";

interface EmailTemplateProps {
  Name: string;
  //Phone: string;
  //Email: string;
  //Address: string
  //City: string;
  //State: string;
  //Zip: string;
  //projectType: string;
  //hearAboutUs: string;
  //projectDetails: string;


}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name//, Phone, Email, Address, City, State, Zip, projectType, hearAboutUs, projectDetails
}) => (
  <div>
    <h1>Name: {Name}!</h1>
  </div>
);