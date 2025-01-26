import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../pages/Estimate/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {name, phone, email, addressLine1, adressLine2, city, state, zipCode, contactMethod
    , projectType, referralSource, projectDescription
   } = req.body
  const { data, error } = await resend.emails.send({
    from: 'Home Castle Painting <estimate@jasoncabrera.com>',
    to: ['brandoncabrera707@gmail.com'],
    subject: 'Estimate Request',
    react: await EmailTemplate({
      name: name,
      phone: phone,
      email: email,
      address1: addressLine1,
      address2: adressLine2,
      city: city,
      state: state,
      zipCode: zipCode,
      contactMethod: contactMethod,
      projectType: projectType,
      hearAboutUs: referralSource,
      projectDetails: projectDescription
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};