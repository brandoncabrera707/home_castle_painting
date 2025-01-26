import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  address1 : string
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  contactMethod: string;
  projectType: string;
  hearAboutUs:string ;
  projectDetails: string;


}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,phone, email, address1, address2, city, state, zipCode,contactMethod , projectType, hearAboutUs, projectDetails
}) => (
  <div>
    <h1>Name: {name}</h1>
    <h1>Phone: {phone}</h1>
    <h1>Email: {email}</h1>
    <h1>Address 1: {address1}</h1>
    <h1>Address Line 2: {address2}</h1>
    <h1>City: {city}</h1>
    <h1>State: {state}</h1>
    <h1>Zip: {zipCode}</h1>
    <h1>Preferred Contact Method: {contactMethod}</h1>
    <h1>Project Type: {projectType}</h1>
    <h1>Hear About Us: {hearAboutUs}</h1>
    <h1>Project Details: {projectDetails}</h1>
  </div>
);